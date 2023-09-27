import { Container, Paper, Typography } from "@mui/material";

const Dashboard = () => {
	return (
		<Container sx={{ flexGrow: 1, mt: 10 }}>
			<Paper
				sx={{
					bgcolor: "secondary.main",
					width: 200,
					height: 200,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					borderRadius: 100,
					mx: "auto",
				}}
			>
				<img src="/logo-white.svg" alt="logo" />
			</Paper>
      <Typography textAlign="center" variant="h2" mt={2} fontWeight="bold">
        Dashboard
      </Typography>
      <Typography textAlign="center" variant="h5" mb={10.6} fontWeight="light">
        Coming Soon...
      </Typography>
		</Container>
	);
};

export default Dashboard;
