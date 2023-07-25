import { ServiceFeatures } from "../../components"
import { cloudService } from "../../constants/services"


const HostingCloudFeaturesSection = () => {
  return (
    <ServiceFeatures
        features={cloudService.features}
    />
  )
}

export default HostingCloudFeaturesSection