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
        <section className={"passos"} id="passos">
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