import { Box, Typography, Container, useMediaQuery, useTheme } from "@mui/material"
import { basic } from "../../constants"
import { PRIMARY_COLOR } from "../../context/ColorModeContext"
import { ImageWithAttribution } from "../../components"
import HeroImage from "../../assets/hero_home_page.svg";



const HomeHero = () => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ display: "flex", minHeight: "65vh", px: { sm: "45px", xs: "29px" }, backgroundColor: PRIMARY_COLOR[50] }}>
        <Container sx={{ display: "flex", justifyContent: "center", py: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Box textAlign={matches ? "left" : "center"} mb={1}>
                <Typography display="inline-block" component="h1" variant={matches ? "h2" : "h3"} color="secondary" fontFamily="Open Sans" textTransform="uppercase">{basic.name}</Typography>{" "}
                <Typography display="inline-block" component="h1" variant={matches ? "h2" : "h3"} fontWeight={700} ml={2}>
                    Hosting
                </Typography>
            </Box>
            <Typography textAlign={matches ? "left" : "center"} component="p" variant={matches ? "h6" : "body1"} maxWidth={600}>
              {basic.intro}
            </Typography>
          </Box>
          <ImageWithAttribution width={330} src={HeroImage} alt="server and computer" attributionUrl={"https://storyset.com/technology"} centerCaption onlyBig storyset storysetText="Technology illustrations by Storyset" />
        </Container>
    </Box>
  )
}

export default HomeHero