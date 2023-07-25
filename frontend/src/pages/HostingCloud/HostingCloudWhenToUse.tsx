import { HostingWhenToUse } from "../../components"
import { cloudService } from "../../constants/services"


const HostingCloudWhenToUse = () => {
  return (
    <HostingWhenToUse
    name="cloud"
    whenToUse={cloudService.whenToUse!}
    />
  )
}

export default HostingCloudWhenToUse