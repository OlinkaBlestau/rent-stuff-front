import React from 'react';
import styles from '../../css/Home/Home.module.css'
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import fon from "../../img/background.jpg";
import "react-alice-carousel/lib/alice-carousel.css";
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import AliceCarousel from 'react-alice-carousel'
import homeToll from "../../img/homeTool.jpg";
import tool from "../../img/tool.jpg";
import play from "../../img/play.jpg";
import sport from "../../img/sport.jpg";
import velo from "../../img/velo.jpg";
import photo from "../../img/photo.jpg";
import music from "../../img/music.jpg";
import electronic from "../../img/electronic.jpg";

import first from "../../img/icons8-рекламное-окно-64.png";
import second from "../../img/icons8-поиск-недвижимости-80.png";
import third from "../../img/icons8-accept-64.png";
import fourth from "../../img/icons8-рукопожатие-50.png";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import {FreeMode, Pagination} from "swiper";

// Import Swiper styles


const Home = () => {
    const params = useParams();


    useEffect(() => {

    }, [params.id])


    return (
        <div className={styles.wrapper}>
            <div>
                <div className={styles.image}>
                    <img id="image" src={fon} className={styles.background} alt="logo"/>
                </div>
                <h1 className={styles.h1}>
                    RentStuff
                </h1>
                <h3 className={styles.h2}>
                    сервіс оренди
                </h3>
                <div className={styles.add}>
                    <button className={styles.button}>
                        <a href={"/login"}>Створити оголошення</a>
                    </button>
                </div>
            </div>
            <div>
                <div className={styles.titleStuff}>
                    <h1>Що можна взяти/здати в оренду</h1>
                </div>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className={styles.mySwiper}>
                    <SwiperSlide className={styles.item}>
                        <img id="image" src={sport} className={styles.typeStuff} alt="elecrtic"/>
                        <div className={styles.middle}>
                            Спортивні тренажери
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <img id="image" src={homeToll} className={styles.typeStuff} alt="elecrtic"/>
                        <div className={styles.middle}>
                            Техніка для дома
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <img id="image" src={photo} className={styles.typeStuff} alt="elecrtic"/>
                        <div className={styles.middle}>
                            Фото та відео
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <img id="image" src={tool} className={styles.typeStuff} alt="elecrtic"/>
                        <div className={styles.middle}>
                            Інструменти
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <img id="image" src={music} className={styles.typeStuff} alt="elecrtic"/>
                        <div className={styles.middle}>
                            Музичні інструменти
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <img id="image" src={velo} className={styles.typeStuff} alt="elecrtic"/>
                        <div className={styles.middle}>
                            Спорт та відпочинок
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <img id="image" src={electronic} className={styles.typeStuff} alt="elecrtic"/>
                        <div className={styles.middle}>
                            Устаткування для заходів
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <img id="image" src={electronic} className={styles.typeStuff} alt="elecrtic"/>
                        <div className={styles.middle}>
                            Електроніка
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <img id="image" src={play} className={styles.typeStuff} alt="elecrtic"/>
                        <div className={styles.middle}>
                            Ігри та консолі
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={styles.titleStuff}>
                <h1>Як взяти/здати в оренду</h1>
            </div>
            <div className={styles.about}>
                <div className={styles.aboutFirst}>
                    <div className={styles.aboutItem}>
                        <div className={styles.aboutImg}>
                            <img id="image" src={first} alt="elecrtic"/>
                        </div>
                    </div>
                    <div className={styles.aboutItem}>
                        <div className={styles.aboutImg}>
                            <img id="image" src={third} alt="elecrtic"/>
                        </div>
                    </div>
                </div>
                <div className={styles.aboutFirst}>
                    <div className={styles.aboutItem}>
                        <div className={styles.aboutImg}>
                            <img id="image" src={second} alt="elecrtic"/>
                        </div>
                    </div>
                    <div className={styles.aboutItem}>
                        <div className={styles.aboutImg}>
                            <img id="image" src={fourth} alt="elecrtic"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.titleStuff}>
                <h1>Допомога</h1>
            </div>
            <div className={styles.help}>
                <div className= {styles.sectionHelpText}>
                    <p> <strong>RentStuff</strong> - сучасна платформа для оренди та здачі в оренду різноманітних речей.</p>
                    <p>Інструкція користування:</p>
                </div>
                <div className= {styles.markSectionHelp}>
                    <ul type="circle">
                        <li>Орендодавці користуються Web - версією.</li>
                        <li>Ореедарі користуються Android - версією.</li>
                        <li>Для розміщення оголошень орендодавцю треба бути зареєстрованим (-ою) та зареєструвати магазин.</li>
                        <li>Для того щоб переглядати та відповідати на оголошення, орендарю треба бути зареєстрованим (-ою).</li>
                        <li>При винекненні запитань чи проблем зверніться до <a href="#" className="chat">служби підтримки.</a>.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.titleStuff}>
                <h1>Контакти</h1>
            </div>
            <div className={styles.contacts}>
                <div className= {styles.socialNet}>
                    <h5 className={styles.mainSocialNet}>Соціальні мережі</h5>
                    <h5 className={styles.advertisingTitle}>Електронна пошта</h5>
                </div>
                <div className= {styles.listNet}>
                    <a href="https://uk-ua.facebook.com/" className= {styles.socialNetworks}>Facebook</a>
                    <a href="https://www.instagram.com/?hl=ru" className= {styles.socialNetworks}>Instagram</a>
                    <a href="https://web.telegram.org/z/" className= {styles.socialNetworks}>Telegram</a>
                    <h5 className= {styles.email}>rentstuff@gmail.com</h5>
                </div>
            </div>

        </div>


    )
}
export default Home;