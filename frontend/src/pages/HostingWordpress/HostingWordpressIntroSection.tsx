import WordpressImage from "../../assets/wordpress_intro.svg";
import { ImageWithAttribution, ServiceIntro } from "../../components";
import { wordpressService } from "../../constants/services";

const HostingWordpressIntroSection = () => {
  return (
    <ServiceIntro
      title={wordpressService.title}
      description={wordpressService.content}
      imageComponent={<ImageWithAttribution width={330} src={WordpressImage} alt="wordpress hosting" attributionUrl="https://storyset.com/web" centerCaption onlyBig storyset storysetText="Web illustrations by Storyset" />}
    />
  )
}


export default HostingWordpressIntroSection