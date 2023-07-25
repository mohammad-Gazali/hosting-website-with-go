import { ImageWithAttribution, ServiceIntro } from "../../components"
import { databasesService } from "../../constants/services"
import DatabasesServiceImage from "../../assets/databases_intro.svg";


const ServiceDatabasesIntroSection = () => {
  return (
    <ServiceIntro
    title={databasesService.title}
    description={databasesService.content}
    imageComponent={<ImageWithAttribution width={330} src={DatabasesServiceImage} alt="databases service" attributionUrl="https://storyset.com/finance" centerCaption onlyBig storyset storysetText="Finance illustrations by Storyset" />}
    />
  )
}


export default ServiceDatabasesIntroSection