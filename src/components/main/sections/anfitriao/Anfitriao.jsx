import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import TituloSubtitulo from "../../common/TituloSubtitulo.jsx";
import styles from "./Anfitriao.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

const desktopAnfitriao = [
	{
		card1: {
			title: "1º passo",
			description: "Clique no botão abaixo, e faça o seu cadastro no site ppuse",
			image: "anfitriao1.png",
		},
		card2: {
			title: "2º passo",
			description:
				"No painel de controle, acesse a aba dados avançado e preencha seus dados bancarios aonde recebera o dinheiro do aluguel",
			image: "anfitriao2.png",
		},
	},

	{
		card1: {
			title: "2º passo",
			description:
				"No painel de controle, acesse a aba dados avançado e preencha seus dados bancarios aonde recebera o dinheiro do aluguel",
			image: "anfitriao2.png",
		},

		card2: {
			title: "3º passo",
			description: "No painel de controle, acesse a aba de consultorios -> 'cadastrar novo'",
			image: "anfitriao3.png",
		},
	},

	{
		card1: {
			title: "3º passo",
			description: "No painel de controle, acesse a aba de consultorios -> 'cadastrar novo'",
			image: "anfitriao3.png",
		},
		card2: {
			title: "4º passo",
			description: "Preencha os detalhes do seu consulturio e finalize o processo",
			image: "anfitriao4.png",
		},
	},
];

const mobileAnfitriao = [
	{
		title: "1º passo",
		description: "Clique no botão abaixo, e faça o seu cadastro no site ppuse",
		image: "anfitriao1.png",
	},

	{
		title: "2º passo",
		description:
			"No painel de controle, acesse a aba dados avançado e preencha seus dados bancarios aonde recebera o dinheiro do aluguel",
		image: "anfitriao2.png",
	},

	{
		title: "3º passo",
		description: "No painel de controle, acesse a aba de consultorios -> 'cadastrar novo'",
		image: "anfitriao3.png",
	},

	{
		title: "4º passo",
		description: "Preencha os detalhes do seu consulturio e finalize o processo",
		image: "anfitriao4.png",
	},
];

const anfitriao = window.innerWidth <= 1000 ? mobileAnfitriao : desktopAnfitriao;

function Item() {
	const renderCards = () => {
		console.log(anfitriao.length);

		if (anfitriao.length == 3) {
			return (
				<>
					<Swiper
						pagination={false}
						navigation={true}
						loop={true}
						modules={[Pagination, Navigation]}
						className="mySwiper"
						breakpoints={{
							// when window width is >= 320px
							1024: {
								slidesPerView: 1,
							},
							1336: {
								slidesPerView: 1,
							},
						}}
					>
						{anfitriao.map((item, index) => (
							<SwiperSlide key={index} item={item}>
								<div className={styles.card} id={`card${index + 1}`}>
									<div className={styles.cardIcone}>
										<img className={styles.iconeImg} src={`../../../icones/anfitriao/${item.card1.image}`} alt="" />
									</div>
									<div className={styles.cardDivTitulo}>
										<h1 className={styles.cardTitulo}>{item.card1.title}</h1>
									</div>
									<div className={styles.cardDivParagrafo}>
										<p className={styles.cardParagrafo}>{item.card1.description}</p>
									</div>
								</div>
								<div className={styles.card} id={`card${index + 1}`}>
									<div className={styles.cardIcone}>
										<img className={styles.iconeImg} src={`../../../icones/anfitriao/${item.card2.image}`} alt="" />
									</div>
									<div className={styles.cardDivTitulo}>
										<h1 className={styles.cardTitulo}>{item.card2.title}</h1>
									</div>
									<div className={styles.cardDivParagrafo}>
										<p className={styles.cardParagrafo}>{item.card2.description}</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</>
			);
		} else {
			return (
				<>
					<Swiper
						pagination={false}
						navigation={true}
						loop={true}
						modules={[Pagination, Navigation]}
						className="mySwiper"
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
						}}
					>
						{anfitriao.map((item, index) => (
							<SwiperSlide key={index} item={item}>
								<div className={styles.card} id={`card${index + 1}`}>
									<div className={styles.cardIcone}>
										<img className={styles.iconeImg} src={`../../../icones/anfitriao/${item.image}`} alt="" />
									</div>
									<div className={styles.cardDivTitulo}>
										<h1 className={styles.cardTitulo}>{item.title}</h1>
									</div>
									<div className={styles.cardDivParagrafo}>
										<p className={styles.cardParagrafo}>{item.description}</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</>
			);
		}
	};

	return <>{renderCards()}</>;
}

export default function Anfitriao() {
	return (
		<section className={"anfitriao"}>
			<div className={styles.container}>
				<TituloSubtitulo sectionName={"anfitriao"} />
				<div className={styles.conteudo}>
					<>
						<Item />
					</>
				</div>
				<div className={styles.divButton}>
					<button type="button" className={styles.cadastreButton}>
						<a href="https://ppuse.com.br/signup_login" target="_blank" rel="" className={styles.cadastre}>
							Cadastre seu consultório
						</a>
					</button>
				</div>
			</div>
		</section>
	);
}
