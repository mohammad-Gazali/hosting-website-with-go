import { Box, Container } from "@mui/material"
import HostingWordpressIntroSection from "./HostingWordpressIntroSection"
import HostingWordpressFeaturesSection from "./HostingWordpressFeaturesSection"
import HostingWordpressHostingPlans from "./HostingWordpressHostingPlans"
import HostingWordpressWhenToUse from "./HostingWordpressWhenToUse"
import HostingWordpressHostingPlansDetails from "./HostingWordpressHostingPlansDetails"


const HostingWordpress = () => {
  return (
    <Box>
      <HostingWordpressIntroSection />
      <Container sx={{ "> *": { py: 8 } }}>
        <HostingWordpressHostingPlans />
        <HostingWordpressFeaturesSection />
        <HostingWordpressWhenToUse />
        <HostingWordpressHostingPlansDetails />
      </Container>
    </Box>
  )
}

export default HostingWordpress