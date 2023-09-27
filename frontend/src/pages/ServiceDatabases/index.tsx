import { Box, Container } from "@mui/material"
import ServiceDatabasesIntroSection from "./ServiceDatabasesIntroSection"
import ServiceDatabasesFeaturesSection from "./ServiceDatabasesFeaturesSection"
import ServiceDatabasesDatabasesPricingSection from "./ServiceDatabasesDatabasesPricingSection"

const ServiceDatabases = () => {
  return (
    <Box>
      <ServiceDatabasesIntroSection />
      <Container sx={{ "> *": { py: 8 } }}>
        <ServiceDatabasesDatabasesPricingSection />
        <ServiceDatabasesFeaturesSection />
      </Container>
    </Box>
  )
}

export default ServiceDatabases