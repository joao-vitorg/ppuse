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
	const [curImg3, setCurImg3] = useState("../../../../consultorios/terceiro/1.jpg");
	const [curImg4, setCurImg4] = useState("../../../../consultorios/quarto/1.jpg");

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
					{/*<SwiperSlide>*/}
					{/*	<div className={styles.container}>*/}
					{/*		<div className={styles.wrapper}>*/}
					{/*			<img*/}
					{/*				src={"../../../../consultorios/primeiro/1.jpg"}*/}
					{/*				alt={"a"}*/}
					{/*				className={styles.img}*/}
					{/*				onClick={() => setCurImg1("../../../../consultorios/primeiro/1.jpg")}*/}
					{/*				style={{ cursor: "pointer" }}*/}
					{/*			/>*/}
					{/*			<img*/}
					{/*				src={"../../../../consultorios/primeiro/2.jpg"}*/}
					{/*				alt={"a"}*/}
					{/*				className={styles.img}*/}
					{/*				onClick={() => setCurImg1("../../../../consultorios/primeiro/2.jpg")}*/}
					{/*				style={{ cursor: "pointer" }}*/}
					{/*			/>*/}
					{/*			<img*/}
					{/*				src={"../../../../consultorios/primeiro/3.jpg"}*/}
					{/*				alt={"a"}*/}
					{/*				className={styles.img}*/}
					{/*				onClick={() => setCurImg1("../../../../consultorios/primeiro/3.jpg")}*/}
					{/*				style={{ cursor: "pointer" }}*/}
					{/*			/>*/}
					{/*			<img*/}
					{/*				src={"../../../../consultorios/primeiro/4.jpg"}*/}
					{/*				alt={"a"}*/}
					{/*				className={styles.img}*/}
					{/*				onClick={() => setCurImg1("../../../../consultorios/primeiro/4.jpg")}*/}
					{/*				style={{ cursor: "pointer" }}*/}
					{/*			/>*/}
					{/*			<img*/}
					{/*				src={"../../../../consultorios/primeiro/5.jpg"}*/}
					{/*				alt={"a"}*/}
					{/*				className={styles.img}*/}
					{/*				onClick={() => setCurImg1("../../../../consultorios/primeiro/5.jpg")}*/}
					{/*				style={{ cursor: "pointer" }}*/}
					{/*			/>*/}
					{/*			<img*/}
					{/*				src={"../../../../consultorios/primeiro/6.jpg"}*/}
					{/*				alt={"a"}*/}
					{/*				className={styles.img}*/}
					{/*				onClick={() => setCurImg1("../../../../consultorios/primeiro/6.jpg")}*/}
					{/*				style={{ cursor: "pointer" }}*/}
					{/*			/>*/}
					{/*		</div>*/}
					{/*		<div className={styles.wrapperMain}>*/}
					{/*			<img src={curImg1} alt={"a"} className={styles.imgMain} />*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*</SwiperSlide>*/}
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
								<img
									src={"../../../../consultorios/segundo/4.jpg"}
									alt={"a"}
									className={styles.img}
									onClick={() => setCurImg2("../../../../consultorios/segundo/4.jpg")}
									style={{ cursor: "pointer" }}
								/>
							</div>
							<div className={styles.wrapperMain}>
								<a href={"https://ppuse.com.br/items/57"} target={"__blanck"}>
									<img src={curImg2} alt={"a"} className={styles.imgMain} />
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={styles.container}>
							<div className={styles.wrapper}>
								<img
									src={"../../../../consultorios/terceiro/1.jpg"}
									alt={"a"}
									className={styles.img}
									onClick={() => setCurImg3("../../../../consultorios/terceiro/1.jpg")}
									style={{ cursor: "pointer" }}
								/>
								<img
									src={"../../../../consultorios/terceiro/2.jpg"}
									alt={"a"}
									className={styles.img}
									onClick={() => setCurImg3("../../../../consultorios/terceiro/2.jpg")}
									style={{ cursor: "pointer" }}
								/>
								<img
									src={"../../../../consultorios/terceiro/3.jpg"}
									alt={"a"}
									className={styles.img}
									onClick={() => setCurImg3("../../../../consultorios/terceiro/3.jpg")}
									style={{ cursor: "pointer" }}
								/>
								<img
									src={"../../../../consultorios/terceiro/4.jpg"}
									alt={"a"}
									className={styles.img}
									onClick={() => setCurImg3("../../../../consultorios/terceiro/4.jpg")}
									style={{ cursor: "pointer" }}
								/>
								<img
									src={"../../../../consultorios/terceiro/5.jpg"}
									alt={"a"}
									className={styles.img}
									onClick={() => setCurImg3("../../../../consultorios/terceiro/5.jpg")}
									style={{ cursor: "pointer" }}
								/>
							</div>
							<div className={styles.wrapperMain}>
								<a href={"https://ppuse.com.br/items/55"} target={"__blanck"}>
									<img src={curImg3} alt={"a"} className={styles.imgMain} />
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={styles.container}>
							<div className={styles.wrapper}>
								<img
									src={"../../../../consultorios/quarto/1.jpg"}
									alt={"a"}
									className={styles.img}
									onClick={() => setCurImg4("../../../../consultorios/quarto/1.jpg")}
									style={{ cursor: "pointer" }}
								/>
								<img
									src={"../../../../consultorios/quarto/2.jpg"}
									alt={"a"}
									className={styles.img}
									onClick={() => setCurImg4("../../../../consultorios/quarto/2.jpg")}
									style={{ cursor: "pointer" }}
								/>
								<img
									src={"../../../../consultorios/quarto/3.jpg"}
									alt={"a"}
									className={styles.img}
									onClick={() => setCurImg4("../../../../consultorios/quarto/3.jpg")}
									style={{ cursor: "pointer" }}
								/>
							</div>
							<div className={styles.wrapperMain}>
								<a href={"https://ppuse.com.br/items/59"} target={"__blanck"}>
									<img src={curImg4} alt={"a"} className={styles.imgMain} />
								</a>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</Container>
		</section>
	);
}
