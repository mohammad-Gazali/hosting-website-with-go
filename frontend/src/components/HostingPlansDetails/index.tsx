import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from "@mui/material";
import { SectionTitle } from "..";
import { HostingPlan } from "../../constants/hosting-plans";
import { camelCaseToCapitalizedWords } from "./utils";
import { Cancel, CheckCircle } from "@mui/icons-material";
import { PRIMARY_COLOR } from "../../main";

interface HostingPlansDetailsProps {
	plans: HostingPlan<string>[];
}

const HostingPlansDetails = ({ plans }: HostingPlansDetailsProps) => {

	const planComparedFeatures = Object.keys(plans[0].comparedFeatures)

	const theme = useTheme();

	return (
		<Box component="section" id="plans-details">
			<SectionTitle>Plans Details</SectionTitle>
			<Paper sx={{ overflow: "hidden" }} elevation={3}>
				<TableContainer sx={{ maxHeight: 440 }}>
					<Table stickyHeader>
						<TableHead>
							<TableRow>
								<TableCell sx={{ bgcolor: PRIMARY_COLOR[50] }}></TableCell>
								{plans.map(plan => (
									<TableCell key={plan.id} sx={{ bgcolor: PRIMARY_COLOR[50], whiteSpace: "nowrap" }}>
										{plan.name}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody sx={{ position: "relative" }}>
							{planComparedFeatures.map(feature => (
								<TableRow hover>
									<TableCell sx={{ whiteSpace: "nowrap", borderRight: 1, borderRightColor: theme.palette.divider }}>{feature === "ssl" ? "SSL" : feature === "cdn" ? "CDN" : camelCaseToCapitalizedWords(feature)}</TableCell>
									<TableCell>{handleTableCell(plans[0].comparedFeatures[feature].value)}</TableCell>
									<TableCell>{handleTableCell(plans[1].comparedFeatures[feature].value)}</TableCell>
									<TableCell>{handleTableCell(plans[2].comparedFeatures[feature].value)}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</Box>
	);
};

function handleTableCell(value: string | boolean) {
	if (typeof value === "string") return value;
		
	if (value) {
		return <CheckCircle color="success" />
	}

	return <Cancel color="error" />
}

export default HostingPlansDetails;
