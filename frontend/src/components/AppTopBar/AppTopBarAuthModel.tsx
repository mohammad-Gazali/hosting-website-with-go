import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControl,
	Input,
	InputLabel,
	Slide,
	Stack,
	Tab,
	Tabs,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, useState } from "react";



interface AppTopBarAuthModelProps {
	open: boolean;
	handleClose: () => void;
}

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const AppTopBarAuthModel = ({ open, handleClose }: AppTopBarAuthModelProps) => {
	const [value, setValue] = useState(0);

	const theme = useTheme();

	const matches = !useMediaQuery(theme.breakpoints.up("sm"));

	const handleChange = (_: any, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Dialog
			fullWidth
			fullScreen={matches}
			TransitionComponent={matches ? Transition : undefined}
			open={open}
			onClose={handleClose}
		>
			<DialogTitle>{value === 0 ? "Login" : "Sign Up"}</DialogTitle>
			<DialogContent>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="auth options tabs"
				>
					<Tab label="Login" id="1" aria-controls="auth-tabpanel-1" />
					<Tab label="Sign Up" id="2" aria-controls="auth-tabpanel-2" />
				</Tabs>
				<LoginPanel value={value} index={0} />
				<SignupPanel value={value} index={1} />
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
			</DialogActions>
		</Dialog>
	);
};

interface TabPanelProps {
	index: number;
	value: number;
}

const LoginPanel = ({ value, index }: TabPanelProps) => {
	return (
		<Box
			component="form"
			role="tabpanel"
			hidden={value !== index}
			id={`auth-tabpanel-${index}`}
			aria-labelledby={`auth-tab-${index}`}
		>
			{value === index && (
				<Stack mt={2} spacing={1}>
					<FormControl variant="standard">
						<InputLabel htmlFor="email">Email</InputLabel>
						<Input id="eamil" name="eamil" type="email" />
					</FormControl>
					<FormControl variant="standard">
						<InputLabel htmlFor="password">Password</InputLabel>
						<Input id="password" name="password" type="password" />
					</FormControl>
				</Stack>
			)}
            <Button sx={{ mt: 3 }} variant="contained">
                Login
            </Button>
		</Box>
	);
};

const SignupPanel = ({ value, index }: TabPanelProps) => {
	return (
		<Box
			component="form"
			role="tabpanel"
			hidden={value !== index}
			id={`auth-tabpanel-${index}`}
			aria-labelledby={`auth-tab-${index}`}
		>
			{value === index && (
				<Stack mt={2} spacing={1}>
					<FormControl variant="standard">
						<InputLabel htmlFor="name">Name</InputLabel>
						<Input id="name" name="name" />
					</FormControl>
					<FormControl variant="standard">
						<InputLabel htmlFor="email">Email</InputLabel>
						<Input id="eamil" name="eamil" type="email" />
					</FormControl>
					<FormControl variant="standard">
						<InputLabel htmlFor="password">Password</InputLabel>
						<Input id="password" name="password" type="password" />
					</FormControl>
					<FormControl variant="standard">
						<InputLabel htmlFor="name">Password Confirmation</InputLabel>
						<Input
							id="password_confirm"
							name="password_confirm"
							type="password"
						/>
					</FormControl>
				</Stack>
			)}
            <Button sx={{ mt: 3 }} variant="contained">
                Sign Up
            </Button>
		</Box>
	);
};

export default AppTopBarAuthModel;
