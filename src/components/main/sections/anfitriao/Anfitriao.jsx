import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import TituloSubtitulo from "../../common/TituloSubtitulo.jsx";
import anfitriao from "../../../../js/anfitriao.js";
import styles from "./Anfitriao.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";



export default function Anfitriao() {
    return (
        <section className={"anfitriao"}>
            <div className={styles.container}>
                <TituloSubtitulo sectionName={"anfitriao"} />
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
                        {anfitriao.map((item, index) => (
                            <SwiperSlide key={index} item={item} >
                                <div className={styles.card} id={`card${index + 1}`}>
                                    <div className={styles.cardIcone}>
                                        <img className={styles.iconeImg} src={`../../../icones/anfitriao/${item.image}`} alt="" />
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
                <div className={styles.divButtonCadastre}>
                    <button type="button" className={styles.cadastreButton}><a href="https://ppuse.com.br/login" target="_blank" rel="" className={styles.cadastre}>Cadastre <span className={styles.cadastreSpan}>seu</span> consultório</a></button>
                </div>
            </div>
        </section>
    );
}
