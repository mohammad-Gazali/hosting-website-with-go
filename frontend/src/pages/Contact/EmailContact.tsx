import { Email } from "@mui/icons-material";
import {
    Alert,
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	CircularProgress,
	Grid,
	Snackbar,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { basic } from "../../constants";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/AuthContext";
import { useState, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API_SEND_EMAIL_ROUTE } from "../../api-routes";


const successMessage = "Email has been sended successfully.";

const EmailContact = () => {

    const { currentUser } = useAuth();
    const [snackbarMessage, setSnackbarMessage] = useState("");

	const formRef = useRef<HTMLFormElement | null>(null);

	const FormValidator = z.object({
		subject: z.string().min(1),
		message: z.string().min(200),
	});

	type FormDataType = z.infer<typeof FormValidator>;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormDataType>({
		defaultValues: {			
			subject: "",
			message: "",
		},
		resolver: zodResolver(FormValidator),
	});

    const { mutate: sendEmail, isLoading } = useMutation({
		cacheTime: 0,
		retry: false,
		mutationFn: async (payload: FormDataType) => {
			await axios.post(API_SEND_EMAIL_ROUTE, payload, {
				withCredentials: true,
			})
		},
		onError: () => {
			setSnackbarMessage("Something went wrong.");
		},
		onSuccess: () => {
			formRef.current?.reset();
			setSnackbarMessage(successMessage);
		}
	});

    const handleSendEmail = (data: FormDataType) => {
        if (currentUser === null) {
            setSnackbarMessage("You must be signed in to send this message.");
        } else {
			sendEmail(data);
		}
    }

	return (
		<Grid xs={12} item>
			<Card>
				<CardHeader
					title="Email"
					titleTypographyProps={{
						fontWeight: "bold",
						fontSize: { md: 24, sm: 20, xs: 18 },
					}}
					avatar={<Email sx={{ border: 1, borderRadius: "50%", p: 1 }} />}
				/>
				<CardContent>
					<Typography>
						For general inquiries or support requests, you can email us at this
						form for our support email:{" "}
						<Box
							component="span"
							display="block"
							color="primary.main"
							mt={1}
							fontSize={{ md: 20, sm: 18, xs: 16 }}
							fontFamily="monospace"
						>
							{basic.supportEmail}
						</Box>
						<br />
						Our team will do our best to respond to your message as soon as
						possible.
					</Typography>
					<form ref={formRef} onSubmit={handleSubmit(handleSendEmail)} noValidate>
						<Stack spacing={2} mt={6}>
							<TextField
								id="subject"
								label="Subject"
								variant="outlined"
								{...register("subject")}
                                error={Boolean(errors.subject)}
                                helperText={errors.subject?.message}
							/>
							<TextField
								id="message"
								label="Message"
								variant="outlined"
								minRows={4}
								multiline
								{...register("message")}
                                error={Boolean(errors.message)}
                                helperText={Boolean(errors.message) ? errors.message?.message : "* Minimum length is 200 characters"}
							/>
							<Button
								variant="contained"
								type="submit"
								sx={{ width: "fit-content" }}
								disabled={isLoading}
								endIcon={isLoading ? <CircularProgress size={16} color="inherit" /> : undefined}
							>
								Send
							</Button>
						</Stack>
					</form>
				</CardContent>
			</Card>
            <Snackbar open={snackbarMessage !== ""} autoHideDuration={6000} onClose={() => setSnackbarMessage("")}>
                <Alert severity={snackbarMessage !== successMessage ? "error" : "success"} variant="filled">
                    {snackbarMessage}
                </Alert>
            </Snackbar>
		</Grid>
	);
};

export default EmailContact;
