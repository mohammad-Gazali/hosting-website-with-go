import { HostingWhenToUse } from "../../components"
import { vpsService } from "../../constants/services"


const HostingVPSWhenToUse = () => {
  return (
    <HostingWhenToUse
    name="vps"
    whenToUse={vpsService.whenToUse!}
    />
  )
}

export default HostingVPSWhenToUse