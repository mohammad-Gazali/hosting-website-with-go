import { Box, Container } from "@mui/material"
import HostingCloudIntroSection from "./HostingCloudIntroSection"
import HostingCloudHostingPlans from "./HostingCloudHostingPlans"
import HostingCloudFeaturesSection from "./HostingCloudFeaturesSection"
import HostingCloudWhenToUse from "./HostingCloudWhenToUse"
import HostingCloudHostingPlansDetails from "./HostingCloudHostingPlansDetails"

const HostingCloud = () => {
  return (
    <Box>
      <HostingCloudIntroSection />
      <Container sx={{ "> *": { py: 8 } }}>
        <HostingCloudHostingPlans />
        <HostingCloudFeaturesSection />
        <HostingCloudWhenToUse />
        <HostingCloudHostingPlansDetails />
      </Container>
    </Box>
  )
}

export default HostingCloud