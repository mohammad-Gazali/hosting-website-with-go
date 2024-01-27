import { Box, Stack } from "@mui/material";
import { Feature } from "../../constants/services-features"
import { SectionTitle } from "..";
import ServiceFeaturesFeature from "./ServiceFeaturesFeature";

interface ServiceFeaturesProps {
    features: Feature[];
}

const ServiceFeatures = ({ features }: ServiceFeaturesProps) => {
  return (
    <Box component="section">
        <SectionTitle>
            Service Features
        </SectionTitle>
        <Stack spacing={4} mt={{ xs: 3, md: 5 }}>
            {features.map((feature, index) => (
                <ServiceFeaturesFeature key={feature.id} order={index + 1} feature={feature} />
            ))}
        </Stack>
    </Box>
  )
}

export default ServiceFeatures