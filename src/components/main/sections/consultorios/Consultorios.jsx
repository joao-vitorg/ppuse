import TituloSubtitulo from "../../common/TituloSubtitulo.jsx";
import styles from "./Consultorios.module.css";

export default function Consultorios() {
	return (
		<section>
			<TituloSubtitulo sectionName={"consultorios"} />
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<img src={"../../../../consultorios/primeiro/JOS_3217.JPG"} alt={"a"} className={styles.img} />
					<img src={"../../../../consultorios/primeiro/JOS_3221.JPG"} alt={"a"} className={styles.img} />
					<img src={"../../../../consultorios/primeiro/JOS_3222.JPG"} alt={"a"} className={styles.img} />
					<img src={"../../../../consultorios/primeiro/JOS_3227.JPG"} alt={"a"} className={styles.img} />
				</div>
				<div className={styles.wrapperMain}>
					<img src={"../../../../consultorios/primeiro/JOS_3217.JPG"} alt={"a"} className={styles.imgMain} />
				</div>
			</div>
		</section>
	);
}
