import { Avatar, Box, Card, CardContent, CardHeader, Stack, Typography } from "@mui/material"
import { testimonials } from "../../constants"
import { SectionTitle } from "../../components"
import { PRIMARY_COLOR } from "../../main"

const HomeTestimonialsSection = () => {
  return (
    <Box component="section">
      <SectionTitle>
        Customers Reviews
      </SectionTitle>
      <Stack spacing={3} pt={2}>
        {testimonials.map(testimonial => (
          <Card sx={{ bgcolor: PRIMARY_COLOR[50] }} key={testimonial.id}>
            <CardHeader 
            avatar={
              <Avatar src={testimonial.image} alt={testimonial.name} />
            }
            title={testimonial.name}
            titleTypographyProps={{
              fontWeight: "bold",
              color: "primary"
            }}
            subheader={testimonial.work}
            />
            <CardContent>
              <Typography>
                {testimonial.content}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}

export default HomeTestimonialsSection