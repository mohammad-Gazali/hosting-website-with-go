import { Box, Container, Divider, Grid, Typography } from "@mui/material"
import { SectionTitle } from "../../components"
import { basic } from "../../constants";
import PhoneContact from "./PhoneContact";
import MailContact from "./MailContact";
import EmailContact from "./EmailContact";
import { AuthProvider } from "../../context/AuthContext";


const Contact = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <SectionTitle>
        Contact Us
      </SectionTitle>
      <Typography>
        Thank you for considering <Box component="span" sx={{ fontFamily: "Open Sans", textTransform: "uppercase", color: "secondary.main", display: "inline-block" }}>{basic.name}</Box> Hosting for your hosting needs. If you have any questions or would like more information about our services, please don't hesitate to contact us.
      </Typography>
      <Divider sx={{ my: 5 }} />
      <Grid spacing={3} container>
        <PhoneContact />
        <MailContact />
        <AuthProvider>
          <EmailContact />
        </AuthProvider>
      </Grid>
      <Divider sx={{ my: 5 }} />
      <Typography fontWeight={500} color="primary" fontSize={{ md: 20, sm: 18, xs: 16 }}>
        We look forward to hearing from you!<br /><br />
        Sincerely,<br />
        <Box component="span" sx={{ fontFamily: "Open Sans", fontSize: { md: 20, sm: 18, xs: 16 }, textTransform: "uppercase", color: "secondary.main", display: "inline-block" }}>{basic.name}</Box> Hosting
      </Typography>
    </Container>
  )
}

export default Contact;