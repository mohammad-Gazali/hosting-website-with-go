import {
	Alert,
	AppBar,
	Avatar,
	Box,
	Button,
	CircularProgress,
	Container,
	Dialog,
	DialogContent,
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
	Snackbar,
	Toolbar,
	Typography,
	useTheme,
} from "@mui/material";
import { basic } from "../../constants";
import { Link } from "react-router-dom";
import { MouseEvent, useState } from "react";
import {
	BackupTable,
	Cloud,
	Dashboard,
	ExpandMore,
	HelpOutline,
	Home,
	Language,
	Logout,
	Menu as MenuIcon,
	Phone,
	Storage,
	Web,
} from "@mui/icons-material";
import AppTopBarAuthModel from "./AppTopBarAuthModel";
import { useAuth } from "../../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_LOGOUT_ROUTE } from "../../api-routes";

const AppTopBar = () => {
	const [anchorElHosting, setAnchorElHosting] = useState<null | HTMLElement>(
		null
	);
	const [anchorElServices, setAnchorElServices] = useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [openLoadingDialog, setOpenLoadingDialog] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState("");

	const openHosting = Boolean(anchorElHosting);
	const openServices = Boolean(anchorElServices);
	const openUser = Boolean(anchorElUser);

	const { currentUser, removeCurrentUser } = useAuth();

	const theme = useTheme();

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
	};

	const handleClickUser = (event: MouseEvent<HTMLDivElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUser = () => {
		setAnchorElUser(null);
	};

	const handleToggleDrawer = () => {
		setDrawerOpen((prevState) => !prevState);
	};

	const handleOpenModal = () => setOpenModal(true);

	const handleCloseModel = () => setOpenModal(false);

	const handleCloseDrawer = () => setDrawerOpen(false);

	const { refetch: logout } = useQuery({
		queryKey: ["auth-logout"],
		enabled: false,
		queryFn: async () => {
			try {
				// enable loading dialog
				setOpenLoadingDialog(true);

				const { status } = await axios.get(API_LOGOUT_ROUTE, {
					withCredentials: true,
				})

				if (status === 200) removeCurrentUser()

			} catch (error) {

				setSnackbarMessage(String(error))

			} finally {

				setOpenLoadingDialog(false);
				handleCloseUser();
				handleCloseDrawer();

			}

			return null;
		},
	})

	const handleLogout = () => {
		logout();
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
					<Box
						sx={{
							cursor: "pointer",
							display: "flex",
							mr: "auto",
							color: "primary.contrastText",
							textDecoration: "none",
						}}
						component={Link}
						to="/"
					>
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
						<Button
							onClick={handleClickHosting}
							color="inherit"
							sx={{ display: "" }}
						>
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
							<MenuItem
								component={Link}
								to="/services/hosting/wordpress"
								onClick={handleCloseHosting}
							>
								WordPress
							</MenuItem>
							<MenuItem
								component={Link}
								to="/services/hosting/cloud"
								onClick={handleCloseHosting}
							>
								Cloud
							</MenuItem>
							<MenuItem
								component={Link}
								to="/services/hosting/vps"
								onClick={handleCloseHosting}
							>
								VPS
							</MenuItem>
						</Menu>
						<Button
							onClick={handleClickServices}
							color="inherit"
							sx={{ display: "" }}
						>
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
							<MenuItem
								component={Link}
								to="/services/domains"
								onClick={handleCloseServices}
							>
								Domains
							</MenuItem>
							<MenuItem
								component={Link}
								to="/services/databases"
								onClick={handleCloseServices}
							>
								Databases
							</MenuItem>
						</Menu>
						<Button component={Link} to="/" color="inherit">
							Home
						</Button>
						<Button component={Link} to="/contact" color="inherit">
							Contact
						</Button>
						<Button component={Link} to="/faq" color="inherit">
							FAQ
						</Button>
						{currentUser === null ? (
							<Button
								variant="outlined"
								color="inherit"
								onClick={handleOpenModal}
							>
								Login
							</Button>
						) : (
							<>
								<Avatar
									sx={{
										bgcolor: theme.palette.secondary.light,
										cursor: "pointer",
									}}
									alt={currentUser.name}
									onClick={handleClickUser}
								>
									{currentUser.name[0].toUpperCase()}
								</Avatar>
								<Menu
									anchorEl={anchorElUser}
									autoFocus={false}
									open={openUser}
									onClose={handleCloseUser}
									MenuListProps={{
										"aria-labelledby": "basic-button",
									}}
								>
									<MenuItem
										component={Link}
										to="/dashboard"
										onClick={handleCloseUser}
									>
										Dashboard
									</MenuItem>
									<MenuItem onClick={handleLogout}>Log out</MenuItem>
								</Menu>
							</>
						)}
					</Box>
				</Toolbar>
			</Container>
			<Drawer
				anchor="left"
				open={drawerOpen}
				onClose={handleToggleDrawer}
				ModalProps={{ disableScrollLock: true }}
			>
				<Box sx={{ width: 250 }} role="presentation">
					<Box
						onClick={handleCloseDrawer}
						component={Link}
						to="/"
						sx={{ textDecoration: "none", color: "inherit" }}
					>
						<Typography
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
					</Box>
					{currentUser !== null ? (
						<>
							<Divider />
							<List>
								<ListItem>
									<ListItemIcon>
										<Avatar
											sx={{ bgcolor: theme.palette.secondary.light }}
											alt={currentUser.name}
										>
											{currentUser.name[0].toUpperCase()}
										</Avatar>
									</ListItemIcon>
									<ListItemText>
										{currentUser.name}
										<br />
										<Typography
											lineHeight={1.2}
											fontWeight="bold"
											color="GrayText"
										>
											{currentUser.email}
										</Typography>
									</ListItemText>
								</ListItem>
								<ListItem disablePadding>
									<ListItemButton
									component={Link}
									to="/dashboard"
									onClick={handleCloseDrawer}
									>
										<ListItemIcon>
											<Dashboard />
										</ListItemIcon>
										<ListItemText>
											Dashboard
										</ListItemText>
									</ListItemButton>
								</ListItem>
								<ListItem disablePadding>
								<ListItemButton
									onClick={handleLogout}
									>
										<ListItemIcon>
											<Logout />
										</ListItemIcon>
										<ListItemText>
											Logout
										</ListItemText>
									</ListItemButton>
								</ListItem>
							</List>
						</>
					) : null}
					<Divider />
					<List>
						<ListSubheader>Hosting Services</ListSubheader>
						<ListItem disablePadding>
							<ListItemButton
								component={Link}
								to="/services/hosting/wordpress"
								onClick={handleCloseDrawer}
							>
								<ListItemIcon>
									<Web />
								</ListItemIcon>
								<ListItemText>WordPress</ListItemText>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton
								component={Link}
								to="/services/hosting/cloud"
								onClick={handleCloseDrawer}
							>
								<ListItemIcon>
									<Cloud />
								</ListItemIcon>
								<ListItemText>Cloud</ListItemText>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton
								component={Link}
								to="/services/hosting/vps"
								onClick={handleCloseDrawer}
							>
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
							<ListItemButton
								component={Link}
								to="/services/domains"
								onClick={handleCloseDrawer}
							>
								<ListItemIcon>
									<Language />
								</ListItemIcon>
								<ListItemText>Domains</ListItemText>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton
								component={Link}
								to="/services/databases"
								onClick={handleCloseDrawer}
							>
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
							<ListItemButton
								component={Link}
								to="/"
								onClick={handleCloseDrawer}
							>
								<ListItemIcon>
									<Home />
								</ListItemIcon>
								<ListItemText>Home</ListItemText>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton
								component={Link}
								to="/contact"
								onClick={handleCloseDrawer}
							>
								<ListItemIcon>
									<Phone />
								</ListItemIcon>
								<ListItemText>Contact</ListItemText>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton
								component={Link}
								to="/faq"
								onClick={handleCloseDrawer}
							>
								<ListItemIcon>
									<HelpOutline />
								</ListItemIcon>
								<ListItemText>FAQ</ListItemText>
							</ListItemButton>
						</ListItem>
						{currentUser === null ? (
							<ListItem>
								<Button variant="outlined" fullWidth onClick={handleOpenModal}>
									Login
								</Button>
							</ListItem>
						) : null}
					</List>
				</Box>
			</Drawer>
			<AppTopBarAuthModel open={openModal} handleClose={handleCloseModel} />
			<Dialog open={openLoadingDialog} sx={{ p: 6 }}>
				<DialogContent>
					<CircularProgress />
				</DialogContent>
			</Dialog>
			<Snackbar open={Boolean(snackbarMessage)} autoHideDuration={4000} onClose={() => setSnackbarMessage("")}>
                <Alert onClose={() => setSnackbarMessage("")} severity="error" variant="filled">
                    {snackbarMessage}
                </Alert>
            </Snackbar>
		</AppBar>
	);
};

export default AppTopBar;
