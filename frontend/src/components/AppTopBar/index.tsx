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
	Cloud,
	ExpandMore,
	HelpOutline,
	Home,
	Menu as MenuIcon,
	Phone,
	Storage,
	Web,
} from "@mui/icons-material";

const AppTopBar = () => {
	const [anchorElHosting, setAnchorElHosting] = useState<null | HTMLElement>(
		null
	);
	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setDrawerOpen((prevState) => !prevState);
	};

	const open = Boolean(anchorElHosting);
	const navigate = useNavigate();

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorElHosting(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorElHosting(null);
	};

	const handleMenuItemClick = (type: "wordpress" | "cloud" | "vps") => {
		return () => {
			navigate(`/hosting/${type}`);
			handleClose();
		};
	};

	const handleListItemClick = (url: string) => {
		return () => {
			navigate(url);
			setDrawerOpen(false);
		};
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
						<Button onClick={handleClick} color="inherit" sx={{ display: "" }}>
							Hosting{" "}
							<ExpandMore
								sx={open ? { rotate: "180deg", ml: 0.5 } : { ml: 0.5 }}
							/>
						</Button>
						<Menu
							anchorEl={anchorElHosting}
							open={open}
							onClose={handleClose}
							MenuListProps={{
								"aria-labelledby": "basic-button",
							}}
						>
							<MenuItem onClick={handleMenuItemClick("wordpress")}>
								Wordpress
							</MenuItem>
							<MenuItem onClick={handleMenuItemClick("cloud")}>Cloud</MenuItem>
							<MenuItem onClick={handleMenuItemClick("vps")}>VPS</MenuItem>
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
					</Box>
					<AppTopBarThemeToggler />
				</Toolbar>
			</Container>
			<Drawer
				anchor="left"
				open={drawerOpen}
				onClose={toggleDrawer}
				ModalProps={{ disableScrollLock: true }}
			>
				<Box sx={{ width: 250, cursor: "pointer" }} role="presentation">
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
					>
						{basic.name}
					</Typography>
					<Divider />
					<List>
						<ListSubheader>Hosting Services</ListSubheader>
						<ListItem disablePadding>
							<ListItemButton
								onClick={handleListItemClick("/hosting/wordpress")}
							>
								<ListItemIcon>
									<Web />
								</ListItemIcon>
								<ListItemText>Wordpress</ListItemText>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton onClick={handleListItemClick("/hosting/cloud")}>
								<ListItemIcon>
									<Cloud />
								</ListItemIcon>
								<ListItemText>Cloud</ListItemText>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton onClick={handleListItemClick("/hosting/vps")}>
								<ListItemIcon>
									<Storage />
								</ListItemIcon>
								<ListItemText>VPS</ListItemText>
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
					</List>
				</Box>
			</Drawer>
		</AppBar>
	);
};

export default AppTopBar;
