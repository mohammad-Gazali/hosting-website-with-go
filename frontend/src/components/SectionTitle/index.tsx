import { Typography, useMediaQuery, useTheme } from "@mui/material";

const SectionTitle = ({ children }: { children: string }) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));
	const matchesSmaller = useMediaQuery(theme.breakpoints.up("sm"));
    
	return (
		<Typography
			textTransform="uppercase"
			color="primary"
			fontWeight="bold"
			variant={matches ? "h4" : matchesSmaller ? "h5" : "h6"}
			gutterBottom
		>
            {children}
        </Typography>
	);
};

export default SectionTitle;
