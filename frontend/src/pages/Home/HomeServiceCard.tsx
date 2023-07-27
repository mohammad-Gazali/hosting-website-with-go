import { Button, Card, CardActions, CardContent, CardMedia, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Service } from "../../constants/services";
import { PRIMARY_COLOR } from "../../main";
import { Link } from "react-router-dom";

interface HomeServiceCardProps {
	service: Omit<Service, "features">;
}

const HomeServiceCard = ({ service }: HomeServiceCardProps) => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));
    
	return (
		<Card>
            <CardMedia sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor: PRIMARY_COLOR[50], py: 3 }}>
                <img 
                    height={180}
                    src={service.icon}
                    alt={service.title}
                />
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant={matches ? "h5" : "h6"}>
                    {service.title}
                </Typography>
                <Typography color="text.secondary" variant={matches ? "body1" : "body2"}>
                    {service.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button component={Link} to={service.link} size={matches ? "medium" : "small"}>More Details</Button>
            </CardActions>
        </Card>
	);
};

export default HomeServiceCard;
