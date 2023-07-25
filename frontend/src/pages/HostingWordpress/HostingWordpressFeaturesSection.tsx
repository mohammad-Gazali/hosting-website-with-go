import { ServiceFeatures } from "../../components"
import { wordpressService } from "../../constants/services"


const HostingWordpressFeaturesSection = () => {
  return (
    <ServiceFeatures
        features={wordpressService.features}
    />
  )
}

export default HostingWordpressFeaturesSection