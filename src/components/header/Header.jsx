import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import React from "react";
import styles from "./style.module.css";

export default function Header() {
	return (
		<header>
			<AppBar position={"fixed"} component="nav" sx={{ backgroundColor: "black" }}>
				<Toolbar>
					<img src="/logo_chamada.png" alt="Logomarca do site PPUSE" height={"50px"} style={{ paddingRight: "10px" }} />
					<Typography variant="h6" color="inherit" component="div">
						PPuse
					</Typography>
					<div className={styles.links}>
						<Link href="#chamada" className={styles.link}>
							Conheça
						</Link>
						<Link href="#conheca" className={styles.link}>
							Alugue
						</Link>
						<Link href="#consultorios" className={styles.link}>
							Consultorios
						</Link>
						<Link href="#anfitriao" className={styles.link}>
							Anfitrião
						</Link>
						<Link href="#depoimentos" className={styles.link}>
							Depoimentos
						</Link>
						<Link href="#faq" className={styles.link}>
							FAQ
						</Link>
					</div>
				</Toolbar>
			</AppBar>
		</header>
	);
}
