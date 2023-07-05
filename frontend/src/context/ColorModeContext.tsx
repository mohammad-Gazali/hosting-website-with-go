import { deepOrange, deepPurple } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";



export const ColorModeContext = createContext<{
    toggleColorMode: () => void
}>({
	toggleColorMode: () => {},
});

export const ColorModeContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [mode, setMode] = useState<"light" | "dark">("light");

	const colorMode = useMemo(() => {
		return {
			toggleColorMode: () => {
				setMode((preMode) => {
					const result = preMode === "light" ? "dark" : "light";
					localStorage.setItem("color-mode", result)
					return result
				});
			},
		};
	}, []);

	useEffect(() => {
		const localStorageMode = localStorage.getItem("color-mode") as "light" | "dark" | null;

		if (localStorageMode) {
			setMode(localStorageMode)
		}
	}, [])

	const theme = createTheme({
		palette: {
			mode,
			primary: deepPurple,
			secondary: deepOrange,
		},
	});

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
};
