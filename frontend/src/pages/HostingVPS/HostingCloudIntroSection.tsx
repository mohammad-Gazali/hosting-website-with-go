import CloudImage from "../../assets/cloud_intro.svg";
import { ImageWithAttribution, ServiceIntro } from "../../components";
import { cloudService } from "../../constants/services";

const HostingCloudIntroSection = () => {
  return (
    <ServiceIntro
      title={cloudService.title}
      description={cloudService.content}
      imageComponent={<ImageWithAttribution width={330} src={CloudImage} alt="cloud hosting" attributionUrl="https://storyset.com/online" centerCaption onlyBig storyset storysetText="Online illustrations by Storyset" />}
    />
  )
}


export default HostingCloudIntroSection