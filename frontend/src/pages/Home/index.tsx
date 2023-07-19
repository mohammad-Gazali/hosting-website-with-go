import { Box, Container } from "@mui/material";
import HomeHeroSection from "./HomeHeroSection";
import HomeServicesSection from "./HomeServicesSection";
import HomeSecuritySection from "./HomeSecuritySection";
import HomeNumbersSection from "./HomeNumbersSection";
import HomeSponsorsSection from "./HomeSponsorsSection";
import HomeTestimonialsSection from "./HomeTestimonialsSection";
import { AppFooter } from "../../components";



const Home = () => {
  return (
    <Box>
      <HomeHeroSection />
      <Container sx={{ "> *": { py: 8 } }}>
        <HomeServicesSection />
        <HomeSecuritySection />
        <HomeNumbersSection />
        <HomeSponsorsSection />
        <HomeTestimonialsSection />
      </Container>
      <AppFooter />
    </Box>
  )
}

export default Home