import React, {useEffect, useState} from 'react';
import styles from '../../css/User/Profile.module.css'
import {useParams} from "react-router-dom";
import {fetchUser} from "../../api";
import {useTranslation} from "react-i18next";

require('moment/locale/ru');



const ProfileUser = () => {
    const params = useParams();
    const [user, setUser] = useState([])

    useEffect(() => {
        const getUser = async () => {
            let store = localStorage.getItem('authToken')
            let id = localStorage.getItem('id')
            const res = await fetchUser(id, store).then(resolve => resolve.data);
            const user = res
            console.log(user)
            setUser(user)

        }
        getUser().then(r => r.data)
    }, [params.id])
    const { t } = useTranslation();

    return (
    <div className="UserProfile text-center">
        <div className="dataInfo">
            <div className="viewing">
                <div className="box">
                    <div className= {styles.infobox}>
                        <h2>{t('profile.titleProfile')}</h2>
                        <div className= {styles.data}>
                            <img className={styles.image}
                                 src={process.env.REACT_APP_IMAGE_URL + user.photo}
                                 alt=""/>
                        </div>
                        <div className= {styles.data}>
                            <p className= {styles.dataTitle}>{t('profile.name')}</p>
                            <p className= {styles.dataInfo}> {user.name}</p>
                        </div>
                        <div className= {styles.data}>
                            <p className= {styles.dataTitle}>{t('profile.surname')}</p>
                            <p className= {styles.dataInfo}>{user.surname}</p>
                        </div>
                        <div className= {styles.data}>
                            <p className= {styles.dataTitle}>{t('profile.phone')}</p>
                            <p className= {styles.dataInfo}>{user.phone}</p>
                        </div>
                        <div className= {styles.data}>
                            <p className= {styles.dataTitle}>{t('profile.email')}</p>
                            <p className= {styles.dataInfo}>{user.email}</p>
                        </div>

                        <button className={styles.btn}>
                            <a href={`/changeUser/`}>{t('profile.btnEdit')}</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )

}
export default ProfileUser;
