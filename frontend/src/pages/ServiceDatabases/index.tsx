import { Box, Container } from "@mui/material"
import ServiceDatabasesIntroSection from "./ServiceDatabasesIntroSection"
import ServiceDatabasesFeaturesSection from "./ServiceDatabasesFeaturesSection"

const ServiceDatabases = () => {
  return (
    <Box>
      <ServiceDatabasesIntroSection />
      <Container sx={{ "> *": { py: 8 } }}>
        <ServiceDatabasesFeaturesSection />
      </Container>
    </Box>
  )
}

export default ServiceDatabases