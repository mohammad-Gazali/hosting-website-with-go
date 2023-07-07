import {
	AppBar,
	Box,
	Button,
	Container,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	ListSubheader,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@mui/material";
import { basic } from "../../constants";
import AppTopBarThemeToggler from "./AppTopBarThemeToggler";
import { useNavigate } from "react-router-dom";
import { MouseEvent, useState } from "react";
import {
	BackupTable,
	Cloud,
	ExpandMore,
	HelpOutline,
	Home,
	Language,
	Menu as MenuIcon,
	Phone,
	Storage,
	Web,
} from "@mui/icons-material";

const AppTopBar = () => {
	const [anchorElHosting, setAnchorElHosting] = useState<null | HTMLElement>(
		null
	);
	const [anchorElServices, setAnchorElServices] = useState<null | HTMLElement>(null);
	const [drawerOpen, setDrawerOpen] = useState(false);
	
	const navigate = useNavigate();


	const openHosting = Boolean(anchorElHosting);
	const openServices = Boolean(anchorElServices);
	

	const handleClickHosting = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorElHosting(event.currentTarget);
	};

	const handleCloseHosting = () => {
		setAnchorElHosting(null);
	};

	const handleClickServices = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorElServices(event.currentTarget);
	};

	const handleCloseServices = () => {
		setAnchorElServices(null);
	}

	const handleMenuItemClickHosting = (type: "wordpress" | "cloud" | "vps") => {
		return () => {
			navigate(`/services/hosting/${type}`);
			handleCloseHosting();
		};
	};

	const handleMenuItemClickServices = (type: "domains" | "databases") => {
		return () => {
			navigate(`/services/${type}`);
			handleCloseServices();
		}
	}

	const handleListItemClick = (url: string) => {
		return () => {
			navigate(url);
			setDrawerOpen(false);
		};
	};

	const handleToggleDrawer = () => {
		setDrawerOpen((prevState) => !prevState);
	};

	return (
		<AppBar component="header" position="sticky">
			<Container>
				<Toolbar component="nav">
					<IconButton
						color="inherit"
						edge="start"
						sx={{ mr: 2, display: { md: "none" } }}
						onClick={() => setDrawerOpen(true)}
					>
						<MenuIcon />
					</IconButton>
					<Box sx={{ cursor: "pointer", display: "flex", mr: "auto" }} onClick={() => navigate("/")}>
						<Box
							sx={{
								mr: 2,
								display: { xs: "none", md: "block" },
							}}
						>
							<img width={24} src="/logo-white.svg" alt="logo" />
						</Box>
						<Typography
							flexGrow={1}
							fontFamily="Open Sans"
							variant="h6"
							component="h1"
							textTransform="uppercase"
						>
							{basic.name}
						</Typography>
					</Box>
					<Box
						sx={{ my: 2, mr: 2, display: { xs: "none", md: "flex" }, gap: 1 }}
					>
						<Button onClick={handleClickHosting} color="inherit" sx={{ display: "" }}>
							Hosting{" "}
							<ExpandMore
								sx={openHosting ? { rotate: "180deg", ml: 0.5 } : { ml: 0.5 }}
							/>
						</Button>
						<Menu
							anchorEl={anchorElHosting}
							open={openHosting}
							onClose={handleCloseHosting}
							MenuListProps={{
								"aria-labelledby": "basic-button",
							}}
						>
							<MenuItem onClick={handleMenuItemClickHosting("wordpress")}>
								Wordpress
							</MenuItem>
							<MenuItem onClick={handleMenuItemClickHosting("cloud")}>Cloud</MenuItem>
							<MenuItem onClick={handleMenuItemClickHosting("vps")}>VPS</MenuItem>
						</Menu>
						<Button onClick={handleClickServices} color="inherit" sx={{ display: "" }}>
							More Services{" "}
							<ExpandMore
								sx={openServices ? { rotate: "180deg", ml: 0.5 } : { ml: 0.5 }}
							/>
						</Button>
						<Menu
							anchorEl={anchorElServices}
							open={openServices}
							onClose={handleCloseServices}
							MenuListProps={{
								"aria-labelledby": "basic-button",
							}}
						>
							<MenuItem onClick={handleMenuItemClickServices("domains")}>
								Domains
							</MenuItem>
							<MenuItem onClick={handleMenuItemClickServices("databases")}>Databases</MenuItem>
						</Menu>
						<Button onClick={() => navigate("/")} color="inherit">
							Home
						</Button>
						<Button onClick={() => navigate("/contact")} color="inherit">
							Contact
						</Button>
						<Button onClick={() => navigate("/faq")} color="inherit">
							FAQ
						</Button>
						<Button variant="outlined" color="inherit">
							Login
						</Button>
					</Box>
					<AppTopBarThemeToggler />
				</Toolbar>
			</Container>
			<Drawer
				anchor="left"
				open={drawerOpen}
				onClose={handleToggleDrawer}
				ModalProps={{ disableScrollLock: true }}
			>
				<Box sx={{ width: 250 }} role="presentation">
					<Typography
						onClick={() => {
							navigate("/");
							setDrawerOpen(false);
						}}
						my={2}
						ml={4}
						fontFamily="Open Sans"
						variant="h6"
						component="h1"
						textTransform="uppercase"
						sx={{ cursor: "pointer" }}
					>
						{basic.name}
					</Typography>
					<Divider />
					<List>
						<ListSubheader>Hosting Services</ListSubheader>
						<ListItem disablePadding>
							<ListItemButton
								onClick={handleListItemClick("/services/hosting/wordpress")}
							>
								<ListItemIcon>
									<Web />
								</ListItemIcon>
								<ListItemText>Wordpress</ListItemText>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton onClick={handleListItemClick("/services/hosting/cloud")}>
								<ListItemIcon>
									<Cloud />
								</ListItemIcon>
								<ListItemText>Cloud</ListItemText>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton onClick={handleListItemClick("/services/hosting/vps")}>
								<ListItemIcon>
									<Storage />
								</ListItemIcon>
								<ListItemText>VPS</ListItemText>
							</ListItemButton>
						</ListItem>
					</List>
					<Divider />
					<List>
						<ListSubheader>Other Services</ListSubheader>
						<ListItem disablePadding>
							<ListItemButton onClick={handleListItemClick("/services/domains")}>
								<ListItemIcon>
									<Language />
								</ListItemIcon>
								<ListItemText>Domains</ListItemText>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton onClick={handleListItemClick("/services/databases")}>
								<ListItemIcon>
									<BackupTable />
								</ListItemIcon>
								<ListItemText>Databases</ListItemText>
							</ListItemButton>
						</ListItem>
					</List>
					<Divider />
					<List>
						<ListItem disablePadding>
							<ListItemButton onClick={handleListItemClick("/")}>
								<ListItemIcon>
									<Home />
								</ListItemIcon>
								<ListItemText>Home</ListItemText>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton onClick={handleListItemClick("/contact")}>
								<ListItemIcon>
									<Phone />
								</ListItemIcon>
								<ListItemText>Contact</ListItemText>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton onClick={handleListItemClick("/faq")}>
								<ListItemIcon>
									<HelpOutline />
								</ListItemIcon>
								<ListItemText>FAQ</ListItemText>
							</ListItemButton>
						</ListItem>
						<ListItem>
							<Button variant="outlined" fullWidth>
								Login
							</Button>
						</ListItem>
					</List>
				</Box>
			</Drawer>
		</AppBar>
	);
};

export default AppTopBar;
