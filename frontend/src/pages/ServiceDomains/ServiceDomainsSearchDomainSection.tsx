import { Language } from "@mui/icons-material";
import {
	Box,
	Button,
	Card,
	CardContent,
	Grid,
	TextField,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { domains } from "../../constants";
import { PRIMARY_COLOR } from "../../main";

const ServiceDomainsSearchDomainSection = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<Box component="section">
			<Typography
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: 1,
				}}
				color="secondary"
				fontWeight="bold"
				variant={matches ? "h4" : "h5"}
				textAlign="center"
			>
				DOMAINS SEARCH <Language fontSize={matches ? "large" : "medium"} />
			</Typography>
			<Box
				sx={{
					mt: 3,
					"& > form": {
						display: "flex",
						flexDirection: { xs: "column", sm: "row" },
						gap: 2,
					},
				}}
			>
				<form>
					<TextField label="Domain Name" id="domain-name" fullWidth />
					<Button sx={{ px: { sm: 3 } }} variant="contained">
						Search
					</Button>
				</form>
			</Box>
			<Grid spacing={3} mt={2} container>
				{domains.map((domain) => (
					<Grid md={4} sm={6} xs={12} key={domain.name} item>
						<Card sx={{ backgroundColor: PRIMARY_COLOR[50] }}>
							<CardContent>
								<Box display="flex" alignItems="center" gap={3} mb={3}>
									<Typography
										borderRadius={1}
										width={120}
										color="primary.contrastText"
										bgcolor="primary.dark"
										fontSize={{ xs: 30, md: 36 }}
										fontWeight="bold"
										textAlign="center"
										py={1}
									>
										.{domain.name}
									</Typography>
									<Box display="flex" alignItems="baseline" textAlign="center">
										<Typography
											fontSize={{ xs: 22, md: 32 }}
											display="inline-block"
										>
											${domain.price}
										</Typography>
										<Typography
											fontSize={{ xs: 18, md: 24 }}
											display="inline-block"
											color="GrayText"
										>
											/year
										</Typography>
									</Box>
								</Box>
								<Button fullWidth color="info" variant="contained">
									Get One
								</Button>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default ServiceDomainsSearchDomainSection;
