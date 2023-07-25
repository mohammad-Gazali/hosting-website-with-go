import { ServiceFeatures } from "../../components"
import { domainsService } from "../../constants/services"

const ServiceDomainsFeaturesSection = () => {
  return (
    <ServiceFeatures
        features={domainsService.features}
    />
  )
}

export default ServiceDomainsFeaturesSection