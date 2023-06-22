import TituloSubtitulo from "../../common/TituloSubtitulo.jsx";
import styles from "./Consultorios.module.css";

export default function Consultorios() {
	return (
		<section>
			<TituloSubtitulo sectionName={"consultorios"} />
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<img src={"../../../../consultorios/primeiro/1.jpg"} alt={"a"} className={styles.img} />
					<img src={"../../../../consultorios/primeiro/2.jpg"} alt={"a"} className={styles.img} />
					<img src={"../../../../consultorios/primeiro/3.jpg"} alt={"a"} className={styles.img} />
					<img src={"../../../../consultorios/primeiro/4.jpg"} alt={"a"} className={styles.img} />
					<img src={"../../../../consultorios/primeiro/5.jpg"} alt={"a"} className={styles.img} />
					<img src={"../../../../consultorios/primeiro/6.jpg"} alt={"a"} className={styles.img} />
				</div>
				<div className={styles.wrapperMain}>
					<img src={"../../../../consultorios/primeiro/1.jpg"} alt={"a"} className={styles.imgMain} />
				</div>
			</div>
		</section>
	);
}
