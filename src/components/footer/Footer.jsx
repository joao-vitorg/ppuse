import styles from './Footer.module.css'

export default function Footer() {
	return (
		<footer>
			<div className={styles.container}>
				<div className={styles.conteudo}>
					<div className={styles.a}>
						<img src='../../../icones/footer/logo_ppuse.png' alt="" className={styles.logoPPuse}/>
						<p className={styles.ppuseInc}>
							PPUSE, INC.
						</p>
					</div>
					<div className={styles.icone}>
						<a href="https://www.instagram.com/p_p_use/" target="_blank" rel="" className={styles.iconeInstagram}></a>
					</div>
				</div>
			</div>
		</footer>
	);
}

