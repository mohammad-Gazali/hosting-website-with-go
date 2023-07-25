import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { SectionTitle } from "..";
import { WhenToUseCase } from "../../constants/hosting-when-to-use";

interface HostingWhenToUseProps {
    name: string;
    whenToUse: WhenToUseCase[];
}

const HostingWhenToUse = ({ name, whenToUse }: HostingWhenToUseProps) => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));    

  return <Box component="section">
    <SectionTitle>
        When To Use {name} ?
    </SectionTitle>
    <Typography color="secondary" fontWeight="medium" fontSize={{ xs: 16, sm: 20, md: 22, lg: 24 }} mt={3} gutterBottom>
        When You...
    </Typography>
    <Box>
        {whenToUse.map(useCase => (
            <Box key={useCase.id}>
                <Typography variant={matches ? "body1" : "body2"}>- {useCase.content.split(" ").slice(2).join(" ")}</Typography>
                <br />
            </Box>
        ))}
    </Box>
  </Box>
}

export default HostingWhenToUse