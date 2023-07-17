import { Box, Container } from "@mui/material";
import HomeHero from "./HomeHero";
import HomeServices from "./HomeServices";
import HomeSecuritySection from "./HomeSecuritySection";
import HomeNumbersSection from "./HomeNumbersSection";
import HomeSponsorsSection from "./HomeSponsorsSection";



const Home = () => {
  return (
    <Box>
      <HomeHero />
      <Container sx={{ "> *": { py: 8 } }}>
        <HomeServices />
        <HomeSecuritySection />
        <HomeNumbersSection />
        <HomeSponsorsSection />
      </Container>
    </Box>
  )
}

export default Home