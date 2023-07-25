import { HostingPlans } from "../../components"
import { vpsService } from "../../constants/services"

const HostingVPSHostingPlans = () => {
  return (
    <HostingPlans
    plans={vpsService.hostingPlans!}
    />
  )
}

export default HostingVPSHostingPlans