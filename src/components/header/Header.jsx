// import { AppBar, Link, Toolbar, Typography } from "@mui/material";
// import React from "react";
//
// export default function Header() {
// 	return (
// 		<header>
// 			<AppBar position={"fixed"} component="nav" sx={{ backgroundColor: "black" }}>
// 				<Toolbar>
// 					<Link href="#" className={styles.link}>
// 						<img
// 							src="/logo_chamada.png"
// 							alt="Logomarca do site PPUSE"
// 							height={"50px"}
// 							style={{ paddingRight: "10px" }}
// 						/>
// 					</Link>
// 					<Typography variant="h6" color="inherit" component="div">
// 						PPuse
// 					</Typography>
// 					<div className={styles.links}>
// 						<Link href="#conheca" className={styles.link}>
// 							Conheça
// 						</Link>
// 						<Link href="#consultorios" className={styles.link}>
// 							Consultorios
// 						</Link>
// 						<Link href="#anfitriao" className={styles.link}>
// 							Anfitrião
// 						</Link>
// 						<Link href="#depoimentos" className={styles.link}>
// 							Depoimentos
// 						</Link>
// 						<Link href="#faq" className={styles.link}>
// 							FAQ
// 						</Link>
// 					</div>
// 				</Toolbar>
// 			</AppBar>
// 		</header>
// 	);
// }
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Conheça", "Consultorios", "Anfitrião", "Depoimentos", "FAQ"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position={"fixed"} component="nav" sx={{ backgroundColor: "black" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					{/*<LogoDevIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />*/}
					<img src="/logo_chamada.png" alt="Logomarca do site PPUSE" height={"50px"} style={{ paddingRight: "10px" }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						PPUSE
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					{/*<LogoDevIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />*/}
					{/*<img src="/logo_chamada.png" alt="Logomarca do site PPUSE" height={"50px"} style={{ paddingRight: "10px" }} />*/}
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						PPUSE
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => (
							<Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
								{page}
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default ResponsiveAppBar;
