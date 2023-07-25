import { ServiceFeatures } from "../../components"
import { vpsService } from "../../constants/services"


const HostingVPSFeaturesSection = () => {
  return (
    <ServiceFeatures
        features={vpsService.features}
    />
  )
}

export default HostingVPSFeaturesSection