import { Box, Container } from "@mui/material"
import ServiceDomainsIntroSection from "./ServiceDomainsIntroSection"
import ServiceDomainsFeaturesSection from "./ServiceDomainsFeaturesSection"

const ServiceDomains = () => {
  return (
    <Box>
      <ServiceDomainsIntroSection />
      <Container sx={{ "> *": { py: 8 } }}>
        <ServiceDomainsFeaturesSection />
      </Container>
    </Box>
  )
}

export default ServiceDomains