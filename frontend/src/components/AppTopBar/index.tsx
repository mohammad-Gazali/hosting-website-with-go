import { AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { basic } from "../../constants";
import AppTopBarThemeToggler from "./AppTopBarThemeToggler";



interface MenuItem {
	id: number;
	text: string;
	href: string;
}

interface NavLinkNormal {
	href: string;
	menu: false;
}

interface NavLinkMenu {
	menu: true;
	menuItems: MenuItem[];
}

type NavLink = {
	id: number;
	text: string;
} & (NavLinkNormal | NavLinkMenu);


const navLinks: NavLink[] = [
	{
		id: 1,
		text: "Link 1",
		menu: true,
		menuItems: [
			{ id: 1, text: "Item 1", href: "/" },
			{ id: 2, text: "Item 2", href: "/" },
			{ id: 3, text: "Item 3", href: "/" },
			{ id: 4, text: "Item 4", href: "/" },
		],
	},
	{
		id: 2,
		text: "Link 2",
		menu: true,
		menuItems: [
			{ id: 1, text: "Item 1", href: "/" },
			{ id: 2, text: "Item 2", href: "/" },
			{ id: 3, text: "Item 3", href: "/" },
		],
	},
	{ id: 3, text: "Link 3", href: "/", menu: false },
	{ id: 4, text: "Link 4", href: "/", menu: false },
];

const AppTopBar = () => {
	return (
		<AppBar component="header">
			<Toolbar component="nav">
				<Box component="a" href="/" sx={{ mr: 2, cursor: "pointer" }}>
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
				<Box sx={{ my: 2, mr: 2, display: { xs: "none", md: "flex" }, gap: 1 }}>
					{navLinks.map(navLink => {
						if (navLink.menu) {
							return (
								<Menu
								key={navLink.id}
								open={true}
								>
									{navLink.menuItems.map(menuItem => (
										<MenuItem key={`menu-item-${menuItem.id}`}>{menuItem.text}</MenuItem>
									))}
								</Menu>
							)
						} else {
							return (
								<Button key={navLink.id} color="inherit" sx={{ display: "block" }}>
									{navLink.text}
								</Button>
							)
						}
					})}
				</Box>
				<AppTopBarThemeToggler />
			</Toolbar>
		</AppBar>
	);
};

export default AppTopBar;
