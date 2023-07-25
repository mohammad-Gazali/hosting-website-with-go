import VPSImage from "../../assets/vps_intro.svg";
import { ImageWithAttribution, ServiceIntro } from "../../components";
import { vpsService } from "../../constants/services";

const HostingVPSIntroSection = () => {
  return (
    <ServiceIntro
      title={vpsService.title}
      description={vpsService.content}
      imageComponent={<ImageWithAttribution width={330} src={VPSImage} alt="vps hosting" attributionUrl="https://storyset.com/technology" centerCaption onlyBig storyset storysetText="Technology illustrations by Storyset" />}
    />
  )
}


export default HostingVPSIntroSection