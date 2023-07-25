import { HostingWhenToUse } from "../../components"
import { wordpressService } from "../../constants/services"


const HostingWordpressWhenToUse = () => {
  return (
    <HostingWhenToUse
    name="wordpress"
    whenToUse={wordpressService.whenToUse!}
    />
  )
}

export default HostingWordpressWhenToUse