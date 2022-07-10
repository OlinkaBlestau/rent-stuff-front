import styles from "../../css/Admin/Rented.module.css";
import React, {useEffect, useState} from 'react';
import moment from "moment/moment";
import {useParams} from "react-router-dom";
import {category, count, deleteThing, fetchShop, fetchThing, fetchThingByUser, fetchUser} from "../../api";
import {useTranslation} from "react-i18next";
import edit from "../../img/icons8-редактировать-50.png";
import remove from "../../img/icons8-мусор-48.png";
import fon from "../../img/background.jpg";
import velo1 from "../../img/надо.jpg";
import velo2 from "../../img/надо2.jpg";


require('moment/locale/ru');


const Rented = () => {


    const {t} = useTranslation();
    return (
        <div className={styles.pageAnnouncement}>
            <h1>{t('rented.titleRented')}</h1>
            <div className={styles.announcementEl}>
                <div className={styles.wrapper}>
                    {/*<button className={styles.btnEdit}>*/}
                    {/*    <a href={`/editAnnouncement/` + announcement.id}><img id="image" src={edit}*/}
                    {/*                                                          className={styles.imgBnt} alt="logo"/></a>*/}
                    {/*</button>*/}
                    {/*<button onClick={() => deleteAnnouncement(announcement.id)} className={styles.btnDelete}>*/}
                    {/*    <img id="image" className={styles.imgBnt} src={remove} alt="logo"/>*/}
                    {/*</button>*/}
                    <div>
                        <img id="image" className={styles.image} src={velo1} alt="logo"/>
                    </div>
                    <div className={styles.data}>
                        <p className={styles.dataTitle}>{t('viewAnnouncement.name')}</p>
                        <p className={styles.dataInfo}>hhh</p>
                    </div>
                    <div className={styles.data}>
                        <p className={styles.dataTitle}>{t('viewAnnouncement.price')}</p>
                        <p className={styles.dataInfo}>hhh</p>
                    </div>
                    <div className={styles.data}>
                        <p className={styles.dataTitle}>{t('viewAnnouncement.category')}</p>
                        <p className={styles.dataInfo}>hh</p>
                    </div>
                    <div className={styles.data}>
                        <p className={styles.dataTitle}>{t('viewAnnouncement.description')}</p>
                        <p className={styles.dataInfo}>hh</p>
                    </div>
                    <div className={styles.data}>
                        <p className={styles.dataTitle}>{t('viewAnnouncement.date')}</p>
                        <p className={styles.dataInfo}>06.07.2022</p>
                    </div>
                </div>
            </div>
            <div className={styles.shopInfo}>
                {/*<button className={styles.btnEdit}>*/}
                {/*    <a href={`/editAnnouncement/` + announcement.id}><img id="image" src={edit}*/}
                {/*                                                          className={styles.imgBnt} alt="logo"/></a>*/}
                {/*</button>*/}
                {/*<button onClick={() => deleteAnnouncement(announcement.id)} className={styles.btnDelete}>*/}
                {/*    <img id="image" className={styles.imgBnt} src={remove} alt="logo"/>*/}
                {/*</button>*/}
                <div>
                    <img id="image" className={styles.image} src={velo2} alt="logo"/>
                </div>
                <div className={styles.data}>
                    <p className={styles.dataTitle}>{t('viewAnnouncement.name')}</p>
                    <p className={styles.dataInfo}>hhh</p>
                </div>
                <div className={styles.data}>
                    <p className={styles.dataTitle}>{t('viewAnnouncement.price')}</p>
                    <p className={styles.dataInfo}>hhh</p>
                </div>
                <div className={styles.data}>
                    <p className={styles.dataTitle}>{t('viewAnnouncement.category')}</p>
                    <p className={styles.dataInfo}>hh</p>
                </div>
                <div className={styles.data}>
                    <p className={styles.dataTitle}>{t('viewAnnouncement.description')}</p>
                    <p className={styles.dataInfo}>hh</p>
                </div>
                <div className={styles.data}>
                    <p className={styles.dataTitle}>{t('viewAnnouncement.date')}</p>
                    <p className={styles.dataInfo}>06.07.2022</p>
                </div>
            </div>
        </div>
    )
}
export default Rented