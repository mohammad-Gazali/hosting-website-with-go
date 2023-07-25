import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	Typography,
} from "@mui/material";
import { Feature } from "../../constants/services-features";
import { PRIMARY_COLOR } from "../../main";

interface ServiceFeaturesFeatureProps {
	feature: Feature;
	order: number;
}

const ServiceFeaturesFeature = ({
	feature,
	order,
}: ServiceFeaturesFeatureProps) => {
	return (
		<Card sx={{ bgcolor: PRIMARY_COLOR[50] }}>
			<CardHeader
				title={feature.title}
				titleTypographyProps={{
					fontSize: { xs: 18, md: 22, lg: 26 },
				}}
				avatar={
					<Avatar
						sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}
					>
						{order}
					</Avatar>
				}
			/>
			<CardContent>
				<Typography>{feature.description}</Typography>
			</CardContent>
		</Card>
	);
};

export default ServiceFeaturesFeature;
