import { Box, Grid, Typography } from "@mui/material";
import { services } from "../../constants";
import HomeServiceCard from "./HomeServiceCard";



const HomeServices = () => {
	return (
        <Box component="section">
            <Typography textTransform="uppercase" color="primary" fontWeight="bold" variant="h4" gutterBottom>
                Our Services
            </Typography>
            <br />
            <Grid spacing={2} container>
                {services.map((service) => {
                    return (
                        <Grid sm={6} md={4} lg={4} key={service.id} item>
                            <HomeServiceCard service={service} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
	);
};

export default HomeServices;
