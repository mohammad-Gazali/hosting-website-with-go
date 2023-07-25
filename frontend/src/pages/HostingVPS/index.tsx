import { Box, Container } from "@mui/material"
import HostingVPSIntroSection from "./HostingVPSIntroSection"
import HostingVPSHostingPlans from "./HostingVPSHostingPlans"
import HostingVPSFeaturesSection from "./HostingVPSFeaturesSection"
import HostingVPSWhenToUse from "./HostingVPSWhenToUse"
import HostingVPSHostingPlansDetails from "./HostingVPSHostingPlansDetails"

const HostingVPS = () => {
  return (
    <Box>
      <HostingVPSIntroSection />
      <Container sx={{ "> *": { py: 8 } }}>
        <HostingVPSHostingPlans />
        <HostingVPSFeaturesSection />
        <HostingVPSWhenToUse />
        <HostingVPSHostingPlansDetails />
      </Container>
    </Box>
  )
}

export default HostingVPS