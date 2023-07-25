import { HostingPlansDetails } from "../../components"
import { wordpressService } from "../../constants/services"

const HostingWordpressHostingPlansDetails = () => {
  return (
    <HostingPlansDetails
    plans={wordpressService.hostingPlans!}
    />
  )
}

export default HostingWordpressHostingPlansDetails