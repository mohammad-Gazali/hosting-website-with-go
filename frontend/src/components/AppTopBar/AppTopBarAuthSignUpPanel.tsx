import { z } from "zod";
import { TabPanelSignUpProps } from "./AppTopBarAuthModel";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import {
	Button,
	TextField,
	Stack,
	Snackbar,
	Alert,
	CircularProgress,
} from "@mui/material";
import { useRef, useState } from "react";
import axios, { AxiosError } from "axios";
import { API_SIGN_UP_ROUTE } from "../../api-routes";



const SignupPanel = ({ value, index, forwardToLoginTab }: TabPanelSignUpProps) => {
	const [snackbarMessage, setSnackbarMessage] = useState("");
	const [snackbarType, setSnackbarType] = useState<"error" | "success">("error");

	const formRef = useRef<HTMLFormElement>(null);

	const FormValidator = z.object({
		email: z.string().min(1),
		password: z.string().min(1),
		password_confirm: z.string().min(1),
		name: z.string().min(1),
	});

	type FormDataType = z.infer<typeof FormValidator>;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormDataType>({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			password_confirm: "",
		},
		resolver: zodResolver(FormValidator),
	});

	const { mutate: singup, isLoading } = useMutation({
		cacheTime: 0,
		retry: false,
		mutationFn: async (payload: FormDataType) => {
			await axios.post(API_SIGN_UP_ROUTE, payload);
		},
		onError: (err) => {
			if (err instanceof AxiosError) {
				setSnackbarMessage(err.response?.data.error);
			} else {
				setSnackbarMessage("Something went wrong.");
			}
		},
		onSuccess: () => {
			formRef.current?.reset();
			setSnackbarType("success");
			setSnackbarMessage("You have created your account successfully, now login please.");
			forwardToLoginTab();
		},
	});

	const handleSignUp = (data: FormDataType) => {
		singup(data);
	};

	return (
		<form
			ref={formRef}
			noValidate
			role="tabpanel"
			hidden={value !== index}
			id={`auth-tabpanel-${index}`}
			aria-labelledby={`auth-tab-${index}`}
			onSubmit={handleSubmit(handleSignUp)}
		>
			{value === index && (
				<Stack mt={3} spacing={2}>
					<TextField
						label="Name"
						id="name"
						{...register("name")}
                        error={Boolean(errors.name)}
						helperText={errors.name?.message}
					/>
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
					<TextField
						label="Password Confirmation"
						id="password_confirm"
						type="password"
						{...register("password_confirm")}
                        error={Boolean(errors.password_confirm)}
						helperText={errors.password_confirm?.message}
					/>
				</Stack>
			)}
			<Button
				disabled={isLoading}
				type="submit"
				sx={{ mt: 3 }}
				variant="contained"
				endIcon={
					isLoading ? <CircularProgress size={16} color="inherit" /> : undefined
				}
			>
				Sign Up
			</Button>
			<Snackbar
				open={Boolean(snackbarMessage)}
				autoHideDuration={4000}
				onClose={() => setSnackbarMessage("")}
			>
				<Alert onClose={() => setSnackbarMessage("")} severity={snackbarType} variant="filled">
					{snackbarMessage}
				</Alert>
			</Snackbar>
		</form>
	);
};

export default SignupPanel;
