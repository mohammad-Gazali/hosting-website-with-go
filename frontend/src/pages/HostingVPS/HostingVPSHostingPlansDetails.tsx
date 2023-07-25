import { HostingPlansDetails } from "../../components"
import { vpsService } from "../../constants/services"

const HostingVPSHostingPlansDetails = () => {
  return (
    <HostingPlansDetails
    plans={vpsService.hostingPlans!}
    />
  )
}

export default HostingVPSHostingPlansDetails