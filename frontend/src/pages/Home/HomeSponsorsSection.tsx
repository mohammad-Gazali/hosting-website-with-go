import { Box, Card, Grid, Tooltip } from "@mui/material";
import { sponsors } from "../../constants";
import { PRIMARY_COLOR } from "../../main";
import { SectionTitle } from "../../components";

const HomeSponsorsSection = () => {
	return (
		<Box component="section">
			<SectionTitle>Sponsors</SectionTitle>
			<Grid container spacing={3} sx={{ pt: 2 }}>
				{sponsors.map((sponsor) => (
					<Grid md={2} sm={3} xs={6} item key={sponsor.id}>
						<Tooltip title={sponsor.name}>
							<Card
								sx={{
									height: 80,
									bgcolor: PRIMARY_COLOR[50],
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									p: 3,
									cursor: "pointer",
								}}
							>
								<img
									width={80}
									height={80}
									src={sponsor.icon}
									alt={sponsor.name}
								/>
							</Card>
						</Tooltip>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default HomeSponsorsSection;
