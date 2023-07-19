import { Box, Grid } from "@mui/material";
import { services } from "../../constants";
import HomeServiceCard from "./HomeServiceCard";
import { SectionTitle } from "../../components";



const HomeServicesSection = () => {
	return (
        <Box component="section">
            <SectionTitle>
                Services
            </SectionTitle>
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

export default HomeServicesSection;
