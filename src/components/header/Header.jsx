import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
	return (
		<header>
			<AppBar position={"fixed"} component="nav">
				<Toolbar>
					<Typography variant="h6" color="inherit" component="div">
						PPuse
					</Typography>
				</Toolbar>
			</AppBar>
		</header>
	);
}
