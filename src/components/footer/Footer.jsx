import styles from './Footer.module.css'

export default function Footer() {
	return (
		<footer>
			<div className={styles.container}>
				<div className={styles.conteudo}>
					<div className={styles.a}>
						<img src="../../../icones/footer/logo_ppuse.png" alt="" className={styles.logoPPuse}/>
						<p className={styles.ppuseInc}>
							PPUSE, INC.
						</p>
					</div>
					<div className={styles.icone}>
						<a href="https://www.instagram.com/" target="_blank" rel="" className={styles.iconeInstagram}></a>
					</div>
				</div>
			</div>
		</footer>
	);
}

/*
<div className={styles.container}>
				<div className={styles.conteudo}>
					<div>
						<Typography variant="h6" className={styles.ppuseInc}>
							PPUSE, INC.
						</Typography>
					</div>
					<div className={styles.icone}>
				<div>
					<a href="https://www.instagram.com/" target="_blank" rel="" className={styles.iconeInstagram}></a>
				</div>
			</div>
						</div>
					</div>




<img src="../../../icones/footer/instagram.png" alt="" />
<img src="../../../icones/footer/instagram128.png" alt="" />

*/