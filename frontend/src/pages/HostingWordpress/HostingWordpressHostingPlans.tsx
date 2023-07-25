import { HostingPlans } from "../../components"
import { wordpressService } from "../../constants/services"

const HostingWordpressHostingPlans = () => {
  return (
    <HostingPlans
    plans={wordpressService.hostingPlans!}
    />
  )
}

export default HostingWordpressHostingPlans