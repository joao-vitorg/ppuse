import TituloSubtitulo from "../../common/TituloSubtitulo.jsx";
import styles from "./Consultorios.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Container } from "@mui/material";

export default function Consultorios() {
	return (
		<section className={styles.section}>
			<Container>
				<TituloSubtitulo sectionName={"consultorios"} />
				<Swiper
					pagination={{
						type: "fraction",
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
				>
					<SwiperSlide>
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
					</SwiperSlide>
					<SwiperSlide>
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
					</SwiperSlide>
				</Swiper>
			</Container>
		</section>
	);
}
