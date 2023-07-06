import React from "react";
import styles from "./chamada.module.css";

export default function Chamada() {
	return (
		<section className={styles.container} id={"chamada"}>
			<div className={styles.header}>
				<img src="/logo_chamada.png" alt="Logomarca do site PPUSE" />
				<span>PPUSE</span>
				<div className={styles.line}></div>
			</div>

			<div className={styles.chamada}>
				<h1>Atenda onde, quando e como quiser</h1>
				<h2>
					É um dentista formado e ainda não tem seu próprio consultório? O que você acha de alugar um até ter o seu?
				</h2>
				{/*<button className={styles.botaoChamada}>*/}
				{/*<a href="https://ppuse.com.br/" className={styles.button} target="_blank">*/}
				{/*	Quero alugar*/}
				{/*</a>*/}
				<div className={styles.divButtonCadastre}>
					<button type="button" className={styles.cadastreButton}>
						<a href="https://ppuse.com.br/login" target="_blank" rel="" className={styles.cadastre}>
							Quero alugar
						</a>
					</button>
				</div>
				{/*</button>*/}
			</div>
		</section>
	);
}
