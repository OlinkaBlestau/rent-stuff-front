import styles from "../../css/Admin/AllAnnouncement.module.css";
import React, {useEffect, useState} from 'react';
import moment from "moment/moment";
import {useParams} from "react-router-dom";
import {
    category,
    deleteThing,
    fetchAllThing,
    fetchCategory,
    fetchShop,
    fetchThing,
    fetchThingByUser,
    fetchUser
} from "../../api";
import {useTranslation} from "react-i18next";
import info from "../../img/icons8-информация-50.png";
import restart from "../../img/icons8-перезапуск-50.png";
import filter from "../../img/icons8-пустой-фильтр-50.png";






require('moment/locale/ru');


const AllAnnouncement = () => {
    const params = useParams();
    const [announcements, setAnnouncements] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filterItem, setFilterItem] = useState([]);
    const [filterAnnouncements, setFilterAnnouncements] = useState([]);

    useEffect(() => {
        const getShop = async () => {
            const things = await fetchAllThing()
                .then(response => response.data)
                .catch(errors => console.log(errors))
            setAnnouncements(things[0])
            setFilterAnnouncements(things[0])
        }
        const getCategories = async () => {
            const categories = await fetchCategory()
                .then(response => response.data)
                .catch(errors => console.log(errors))
            console.log(categories)
            setCategories(categories.categories)
        }
        getShop()
        getCategories()
    }, [params.id])

    const resetFilter = () => {
        setFilterAnnouncements(announcements);
    }

    const applyFilter = () => {
        let filtered = announcements.filter(
            element => element.category_id === Number(filterItem)
        );
        setFilterAnnouncements(filtered);
    }

    const deleteAnnouncement = (id) => {
        console.log(id)
        deleteThing(id).then(() => window.location.reload())
    }
    const {t} = useTranslation();

    return (
        <div className={styles.pageAnnouncement}>
            <h1>{t('allAnnouncement.titleAnnouncement')}</h1>
            <div className={styles.typeB} onChange={(event) => setFilterItem(event.target.value)}>
                {
                    categories === undefined
                        ? ''
                        : categories.map(el => {
                            return (
                                <div className={styles.radioButton}>
                                    <label htmlFor={el.name}>{el.name}</label>
                                    <input key={el.id} id={el.name} type="radio"
                                           value={el.id}
                                           name="type"/>
                                </div>

                            )

                        })

                }
                <button className={styles.btnEdit} onClick={applyFilter}>
                    <img id="image" className={styles.imgBnt} src={filter}  alt="logo"/>
                </button>
                <button className={styles.btnDelete} onClick={resetFilter}>
                    <img id="image" className={styles.imgBnt} src={restart}  alt="logo"/>
                </button>
            </div>
            <div className={styles.announcementEl}>
                {
                    filterAnnouncements.map((announcement) => {
                        return <div>
                            <div className={styles.wrapper}>
                                <button className={styles.btnInfo}>

                                    <a href={'/fullInfoAnnouncement/' + announcement.id}> <img id="image" src={info} className={styles.imgBnt} alt="logo"/> </a>
                                </button>
                                
                                <div>
                                    <img className={styles.image}
                                         src={process.env.REACT_APP_IMAGE_URL + announcement.photo}
                                         alt=""/>
                                </div>
                                <div className={styles.data}>
                                    <p className={styles.dataTitle}>{t('allAnnouncement.name')}</p>
                                    <p className={styles.dataInfo}>{announcement.name}</p>
                                </div>
                                <div className={styles.data}>
                                    <p className={styles.dataTitle}>{t('allAnnouncement.price')}</p>
                                    <p className={styles.dataInfo}>{announcement.price}</p>
                                </div>
                                {/*<div className={styles.data}>*/}
                                {/*    <p className={styles.dataTitle}>Категорія:</p>*/}
                                {/*    <p className={styles.dataInfo}>{announcement.category.name}</p>*/}
                                {/*</div>*/}
                                {/*<div className={styles.data}>*/}
                                {/*    <p className={styles.dataTitle}>Опис:</p>*/}
                                {/*    <p className={styles.dataInfo}>{announcement.description}</p>*/}
                                {/*</div>*/}
                                <div className={styles.data}>
                                    <p className={styles.dataTitle}>{t('allAnnouncement.date')}</p>
                                    <p className={styles.dataInfo}>{moment(announcement.created_at).format('ll')}</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    )
}
export default AllAnnouncement