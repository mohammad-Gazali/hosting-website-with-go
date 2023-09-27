import { Box, Container } from "@mui/material"
import ServiceDomainsIntroSection from "./ServiceDomainsIntroSection"
import ServiceDomainsFeaturesSection from "./ServiceDomainsFeaturesSection"
import ServiceDomainsSearchDomainSection from "./ServiceDomainsSearchDomainSection"


const ServiceDomains = () => {
  return (
    <Box>
      <ServiceDomainsIntroSection />
      <Container sx={{ "> *": { py: 8 } }}>
        <ServiceDomainsSearchDomainSection />
        <ServiceDomainsFeaturesSection />
      </Container>
    </Box>
  )
}

export default ServiceDomains