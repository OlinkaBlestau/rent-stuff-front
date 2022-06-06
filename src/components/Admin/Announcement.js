import styles from "../../css/Admin/Announcement.module.css";
import React, {useEffect, useState} from 'react';
import moment from "moment/moment";
import {useParams} from "react-router-dom";
import {category, deleteThing, fetchShop, fetchThing, fetchThingByUser, fetchUser} from "../../api";
import {useTranslation} from "react-i18next";

require('moment/locale/ru');


const Announcement = () => {
    const params = useParams();
    const [announcements, setAnnouncements] = useState([])


    useEffect(() => {
        const getShop = async () => {
            let id = localStorage.getItem('id')
            const things = await fetchThingByUser(id)
                .then(response => response.data)
                .catch(errors => console.log(errors))
            console.log(things[0].shop.thing)
            setAnnouncements(things[0].shop.thing)
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
            <h1>Мої оголошення</h1>
            <div className={styles.announcementEl}>
                {
                    announcements.map((announcement) => {
                        return <div>
                            <div className={styles.wrapper}>
                                <button>
                                    <a href={`/editAnnouncement/`+ announcement.id}>Edit</a>
                                </button>
                                <button onClick={() => deleteAnnouncement(announcement.id)}>
                                    delete
                                </button>
                                <div>
                                    <img className={styles.image}
                                         src={process.env.REACT_APP_IMAGE_URL + announcement.photo}
                                         alt=""/>
                                </div>
                                <div className={styles.data}>
                                    <p className={styles.dataTitle}>Назва:</p>
                                    <p className={styles.dataInfo}>{announcement.name}</p>
                                </div>
                                <div className={styles.data}>
                                    <p className={styles.dataTitle}>Ціна:</p>
                                    <p className={styles.dataInfo}>{announcement.price}</p>
                                </div>
                                <div className={styles.data}>
                                    <p className={styles.dataTitle}>Категорія:</p>
                                    <p className={styles.dataInfo}>{announcement.category.name}</p>
                                </div>
                                <div className={styles.data}>
                                    <p className={styles.dataTitle}>Опис:</p>
                                    <p className={styles.dataInfo}>{announcement.description}</p>
                                </div>
                                <div className={styles.data}>
                                    <p className={styles.dataTitle}>Дата:</p>
                                    <p className={styles.dataInfo}>{moment(announcements.created_at).format('ll')}</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <button className={styles.btn}>
                <a href={'/createAnnouncement'}>Створити оголошення </a>
            </button>
        </div>
    )
}
export default Announcement