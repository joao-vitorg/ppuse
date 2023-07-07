import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import TituloSubtitulo from "../../common/TituloSubtitulo.jsx";
import styles from "./Passos.module.css";
import passos from '../../../../js/passos.js'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";



export default function Passos() {
    return (
        <section className={"passos"}>
            <div className={styles.container}>
                <TituloSubtitulo sectionName={"passos"} />
                <div className={styles.conteudo}>
                    <Swiper
                        pagination={false}
                        navigation={true}
                        loop={true}
                        effect={'fade'}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 1,
                            },

                            730: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 2,

                            },
                            1336: {
                                slidesPerView: 2,
                            },
                        }}

                    >
                        {passos.map((item, index) => (
                            <SwiperSlide key={index} item={item} >
                                <div className={styles.card} id={`card${index + 1}`}>
                                    <div className={styles.cardIcone}>
                                        <img className={styles.iconeImg} src={`../../../icones/passos/${item.image}`} alt="" />
                                    </div>
                                    <div className={styles.cardDivTitulo}>
                                        <h1 className={styles.cardTitulo}>{item.title}</h1>
                                    </div>
                                    <div className={styles.cardDivParagrafo}>
                                        <p className={styles.cardParagrafo}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className={styles.divButtonAlugar}>
                    <button type="button"  className={styles.alugarButton}><a href="https://ppuse.com.br/login" target="_blank" rel="" className={styles.alugar}>Quero alugar</a></button>
                </div>
            </div>
        </section>
    );
}



/*


<img className={styles.iconeImg} src={`../../../icones/passos/${item.image}`} alt="" />

<SwiperSlide><div className={styles.card}>
                                <div className={styles.cardIcone}>
                                    <img className={styles.iconeImg} src="../../../icones/passos/passo1.png" alt="" />
                                </div>
                                <div className={styles.cardDivTitulo}>
                                    <h1 className={styles.cardTitulo}>1º passo</h1>
                                </div>
                                <div className={styles.cardDivParagrafo}>
                                    <p className={styles.cardParagrafo}>
                                        Clique no botão abaixo e faça o seu cadastro no site ppuse
                                    </p>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide><div className={styles.card}>
                                <div className={styles.cardIcone}>
                                    <img className={styles.iconeImg} src="../../../icones/passos/passo2.png" alt="" />
                                </div>
                                <div className={styles.cardDivTitulo}>
                                    <h1 className={styles.cardTitulo}>2º passo</h1>
                                </div>
                                <div className={styles.cardDivParagrafo}>
                                    <p className={styles.cardParagrafo}>
                                        Na pagina inicial do ppuse, navegue e descubra o consultório ideal para você
                                    </p>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide><div className={styles.card}>
                                <div className={styles.cardIcone}>
                                    <img className={styles.iconeImg} src="../../../icones/passos/passo3.png" alt="" />
                                </div>
                                <div className={styles.cardDivTitulo}>
                                    <h1 className={styles.cardTitulo}>3º passo</h1>
                                </div>
                                <div className={styles.cardDivParagrafo}>
                                    <p className={styles.cardParagrafo}>
                                        Selecione a data e horário se necessário e clique em reservar
                                    </p>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide><div className={styles.card}>
                                <div className={styles.cardIcone}>
                                    <img className={styles.iconeImg} src="../../../icones/passos/passo4.png" alt="" />
                                </div>
                                <div className={styles.cardDivTitulo}>
                                    <h1 className={styles.cardTitulo}>4º passo</h1>
                                </div>
                                <div className={styles.cardDivParagrafo}>
                                    <p className={styles.cardParagrafo}>
                                        Preencha os detalhes do seu consulturio e finalize o processo
                                    </p>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide><div className={styles.card}>
                                <div className={styles.cardIcone}>
                                    <img className={styles.iconeImg} src="../../../icones/passos/passo3.png" alt="" />
                                </div>
                                <div className={styles.cardDivTitulo}>
                                    <h1 className={styles.cardTitulo}>5º passo</h1>
                                </div>
                                <div className={styles.cardDivParagrafo}>
                                    <p className={styles.cardParagrafo}>
                                        Espere que o seu anfritrião te responda confirmando seu agendamento e passando os detalhes para acesso do consultorio
                                    </p>
                                </div>
                            </div></SwiperSlide>

*/


/*
<div className={styles.card} id={`card${index + 1}`}>
                                        <div className={styles.cardIcone}>
                                            <img className={styles.iconeImg} src={`../../../icones/passos/${item.image}`} alt="" />
                                        </div>
                                        <div className={styles.cardDivTitulo}>
                                            <h1 className={styles.cardTitulo}>{item.title}</h1>
                                        </div>
                                        <div className={styles.cardDivParagrafo}>
                                            <p className={styles.cardParagrafo}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>


 <div className={styles.card} id={`card${index + 1}`}>
                                        <div className={styles.cardIcone}>
                                            <img className={styles.iconeImg} src={`../../../icones/passos/${item.card1.image}`} alt="" />
                                        </div>
                                        <div className={styles.cardDivTitulo}>
                                            <h1 className={styles.cardTitulo}>{item.card1.title}</h1>
                                        </div>
                                        <div className={styles.cardDivParagrafo}>
                                            <p className={styles.cardParagrafo}>
                                                {item.card1.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.card} id={`card${index + 1}`}>
                                        <div className={styles.cardIcone}>
                                            <img className={styles.iconeImg} src={`../../../icones/passos/${item.card2.image}`} alt="" />
                                        </div>
                                        <div className={styles.cardDivTitulo}>
                                            <h1 className={styles.cardTitulo}>{item.card2.title}</h1>
                                        </div>
                                        <div className={styles.cardDivParagrafo}>
                                            <p className={styles.cardParagrafo}>
                                                {item.card2.description}
                                            </p>
                                        </div>
                                    </div>


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


*/



/*


export default function Carrossel() {
    return (
        <section>
            <div className={styles.container}>
                <TituloSubtitulo sectionName={"passos"} />
                <div className={styles.conteudo}>
                    <>
                        <Swiper
                            pagination={false}
                            navigation={true}
                            loop={true}
                            loopAdditionalSlides={2}
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
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 2,

                                },
                                1336: {
                                    slidesPerView: 1,
                                },
                            }}

                        >
                            {passos.map((item, index) => (
                                <SwiperSlide key={index} item={item}>
                                  <div className={styles.card} id={`card${index + 1}`}>
                                        <div className={styles.cardIcone}>
                                            <img className={styles.iconeImg} src={`../../../icones/passos/${item.image}`} alt="" />
                                        </div>
                                        <div className={styles.cardDivTitulo}>
                                            <h1 className={styles.cardTitulo}>{item.title}</h1>
                                        </div>
                                        <div className={styles.cardDivParagrafo}>
                                            <p className={styles.cardParagrafo}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </>

                </div>
                <div className={styles.divButton}>
                    <button type="button"><a href="https://ppuse.com.br/login" target="_blank" rel="" className={styles.alugar}>Quero alugar</a></button>
                </div>
            </div>
        </section>
    );
}


*/