import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import SecureImage from "../../assets/secure_data.svg";
import { ImageWithAttribution } from "../../components";
import { ExpandMore } from "@mui/icons-material";
import { SyntheticEvent, useState } from "react";
import { PRIMARY_COLOR } from "../../main";



const HomeSecuritySection = () => {
	const [expanded, setExpanded] = useState<string | false>(false);

	const handleChange =
		(panel: string) => (_: SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("sm"));

	return (
		<Box sx={{ display: "flex", gap: 2 }} component="section">
			<ImageWithAttribution
				width={300}
				src={SecureImage}
				attributionUrl="https://storyset.com/data"
				storysetText="Data illustrations by Storyset"
				storyset
				centerCaption
				onlyBig
			/>
			<Box>
				<Typography variant={matches ? "body1" : "body2"} gutterBottom>
					We take security seriously. That's why we offer secure hosting as a
					standard feature on all of our hosting plans. Our secure hosting
					includes a number of measures to protect your website and your data
					from cyber threats and data breaches.
				</Typography>
				<br />
				<Typography color="primary" fontWeight="bold" gutterBottom variant={matches ? "body1" : "body2"}>
					Our secure hosting includes:
				</Typography>
				<Accordion
					sx={{
						transition: "0.3s",
						bgcolor: expanded === "panel1" ? PRIMARY_COLOR[50] : undefined,
					}}
					expanded={expanded === "panel1"}
					onChange={handleChange("panel1")}
				>
					<AccordionSummary
						expandIcon={<ExpandMore />}
						aria-controls="panel1a-content"
					>
						<Typography variant={matches ? "body1" : "body2"}>SSL (Secure Sockets Layer) certificates</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography color="text.secondary" variant={matches ? "body1" : "body2"}>
							These encrypt data transmitted between your website and visitors'
							browsers to protect against man-in-the-middle attacks.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion
					sx={{
						transition: "0.3s",
						bgcolor: expanded === "panel2" ? PRIMARY_COLOR[50] : undefined,
					}}
					expanded={expanded === "panel2"}
					onChange={handleChange("panel2")}
				>
					<AccordionSummary
						expandIcon={<ExpandMore />}
						aria-controls="panel2a-content"
					>
						<Typography variant={matches ? "body1" : "body2"}>Firewalls</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography color="text.secondary" variant={matches ? "body1" : "body2"}>
							We use advanced firewalls to block unauthorized access and protect
							against cyber threats.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion
					sx={{
						transition: "0.3s",
						bgcolor: expanded === "panel3" ? PRIMARY_COLOR[50] : undefined,
					}}
					expanded={expanded === "panel3"}
					onChange={handleChange("panel3")}
				>
					<AccordionSummary
						expandIcon={<ExpandMore />}
						aria-controls="panel3a-content"
					>
						<Typography variant={matches ? "body1" : "body2"}>
							DDoS (Distributed Denial of Service) protection
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography color="text.secondary" variant={matches ? "body1" : "body2"}>
							Our DDoS protection measures protect against attacks that aim to
							take down your website by overwhelming it with traffic.
						</Typography>
					</AccordionDetails>
				</Accordion>
			</Box>
		</Box>
	);
};

export default HomeSecuritySection;
