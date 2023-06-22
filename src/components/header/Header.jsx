import { AppBar, Typography, Toolbar } from "@mui/material";

export default function Header() {
	return (
		<header>
			<AppBar position={"fixed"} component="nav">
				<Toolbar>
					<Typography variant="h6" color="inherit" component="div">
						Photos
					</Typography>
				</Toolbar>
			</AppBar>
		</header>
	);
}
