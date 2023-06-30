import TituloSubtitulo from "../../common/TituloSubtitulo.jsx";
import styles from "./Consultorios.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Container } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.css";
import { useState } from "react";

export default function Consultorios() {
	const [curImg1, setCurImg1] = useState("../../../../consultorios/primeiro/1.jpg");
	const [curImg2, setCurImg2] = useState("../../../../consultorios/segundo/1.jpg");

	return (
		<section className={styles.section} id={"consultorios"}>
			<Container className={"consultorios"}>
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
								<img
									src={"../../../../consultorios/primeiro/1.jpg"}
									alt={"a"}
									className={styles.img}
									onClick={() => setCurImg1("../../../../consultorios/primeiro/1.jpg")}
									style={{ cursor: "pointer" }}
								/>
								<img
									src={"../../../../consultorios/primeiro/2.jpg"}
									alt={"a"}
									className={styles.img}
									onClick={() => setCurImg1("../../../../consultorios/primeiro/2.jpg")}
									style={{ cursor: "pointer" }}
								/>
								<img
									src={"../../../../consultorios/primeiro/3.jpg"}
									alt={"a"}
									className={styles.img}
									onClick={() => setCurImg1("../../../../consultorios/primeiro/3.jpg")}
									style={{ cursor: "pointer" }}
								/>
								<img
									src={"../../../../consultorios/primeiro/4.jpg"}
									alt={"a"}
									className={styles.img}
									onClick={() => setCurImg1("../../../../consultorios/primeiro/4.jpg")}
									style={{ cursor: "pointer" }}
								/>
								<img
									src={"../../../../consultorios/primeiro/5.jpg"}
									alt={"a"}
									className={styles.img}
									onClick={() => setCurImg1("../../../../consultorios/primeiro/5.jpg")}
									style={{ cursor: "pointer" }}
								/>
								<img
									src={"../../../../consultorios/primeiro/6.jpg"}
									alt={"a"}
									className={styles.img}
									onClick={() => setCurImg1("../../../../consultorios/primeiro/6.jpg")}
									style={{ cursor: "pointer" }}
								/>
							</div>
							<div className={styles.wrapperMain}>
								<img src={curImg1} alt={"a"} className={styles.imgMain} />
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={styles.container}>
							<div className={styles.wrapper}>
								<img
									src={"../../../../consultorios/segundo/1.jpg"}
									alt={"a"}
									className={styles.img}
									onClick={() => setCurImg2("../../../../consultorios/segundo/1.jpg")}
									style={{ cursor: "pointer" }}
								/>
								<img
									src={"../../../../consultorios/segundo/2.jpg"}
									alt={"a"}
									className={styles.img}
									onClick={() => setCurImg2("../../../../consultorios/segundo/2.jpg")}
									style={{ cursor: "pointer" }}
								/>
								<img
									src={"../../../../consultorios/segundo/3.jpg"}
									alt={"a"}
									className={styles.img}
									onClick={() => setCurImg2("../../../../consultorios/segundo/3.jpg")}
									style={{ cursor: "pointer" }}
								/>
							</div>
							<div className={styles.wrapperMain}>
								<img src={curImg2} alt={"a"} className={styles.imgMain} />
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</Container>
		</section>
	);
}
