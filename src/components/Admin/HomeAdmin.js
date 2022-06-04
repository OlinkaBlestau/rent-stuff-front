import React from 'react';
import styles from '../../css/Home/Home.module.css'
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import fon from "../../img/background.jpg";
import "react-alice-carousel/lib/alice-carousel.css";

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

import {FreeMode, Pagination} from "swiper";
import party from "../../img/party.jpg";
import one from "../../img/1.png";
import two from "../../img/2.png";
import three from "../../img/3.png";
import four from "../../img/4.png";
import {useTranslation} from "react-i18next";

const HomeAdmin = () => {
    const params = useParams();
    const { t } = useTranslation();

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
                    {t('homePage.serviceRent')}
                </h3>
                <div className={styles.add}>
                    <button className={styles.button}>
                        <a href={"/adminAnnouncement"}>{t('homePage.btnCreateAnnouncement')}</a>
                    </button>
                </div>
            </div>
            <div>
                <div className={styles.titleStuff}>
                    <h1>{t('homePage.titlePossibility')}</h1>
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
                            {t('homePage.fitnessEquipment')}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <img id="image" src={homeToll} className={styles.typeStuff} alt="elecrtic"/>
                        <div className={styles.middle}>
                            {t('homePage.homeEquipment')}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <img id="image" src={photo} className={styles.typeStuff} alt="elecrtic"/>
                        <div className={styles.middle}>
                            {t('homePage.photoVideo')}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <img id="image" src={tool} className={styles.typeStuff} alt="elecrtic"/>
                        <div className={styles.middle}>
                            {t('homePage.Equipment')}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <img id="image" src={music} className={styles.typeStuff} alt="elecrtic"/>
                        <div className={styles.middle}>
                            {t('homePage.musicEquipment')}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <img id="image" src={velo} className={styles.typeStuff} alt="elecrtic"/>
                        <div className={styles.middle}>
                            {t('homePage.sportVocation')}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <img id="image" src={party} className={styles.typeStuff} alt="elecrtic"/>
                        <div className={styles.middle}>
                            {t('homePage.partyEquipment')}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <img id="image" src={electronic} className={styles.typeStuff} alt="elecrtic"/>
                        <div className={styles.middle}>
                            {t('homePage.electronics')}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.item}>
                        <img id="image" src={play} className={styles.typeStuff} alt="elecrtic"/>
                        <div className={styles.middle}>
                            {t('homePage.plays')}
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={styles.titleStuff}>
                <h1>{t('homePage.titleInstruction')}</h1>
            </div>
            <div className={styles.about}>
                <div className={styles.aboutFirst}>
                    <div className={styles.aboutItem}>
                        <div className={styles.aboutImg}>
                            <div className={styles.number}>
                                <img src={one} alt=""/>
                            </div>
                            <div className={styles.picture}>
                                <img id="image" src={first} alt="elecrtic"/>
                            </div>
                        </div>
                        <div className={styles.text}>
                            <p>
                                <strong>
                                    {t('homePage.firstStrong')}
                                </strong>
                            </p>
                            <p>
                                {t('homePage.firstText')}
                            </p>
                        </div>
                    </div>
                    <div className={styles.aboutItem}>
                        <div className={styles.aboutImg}>
                            <div className={styles.number}>
                                <img id="image" src={two} alt="elecrtic"/>
                            </div>
                            <div className={styles.picture}>
                                <img id="image" src={second} alt="elecrtic"/>
                            </div>
                        </div>
                        <div className={styles.text}>
                            <p>
                                <strong>
                                    {t('homePage.secondStrong')}
                                </strong>
                            </p>
                            <p>
                                {t('homePage.secondText')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.aboutFirst}>
                    <div className={styles.aboutItem}>
                        <div className={styles.aboutImg}>
                            <div className={styles.number}>
                                <img id="image" src={three} alt="elecrtic"/>
                            </div>
                            <div className={styles.picture}>
                                <img id="image" src={third} alt="elecrtic"/>
                            </div>
                        </div>
                        <div className={styles.text}>
                            <p>
                                <strong>
                                    {t('homePage.thirdStrong')}
                                </strong>
                            </p>
                            <p>
                                {t('homePage.thirdText')}
                            </p>
                        </div>
                    </div>
                    <div className={styles.aboutItem}>
                        <div className={styles.aboutImg}>
                            <div className={styles.number}>
                                <img id="image" src={four} alt="elecrtic"/>
                            </div>
                            <div className={styles.picture}>
                                <img id="image" src={fourth} alt="elecrtic"/>
                            </div>
                        </div>
                        <div className={styles.text}>
                            <p>
                                <strong>
                                    {t('homePage.fourthStrong')}
                                </strong>
                            </p>
                            <p>
                                {t('homePage.fourthText')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.titleStuff}>
                <h1> {t('homePage.titleHelp')}</h1>
            </div>
            <div className={styles.help}>
                <div className= {styles.sectionHelpText}>
                    <p> <strong>{t('homePage.strongPlatform')} </strong>{t('homePage.modernPlatform')}</p>
                    <p>{t('homePage.instruction')}</p>
                </div>
                <div className= {styles.markSectionHelp}>
                    <ul type="circle">
                        <li>{t('homePage.li1')}</li>
                        <li>{t('homePage.li2')}</li>
                        <li>{t('homePage.li3')}</li>
                        <li>{t('homePage.li4')}</li>
                        <li>{t('homePage.li5')} <a href="#" className="chat">{t('homePage.a')}</a>.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.titleStuff}>
                <h1>{t('homePage.titleContact')}</h1>
            </div>
            <div className={styles.contacts}>
                <div className= {styles.socialNet}>
                    <h5 className={styles.mainSocialNet}>{t('homePage.socialNet')}</h5>
                    <h5 className={styles.advertisingTitle}>{t('homePage.ourEmail')}</h5>
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
export default HomeAdmin;