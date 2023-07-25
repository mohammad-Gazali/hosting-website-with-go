import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { PRIMARY_COLOR } from "../../main";
import { ReactNode } from "react";



interface ServiceIntroProps {
    title: string;
    description: string;
    imageComponent: ReactNode;
}

const ServiceIntro = ({ title, description, imageComponent }: ServiceIntroProps) => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const matchesSmaller = useMediaQuery(theme.breakpoints.up("sm"));

  return <Box component="section" sx={{ display: "flex", minHeight: "65vh", px: { sm: "45px", xs: "29px" }, backgroundColor: PRIMARY_COLOR[50] }}>
  <Container sx={{ display: "flex", justifyContent: "center", py: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Box textAlign={matches ? "left" : "center"} mb={1}>
            <Typography display="inline-block" component="h1" variant={matches ? "h2" : matchesSmaller ? "h3" : "h4"} fontWeight={700}>
                {title}
            </Typography>
        </Box>
        <Typography textAlign={matches ? "left" : "center"} component="p" variant={matches ? "h6" : "body1"} maxWidth={600}>
            {description}
        </Typography>
      </Box>
      {imageComponent}
    </Container>
</Box>
}

export default ServiceIntro