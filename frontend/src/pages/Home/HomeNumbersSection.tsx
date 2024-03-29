import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { numbers } from "../../constants";
import { PRIMARY_COLOR } from "../../main";

const HomeNumbersSection = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<Box component="section">
			<Grid container spacing={3}>
				{numbers.map(({ id, Icon, title, value }) => (
					<Grid item xs={12} md={6} lg={4} key={id}>
						<Card sx={{ display: "flex", bgcolor: PRIMARY_COLOR[50] }}>
							<CardMedia
								sx={{
									bgcolor: PRIMARY_COLOR[100],
									px: 2,
									display: "flex",
									alignItems: "center",
								}}
							>
								{<Icon sx={{ width: 60, height: 60 }} />}
							</CardMedia>
							<CardContent
								sx={{ display: "flex", alignItems: "center", gap: 3 }}
							>
								<Box>
									<Typography
										whiteSpace="nowrap"
										fontFamily="Open Sans"
										textTransform="uppercase"
										fontWeight="bold"
										color="secondary"
										variant={matches ? "h5" : "h6"}
										component="h6"
										mb={1}
									>
										{title}
									</Typography>
									<Typography variant={matches ? "h4" : "h5"} fontWeight="bold">
										+{value}
									</Typography>
								</Box>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default HomeNumbersSection;
