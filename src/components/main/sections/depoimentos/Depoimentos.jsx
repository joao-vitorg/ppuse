import TituloSubtitulo from "../../common/TituloSubtitulo.jsx";
import styles from "./depoimento.module.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./stylesswipper.css";

export default function Depoimentos() {
	const [depoimentos, setDep] = useState([
		{
			img: "drPatricio.png",
			nome: "Dr. Patrício Barros",
			depoimento:
				"Quero deixar o meu profundo agradecimento, por me proporcionarem um espaço moderno, bonito e seguro para realizar os meus atendimentos, fora de onde a minha clínica se localiza. A opção de alocação por minutos e a flexibilidade de agenda me permitem atender com conforto e liberdade, sem falar na economia por não precisar arcar com os gastos de um outro consultório.",
		},
	]);

	useEffect(() => {
		fetch("https://joaopedrocardoso.github.io/faqs-ppuse/depoimentos.json")
			.then((file) => file.json())
			.then((conteudo) => setDep(conteudo.depoimentos));
	}, []);

	return (
		<section className={styles.depoimentosSection} id={"depoimentos"}>
			<div className={"depoimentos"}>
				<TituloSubtitulo sectionName={"depoimentos"} cssClass={styles.tituloSubtituloSeparadorDepoimentos} />
				<div className={styles.depoimentoSwipperContainer}>
					<Swiper
						pagination={false}
						navigation={true}
						loop={false}
						modules={[Pagination, Navigation]}
						className="swipperDepoimento"
						breakpoints={{
							// when window width is >= 320px
							320: {
								slidesPerView: 1,
							},
							// when window width is >= 480px
							480: {
								slidesPerView: 1,
							},
							// when window width is >= 640px
							640: {
								slidesPerView: 1,
							},
							1024: {
								slidesPerView: 1,
							},
							1336: {
								slidesPerView: 1,
							},
						}}
					>
						{depoimentos.map((depoimento, index) => (
							<SwiperSlide key={index} item={depoimento}>
								<div className={styles.cardDepoimento}>
									<div className={styles.imageContainer}>
										<div className={styles.depoimentoImage}>
											<img
												src={"/src/components/main/sections/depoimentos/img/" + depoimento.img}
												className={styles.depoimentoImg}
											/>
										</div>
									</div>

									<div className={styles.cardContainer}>
										<h1 className={styles.nome}>{depoimento.nome}</h1>
										<p className={styles.textoDepoimento}>{depoimento.depoimento}</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
}
