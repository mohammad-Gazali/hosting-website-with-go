import { Send } from "@mui/icons-material";
import { Box, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { basic } from "../../constants";

const MailContact = () => {
  return (
    <Grid xs={12} md={6} item>
        <Card>
            <CardHeader title="Mail" titleTypographyProps={{ fontWeight: "bold", fontSize: { md: 24, sm: 20, xs: 18 } }} avatar={<Send sx={{ border: 1, borderRadius: "50%", p: 1 }} />} />
            <CardContent>
                <Typography>
                If you prefer to send us a letter, our mailing address is: 
                <Box display="block" component="span" mt={2} mb={2.5}>
                    {basic.address.map(detail => (
                        <Box component="span" display="block" key={detail} color="secondary.main" fontFamily="monospace">● {detail}</Box>
                    ))}
                </Box>
                </Typography>
            </CardContent>
        </Card>
    </Grid>
  )
}

export default MailContact