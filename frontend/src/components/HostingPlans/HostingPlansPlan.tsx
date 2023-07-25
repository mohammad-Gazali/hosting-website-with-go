import { Box, Button, Chip, Divider, Paper, Stack, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import { HostingPlan } from "../../constants/hosting-plans";
import { useState } from "react";
import { computeSavePercentTwoYearPlan, computeSavePercentYearPlan, convertTwoYearlyToMonthly, convertYearlyToMonthly } from "./utils";
import { InfoOutlined } from "@mui/icons-material";

interface HostingPlansPlanProps {
	plan: HostingPlan<string>;
  maxLinesNumber: number;
}

const HostingPlansPlan = ({ plan, maxLinesNumber }: HostingPlansPlanProps) => {
	const [selectedDuration, setSelectedDuration] = useState<
		"month" | "year" | "2 years"
	>("year");

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const addingLinesNumber = maxLinesNumber - plan.features.length;

	return (
		<Paper elevation={3} sx={{ p: 2 }}>
			<Typography
				bgcolor="primary.dark"
				borderRadius={1}
				color="primary.contrastText"
				fontSize={{ xs: 22, md: 30 }}
				fontWeight="light"
				textAlign="center"
        py={1}
			>
				{plan.name}
			</Typography>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "baseline",
					my: 2,
				}}
			>
        <Box mr={2}>
          <Chip label={`Save ${selectedDuration === "month" ? "0" : selectedDuration === "year" ? computeSavePercentYearPlan(plan) : computeSavePercentTwoYearPlan(plan)}%`} />
        </Box>
				<Typography fontSize={{ xs: 40, md: 52 }} display="inline-block">
					$
					{selectedDuration === "month"
						? plan.monthlyPricing.toFixed(1)
						: selectedDuration === "year"
						? convertYearlyToMonthly(plan)
						: convertTwoYearlyToMonthly(plan)}
				</Typography>
				<Typography fontSize={{ xs: 18, md: 24 }} display="inline-block" color="GrayText">
					/mo
				</Typography>
			</Box>
			<Stack justifyContent="center" spacing={2} direction="row">
				<Chip
					color="info"
					variant={selectedDuration === "month" ? "filled" : "outlined"}
					onClick={() => setSelectedDuration("month")}
					label="1 month"
				/>
				<Chip
					color="info"
					variant={selectedDuration === "year" ? "filled" : "outlined"}
					onClick={() => setSelectedDuration("year")}
					label="1 year"
				/>
				<Chip
					color="info"
					variant={selectedDuration === "2 years" ? "filled" : "outlined"}
					onClick={() => setSelectedDuration("2 years")}
					label="2 years"
				/>
			</Stack>
			<Divider sx={{ my: 2 }} />
			{plan.features.map((feature) => (
				<Box key={feature.id} sx={{ display: "flex", alignItems: "start", gap: 1 }}>
					<Typography variant={matches ? "body1" : "body2"} sx={{ display: feature.note !== undefined ? "inline-block" : undefined }} gutterBottom>+ {feature.content}</Typography>
          {feature.note !== undefined ? (
            <Tooltip placement="right" title={feature.note}>
              <InfoOutlined color="secondary" fontSize="small" />
            </Tooltip>
          ) : null}
				</Box>
			))}
      {Array(addingLinesNumber).fill(0).map(_ => (
        <Box aria-hidden="true" sx={{ display: "flex", alignItems: "start", gap: 1 }}>
          <Typography gutterBottom sx={{ userSelect: "none", color: "transparent" }}>.</Typography>
        </Box>
      ))}
      <Divider sx={{ my: 2 }} />
      <Button color="secondary" variant="contained" fullWidth>Select Plan</Button>
      <a href="#plans-details">
        <Button variant="outlined" fullWidth sx={{ mt: 2 }}>Compare Plans</Button>
      </a>
		</Paper>
	);
};

export default HostingPlansPlan;
