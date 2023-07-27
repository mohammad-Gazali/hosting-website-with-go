import { z } from "zod";
import { TabPanelLoginProps } from "./AppTopBarAuthModel";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import {
    Alert,
	Button,
	CircularProgress,
	Snackbar,
	Stack,
	TextField,
} from "@mui/material";
import axios, { AxiosError } from "axios";
import { useRef, useState } from "react";
import { API_LOGIN_ROUTE } from "../../api-routes";
import { useAuth } from "../../context/AuthContext";



const LoginPanel = ({ value, index, handleClose }: TabPanelLoginProps) => {
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const formRef = useRef<HTMLFormElement>(null);

	const { handleGetUserData } = useAuth();

	const FormValidator = z.object({
        email: z.string().min(1),
		password: z.string().min(1),
	});
    

	type FormDataType = z.infer<typeof FormValidator>;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormDataType>({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: zodResolver(FormValidator),
	});

	const { mutate: login, isLoading } = useMutation({
		cacheTime: 0,
		retry: false,
        mutationFn: async (payload: FormDataType) => {
            await axios.post(API_LOGIN_ROUTE, payload, {
				withCredentials: true,  //| this option is neccessary to get the cookie from the server
			});
        },
        onError: (err) => {
            if (err instanceof AxiosError) {
                setSnackbarMessage(err.response?.data.error)
            } else {
                setSnackbarMessage("Something went wrong.")
            }
        },
        onSuccess: () => {
			localStorage.setItem("is_auth", "true");
            formRef.current?.reset();   
            handleClose();
			handleGetUserData();
        }
    });

	const handleLogin = (data: FormDataType) => {
		login(data);
	};


	return (
		<form
            ref={formRef}
			onSubmit={handleSubmit(handleLogin)}
			noValidate
			role="tabpanel"
			hidden={value !== index}
			id={`auth-tabpanel-${index}`}
			aria-labelledby={`auth-tab-${index}`}
		>
			{value === index && (
				<Stack mt={3} spacing={2}>
					<TextField
						label="Email"
						id="eamil"
						type="email"
						{...register("email")}
						error={Boolean(errors.email)}
                        helperText={errors.email?.message}
					/>
					<TextField
						label="Password"
						id="password"
						type="password"
						{...register("password")}
						error={Boolean(errors.password)}
                        helperText={errors.password?.message}
					/>
				</Stack>
			)}
			<Button disabled={isLoading} type="submit" sx={{ mt: 3 }} variant="contained" endIcon={isLoading ? <CircularProgress size={16} color="inherit" /> : undefined}>
				Login
			</Button>
            <Snackbar open={Boolean(snackbarMessage)} autoHideDuration={4000} onClose={() => setSnackbarMessage("")}>
                <Alert onClose={() => setSnackbarMessage("")} severity="error" variant="filled">
                    {snackbarMessage}
                </Alert>
            </Snackbar>
		</form>
	);
};

export default LoginPanel;
