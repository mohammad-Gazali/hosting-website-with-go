import { HostingPlans } from "../../components"
import { cloudService } from "../../constants/services"

const HostingCloudHostingPlans = () => {
  return (
    <HostingPlans 
    plans={cloudService.hostingPlans!}
    />
  )
}

export default HostingCloudHostingPlans