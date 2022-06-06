import React, {useEffect, useState} from 'react';
import styles from '../../css/Admin/ViewShop.module.css'
import {useParams} from "react-router-dom";
import {fetchShop, fetchUser} from "../../api";
import {useTranslation} from "react-i18next";

require('moment/locale/ru');



const ViewShop = () => {
    const params = useParams();
    const [shop, setShop] = useState([])

    useEffect(() => {
        const getShop = async () => {
            let id = localStorage.getItem('id')
            const res = await fetchUser(id).then(resolve => resolve.data);
            const shop = res[0].shop
            console.log(shop);
            setShop(shop)

        }
        getShop().then(r => r.data)
    }, [params.id])

    const { t } = useTranslation();
    return (
        <div className="AdminProfile text-center">
            <div className="dataInfo">
                <div className="viewing">
                    <div className="box">
                        <div className= {styles.infobox}>
                            <h2>{t('viewShop.titleShopEdit')}</h2>
                            <div className= {styles.data}>
                                <p className= {styles.dataTitle}>{t('viewShop.name')}</p>
                                <p className= {styles.dataInfo}> {shop.name}</p>
                            </div>
                            <div className= {styles.data}>
                                <p className= {styles.dataTitle}>{t('viewShop.email')}</p>
                                <p className= {styles.dataInfo}>{shop.email}</p>
                            </div>
                            <div className= {styles.data}>
                                <p className= {styles.dataTitle}>{t('viewShop.phone')}</p>
                                <p className= {styles.dataInfo}>{shop.phone}</p>
                            </div>
                            <div className= {styles.data}>
                                <p className= {styles.dataTitle}>{t('viewShop.address')}</p>
                                <p className= {styles.dataInfo}>{shop.address}</p>
                            </div>
                            <div className= {styles.data}>
                                <p className= {styles.dataTitle}>{t('viewShop.longitude')}</p>
                                <p className= {styles.dataInfo}>{shop.longitude}</p>
                            </div>
                            <div className= {styles.data}>
                                <p className= {styles.dataTitle}>{t('viewShop.latitude')}</p>
                                <p className= {styles.dataInfo}>{shop.latitude}</p>
                            </div>
                            <div className= {styles.data}>
                                <p className= {styles.dataTitle}>{t('viewShop.description')}</p>
                                <p className= {styles.dataInfo}>{shop.description}</p>
                            </div>
                            {/*<div className= {styles.data}>*/}
                            {/*    <p className= {styles.dataTitle}>{t('profile.role')}</p>*/}
                            {/*    <p className= {styles.dataInfo}>{user.role}</p>*/}
                            {/*</div>*/}
                            <button className={styles.btn}>
                                <a href={`/editShop/`+ shop.id}>{t('viewShop.btnEdit')}</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewShop;
