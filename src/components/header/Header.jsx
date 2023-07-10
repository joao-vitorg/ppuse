import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

const pages = [
	["Conheça", "conheca"],
	["Alugue", "passos"],
	["Consultorios", "consultorios"],
	["Anfitrião", "anfitriao"],
	["Depoimentos", "depoimentos"],
	["FAQ", "faq"],
	["Contato", "contato"],
];

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
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
						href="#"
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
								<Typography
									key={page}
									variant="button"
									noWrap
									component="a"
									href={`#` + page[1]}
									sx={{
										m: "10px",
										fontWeight: 700,
										color: "inherit",
										textDecoration: "none",
										display: "block",
									}}
								>
									{page[0]}
								</Typography>
							))}
						</Menu>
					</Box>

					<Typography
						variant="h5"
						noWrap
						component="a"
						href="#"
						sx={{
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
							<Typography
								key={page}
								variant="button"
								noWrap
								component="a"
								href={`#` + page[1]}
								sx={{
									mr: 2,
									fontWeight: 700,
									color: "inherit",
									textDecoration: "none",
								}}
							>
								{page[0]}
							</Typography>
						))}
					</Box>
					<Box sx={{ display: { xs: "block", md: "none" } }}>
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
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default ResponsiveAppBar;
