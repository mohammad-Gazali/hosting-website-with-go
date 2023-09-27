import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { SectionTitle } from "../../components";
import { databases } from "../../constants";
import { PRIMARY_COLOR } from "../../main";

const ServiceDatabasesDatabasesPricingSection = () => {
	return (
		<Box component="section">
			<SectionTitle>Databases Pricing</SectionTitle>
			<Grid spacing={3} mt={3} container>
				{databases.map((db) => (
					<Grid xs={12} sm={6} md={4} item key={db.name}>
						<Card>
							<CardContent>
								<Typography
									bgcolor="primary.dark"
									borderRadius={1}
									color="primary.contrastText"
									fontSize={{ xs: 22, md: 30 }}
									fontWeight="light"
									textAlign="center"
									py={1}
								>
									{db.name}
								</Typography>
								<Box display="flex" flexDirection="column" gap={2} mt={2}>
									<Box display="flex" justifyContent="center" height={100} p={2} bgcolor={PRIMARY_COLOR[50]} borderRadius={1}>
										<img src={db.image} alt={db.name} style={{ objectFit: "contain", height: "100%" }} />
									</Box>
                  <Typography flexShrink={1}>
                    {db.description}
                  </Typography>
								  </Box>
                  <Divider sx={{ my: 2 }} />
                  <Box display="flex" alignItems="center" gap={3}>
                    <Box display="flex" alignItems="baseline" textAlign="center">
                      <Typography
                        fontSize={{ xs: 22, md: 32 }}
                        display="inline-block"
                      >
                        ${db.price}
                      </Typography>
                      <Typography
                        fontSize={{ xs: 18, md: 24 }}
                        display="inline-block"
                        color="GrayText"
                      >
                        /year
                      </Typography>
                    </Box>
                    <Button variant="contained" color="secondary" sx={{ flexGrow: 1 }}>
                      Get One
                    </Button>
                  </Box>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default ServiceDatabasesDatabasesPricingSection;
