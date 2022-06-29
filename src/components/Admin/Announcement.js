import styles from "../../css/Admin/Announcement.module.css";
import React, {useEffect, useState} from 'react';
import moment from "moment/moment";
import {useParams} from "react-router-dom";
import {category, count, deleteThing, fetchShop, fetchThing, fetchThingByUser, fetchUser} from "../../api";
import {useTranslation} from "react-i18next";
import edit from "../../img/icons8-редактировать-50.png";
import remove from "../../img/icons8-мусор-48.png";


require('moment/locale/ru');


const Announcement = () => {
    const params = useParams();
    const [announcements, setAnnouncements] = useState([])


    // useEffect(() => {
    //     const getShop = async () => {
    //         let id = localStorage.getItem('id')
    //         let auth = localStorage.getItem('authToken')
    //         const chart = await count(id, auth)
    //             .then(response => response.data)
    //             .catch(errors => console.log(errors))
    //         console.log(chart)
    //     }
    //     getShop()
    // }, [params.id])

    useEffect(() => {
        const getShop = async () => {
            let id = localStorage.getItem('id')
            const things = await fetchThingByUser(id)
                .then(response => response.data)
                .catch(errors => console.log(errors))
            console.log(things.shop.thing)
            setAnnouncements(things.shop.thing)
        }
        getShop()
    }, [params.id])


    const deleteAnnouncement = (id) => {
        console.log(id)
        deleteThing(id).then(() => window.location.reload())
    }


    const {t} = useTranslation();
    return (
        <div className={styles.pageAnnouncement}>
            <h1>{t('viewAnnouncement.titleAnnouncement')}</h1>
            <div className={styles.announcementEl}>
                {
                    announcements.map((announcement) => {
                        return <div>
                            <div className={styles.wrapper}>
                                <button className={styles.btnEdit}>
                                    <a href={`/editAnnouncement/`+ announcement.id}><img id="image" src={edit} className={styles.imgBnt} alt="logo"/></a>
                                </button>
                                <button onClick={() => deleteAnnouncement(announcement.id)} className={styles.btnDelete}>
                                    <img id="image" className={styles.imgBnt} src={remove}  alt="logo"/>
                                </button>
                                <div>
                                    <img className={styles.image}
                                         src={process.env.REACT_APP_IMAGE_URL + announcement.photo}
                                         alt=""/>
                                </div>
                                <div className={styles.data}>
                                    <p className={styles.dataTitle}>{t('viewAnnouncement.name')}</p>
                                    <p className={styles.dataInfo}>{announcement.name}</p>
                                </div>
                                <div className={styles.data}>
                                    <p className={styles.dataTitle}>{t('viewAnnouncement.price')}</p>
                                    <p className={styles.dataInfo}>{announcement.price}</p>
                                </div>
                                <div className={styles.data}>
                                    <p className={styles.dataTitle}>{t('viewAnnouncement.category')}</p>
                                    <p className={styles.dataInfo}>{announcement.category.name}</p>
                                </div>
                                <div className={styles.data}>
                                    <p className={styles.dataTitle}>{t('viewAnnouncement.description')}</p>
                                    <p className={styles.dataInfo}>{announcement.description}</p>
                                </div>
                                <div className={styles.data}>
                                    <p className={styles.dataTitle}>{t('viewAnnouncement.date')}</p>
                                    <p className={styles.dataInfo}>{moment(announcements.created_at).format('ll')}</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <button className={styles.btn}>
                <a href={'/createAnnouncement'}>{t('viewAnnouncement.btnCreate')}</a>
            </button>
        </div>
    )
}
export default Announcement