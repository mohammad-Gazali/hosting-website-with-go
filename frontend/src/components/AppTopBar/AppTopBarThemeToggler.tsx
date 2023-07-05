import { IconButton, useTheme } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";



const AppTopBarThemeToggler = () => {
	const theme = useTheme();

	const { toggleColorMode } = useContext(ColorModeContext);

	return (
		<IconButton
			size="large"
			edge="end"
			color="inherit"
			aria-hidden="true"
			sx={
				theme.palette.mode === "dark"
					? { transition: ".3s", rotate: "180deg" }
					: { transition: ".3s", rotate: "0deg" }
			}
			onClick={toggleColorMode}
		>
			{theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
		</IconButton>
	);
};

export default AppTopBarThemeToggler;
