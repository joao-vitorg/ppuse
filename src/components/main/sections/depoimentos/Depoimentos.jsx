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
				"Sou cirurgião dentista e presto serviço em clínicas em Uberlândia, e o sistema pay per use é perfeito para otimizar a minha rotina profissional. Nos dias que não tenho agenda nos locais onde presto serviço, posso realizar atendimentos particulares, utilizando o espaço da Lean Klinik, de acordo com a minha demanda, pagando por hora de uso. É um benefício 360 graus, pois além de não ter que realizar todo o investimento alto para aquisição de tudo que envolve o consultório: estrutura física, material de consumo, contas fixas como energia/água/impostos e funcionários; ainda gozo de todos os benefícios subjetivos que agregam valor ao meu atendimento, como: associação do meu nome com a Lean Klinik e a credibilidade que ela possui; todo o charme da experiência que a klinica oferece com sua decoração agradável, experiência olfativa; ambiente sempre organizado e limpo; funcionários altamente qualificados e treinados. E um detalhe muito importante: é possível oferecer uma experiência de altíssima qualidade ao meu paciente, e ter uma margem alta de lucro por atendimento, pois o pagamento à clínica é um valor fixo, por hora de uso.",
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
									<h2 className={styles.nome}>{depoimento.nome}</h2>
									<p className={styles.textoDepoimento}>{depoimento.depoimento}</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
