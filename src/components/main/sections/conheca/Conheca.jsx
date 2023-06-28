import React from "react";
import styles from "./conheca.module.css";

export default function Conheca() {
	return (
		<section>
			<div className={styles["video-container"]}>
				<div className={styles["content-container"]}>
					<p className={styles["titulo"]}>Conheça</p>
					<p className={styles["titulo2"]}>PPUSE</p>
					<p className={styles["subtitulo"]}>Alugar um consultório odontológico pode ser mais viável do que parece.</p>
				</div>

				<video
					className={styles["video"]}
					src="https://github.com/joao-vitorg/ppuse/raw/branch-aparicio/src/components/media/ppuse_institucional.mp4"
					controls
				/>
			</div>
		</section>
	);
}
