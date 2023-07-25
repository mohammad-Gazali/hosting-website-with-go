import { HostingPlansDetails } from "../../components"
import { cloudService } from "../../constants/services"

const HostingCloudHostingPlansDetails = () => {
  return (
    <HostingPlansDetails
    plans={cloudService.hostingPlans!}
    />
  )
}

export default HostingCloudHostingPlansDetails