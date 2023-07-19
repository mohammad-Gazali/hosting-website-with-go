import { Box, Container, Typography } from "@mui/material"
import { basic } from "../../constants"



const AppFooter = () => {

  return (
    <Box sx={{ bgcolor: "primary.main", py: 5, mt: 4, boxShadow: "0px 0px 14px 6px #00000029" }} component="footer">
        <Container>
            <Typography textAlign="center" color="primary.contrastText">
                Copyright © 2023 {basic.name} Hosting, all rights reserved.
            </Typography>
        </Container>
    </Box>
  )
}



export default AppFooter