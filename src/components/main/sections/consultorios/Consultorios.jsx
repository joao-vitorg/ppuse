import TituloSubtitulo from "../../common/TituloSubtitulo.jsx";
import styles from "./Consultorios.module.css";
import Carousel from "react-material-ui-carousel";

export default function Consultorios() {
	return (
		<section>
			<TituloSubtitulo sectionName={"consultorios"} />
			<Carousel indicators={true}>
				<div className={styles.container}>
					<div className={styles.wrapper}>
						<img src={"../../../../consutorios/primeiro/JOS_3217.JPG"} alt={"a"} className={styles.img} />
						<img src={"../../../../consutorios/primeiro/JOS_3221.JPG"} alt={"a"} className={styles.img} />
						<img src={"../../../../consutorios/primeiro/JOS_3222.JPG"} alt={"a"} className={styles.img} />
						<img src={"../../../../consutorios/primeiro/JOS_3227.JPG"} alt={"a"} className={styles.img} />
					</div>
					<div className={styles.wrapperMain}>
						<img src={"../../../../consutorios/primeiro/JOS_3217.JPG"} alt={"a"} className={styles.imgMain} />
					</div>
				</div>
			</Carousel>
		</section>
	);
}
