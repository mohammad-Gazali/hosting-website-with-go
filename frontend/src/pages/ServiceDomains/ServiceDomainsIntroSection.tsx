import { ImageWithAttribution, ServiceIntro } from "../../components"
import { domainsService } from "../../constants/services"
import DomainsServiceImage from "../../assets/domains_intro.svg";


const ServiceDomainsIntroSection = () => {
  return (
    <ServiceIntro
    title={domainsService.title}
    description={domainsService.content}
    imageComponent={<ImageWithAttribution width={330} src={DomainsServiceImage} alt="domains service" attributionUrl="https://storyset.com/web" centerCaption onlyBig storyset storysetText="Web illustrations by Storyset" />}
    />
  )
}


export default ServiceDomainsIntroSection