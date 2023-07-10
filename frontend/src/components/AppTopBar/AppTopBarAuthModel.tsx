import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Slide,
	Tab,
	Tabs,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, useState } from "react";
import LoginPanel from "./AppTopBarAuthLoginPanel";
import SignupPanel from "./AppTopBarAuthSignUpPanel";



interface AppTopBarAuthModelProps {
	open: boolean;
	handleClose: () => void;
}

export interface TabPanelLoginProps {
	index: number;
	value: number;
	handleClose: () => void;
}

export interface TabPanelSignUpProps {
	index: number;
	value: number;
	forwardToLoginTab: () => void;
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
				<LoginPanel handleClose={handleClose} value={value} index={0} />
				<SignupPanel forwardToLoginTab={() => setValue(0)} value={value} index={1} />
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
			</DialogActions>
		</Dialog>
	);
};


export default AppTopBarAuthModel;
