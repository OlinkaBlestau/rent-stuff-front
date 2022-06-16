import styles from "../../css/Admin/FullInfoAnnouncement.module.css";
import React, {useEffect, useState} from 'react';
import moment from "moment/moment";
import {useParams} from "react-router-dom";
import {category, deleteThing, fetchShop, fetchThing, fetchThingByUser, fetchUser} from "../../api";
import {useTranslation} from "react-i18next";
import edit from "../../img/icons8-редактировать-50.png";
import remove from "../../img/icons8-мусор-48.png";


require('moment/locale/ru');


const FullInfoAnnouncement = () => {
    const params = useParams();
    const [announcement, setAnnouncement] = useState([])


    useEffect(() => {
        const getShop = async () => {
            const things = await fetchThing(params.id)
                .then(response => response.data)
                .catch(errors => console.log(errors))
            console.log(things[0])
            setAnnouncement(things[0])
        }
        getShop()
    }, [params.id])


    const {t} = useTranslation();
    return (
        <div className={styles.pageAnnouncement}>
            <h1>{t('fullInfoAnnouncement.titleAnnouncement')}</h1>
            <div className={styles.announcementEl}>
                <div>
                    <div className={styles.wrapper}>
                        <div>
                            <img className={styles.image}
                                 src={process.env.REACT_APP_IMAGE_URL + announcement.photo}
                                 alt=""/>
                        </div>
                        <div className={styles.data}>
                            <p className={styles.dataTitle}>{t('fullInfoAnnouncement.name')}</p>
                            <p className={styles.dataInfo}>{announcement.name }</p>
                        </div>
                        <div className={styles.data}>
                            <p className={styles.dataTitle}>{t('fullInfoAnnouncement.price')}</p>
                            <p className={styles.dataInfo}>{announcement !== undefined ? announcement.price : ''}</p>
                        </div>
                        <div className={styles.data}>
                            <p className={styles.dataTitle}>{t('fullInfoAnnouncement.category')}</p>
                            <p className={styles.dataInfo}>{announcement.category !== undefined ? announcement.category.name : ''}</p>
                        </div>
                        <div className={styles.data}>
                            <p className={styles.dataTitle}>{t('fullInfoAnnouncement.description')}</p>
                            <p className={styles.dataInfo}>{announcement !== undefined ? announcement.description : ''}</p>
                        </div>
                        <div className={styles.data}>
                            <p className={styles.dataTitle}>{t('fullInfoAnnouncement.date')}</p>
                            <p className={styles.dataInfo}>{moment(announcement.created_at).format('ll')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.shopInfo}>
                <div className={styles.data}>
                    <p className={styles.dataTitle1}>{t('fullInfoAnnouncement.nameShop')}</p>
                    <p className={styles.dataInfo1}>{announcement.shop !== undefined ? announcement.shop.name : ''}</p>
                </div>
                <div className={styles.data}>
                    <p className={styles.dataTitle1}>{t('fullInfoAnnouncement.address')}</p>
                    <p className={styles.dataInfo1}>{announcement.shop !== undefined ? announcement.shop.address : ''}</p>
                </div>
                <div className={styles.data}>
                    <p className={styles.dataTitle1}>{t('fullInfoAnnouncement.phone')}</p>
                    <p className={styles.dataInfo1}>{announcement.shop !== undefined ? announcement.shop.phone : ''}</p>
                </div>
                <div className={styles.data}>
                    <p className={styles.dataTitle1}>{t('fullInfoAnnouncement.email')}</p>
                    <p className={styles.dataInfo1}>{announcement.shop !== undefined ? announcement.shop.email : ''}</p>
                </div>
                <div className={styles.data}>
                    <p className={styles.dataTitle1}>{t('fullInfoAnnouncement.descriptionShop')}</p>
                    <p className={styles.dataInfo1}>{announcement.shop !== undefined ? announcement.shop.description : ''}</p>
                </div>
            </div>
        </div>
    )
}
export default FullInfoAnnouncement