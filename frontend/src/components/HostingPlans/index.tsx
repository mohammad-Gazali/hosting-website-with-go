import { Box, Grid } from "@mui/material"
import { SectionTitle } from ".."
import { HostingPlan } from "../../constants/hosting-plans"
import HostingPlansPlan from "./HostingPlansPlan";

interface HostingPlansProps {
  plans: HostingPlan<string>[];
}

const HostingPlans = ({ plans }: HostingPlansProps) => {
  return (
    <Box component="section">
        <SectionTitle>
            Hosting Plans
        </SectionTitle>
        <Grid spacing={3} container mt={{ xs: undefined, sm: 3 }}>
          {plans.map(plan => (
            <Grid xs={12} sm={6} lg={4} key={plan.id} item>
              <HostingPlansPlan maxLinesNumber={Math.max(...plans.map(p => p.features.length))} plan={plan} />
            </Grid>
          ))}
        </Grid>
    </Box>
  )
}

export default HostingPlans