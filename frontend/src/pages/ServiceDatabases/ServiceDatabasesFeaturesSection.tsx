import { ServiceFeatures } from "../../components"
import { databasesService } from "../../constants/services"

const ServiceDatabasesFeaturesSection = () => {
  return (
    <ServiceFeatures
        features={databasesService.features}
    />
  )
}

export default ServiceDatabasesFeaturesSection