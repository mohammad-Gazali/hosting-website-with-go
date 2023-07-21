import { Box, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material"
import { basic } from "../../constants"
import { Phone } from "@mui/icons-material"

const PhoneContact = () => {
  return (
    <Grid xs={12} md={6} item>
        <Card>
            <CardHeader title="Phone" titleTypographyProps={{ fontWeight: "bold", fontSize: { md: 24, sm: 20, xs: 18 } }} avatar={<Phone sx={{ border: 1, borderRadius: "50%", p: 1 }} />} />
            <CardContent>
                <Typography>
                    If you would like to speak with a member of our team, you can reach us at: <Box component="span" display="block" color="secondary.main" mt={1} fontSize={{ md: 20, sm: 18, xs: 16 }} fontFamily="monospace">{basic.phoneNumber}</Box>
                    <br />
                    Our phone lines are open everytime.
                </Typography>
            </CardContent>
        </Card>
    </Grid>
  )
}

export default PhoneContact