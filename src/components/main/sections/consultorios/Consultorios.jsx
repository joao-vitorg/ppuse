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
						<Consultorio
							imgList={["primeiro/1", "primeiro/2", "primeiro/3", "primeiro/4"]}
							itemId={"56"}
							title={"Center Odonto"}
							description={
								"Consultório montado ideal para atendimentos de clínica geral. Possui ultrassom, autoclave, fotopolimerizador, ar-condicionado e Internet para aluguel segundas e sextas, com possibilidade de negociação para fechamento nesses dias por mês."
							}
							location={"Avenida Cipriano Del Favero, Centro, Uberlândia"}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Consultorio
							imgList={["terceiro/1", "terceiro/2", "terceiro/3", "terceiro/4", "terceiro/5"]}
							itemId={"55"}
							title={"Consultório Vanessa Pimenta"}
							description={
								"Espaço moderno em construção recente. Equipamentos novos, com excelente localização e comodidade para atendimento."
							}
							location={"Avenida Cesário Alvim, Centro, Uberlândia"}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Consultorio
							imgList={["quarto/1", "quarto/2", "quarto/3"]}
							itemId={"59"}
							title={"Lumière Odontologia Integrada II"}
							description={
								"Consultório completo no segundo andar. Faz parte de clínica agradável, bem decorada em bairro nobre de Uberlândia. Todo o espaço faz parte de galeria que ainda conta com cafeteria, restaurantes, salão de beleza e muito mais."
							}
							location={"Rua da Carioca, Morada da Colina, Uberlândia"}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Consultorio
							imgList={["segundo/1", "segundo/2", "segundo/3", "segundo/4"]}
							itemId={"57"}
							title={"Consultório hospedado por Nayara"}
							description={
								"Consultório conjugado à escritório perto do centro de Uberlândia. Faz parte de clínica linda e aconchegante com fácil acesso a partir dos principais pontos da cidade. A decoração é impecável e o aroma sempre acolhedor. "
							}
							location={"Rua Itumbiara, Nossa Senhora Aparecida, Uberlândia"}
						/>
					</SwiperSlide>
				</Swiper>
			</Container>
		</section>
	);
}
