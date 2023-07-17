import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Service } from "../../constants/services";
import { PRIMARY_COLOR } from "../../main";
import { useNavigate } from "react-router-dom";

interface HomeServiceCardProps {
	service: Omit<Service, "features">;
}

const HomeServiceCard = ({ service }: HomeServiceCardProps) => {

    const navigate = useNavigate();
    
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
                <Typography gutterBottom variant="h5">
                    {service.title}
                </Typography>
                <Typography color="text.secondary">
                    {service.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => navigate(service.link)}>More Details</Button>
            </CardActions>
        </Card>
	);
};

export default HomeServiceCard;
