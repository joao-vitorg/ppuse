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
import Consultorio from "./Consultorio.jsx";

export default function Consultorios() {
	return (
		<section className={styles.section} id={"consultorios"}>
			<Container sx={{ padding: "40px 0px" }} className={"consultorios"}>
				<TituloSubtitulo sectionName={"consultorios"} />
				<Swiper
					autoHeight={true}
					pagination={{
						type: "fraction",
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					style={{ maxWidth: "800px" }}
				>
					<SwiperSlide>
						<Consultorio imgList={["segundo/1", "segundo/2", "segundo/3", "segundo/4"]} itemId={"57"} />
					</SwiperSlide>
					<SwiperSlide>
						<Consultorio
							imgList={["terceiro/1", "terceiro/2", "terceiro/3", "terceiro/4", "terceiro/5"]}
							itemId={"55"}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Consultorio imgList={["quarto/1", "quarto/2", "quarto/3"]} itemId={"54"} />
					</SwiperSlide>
				</Swiper>
			</Container>
		</section>
	);
}
