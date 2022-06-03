import React, {useEffect, useState} from 'react';
import styles from '../../css/Admin/ProfileAdmin.module.css'
import {useParams} from "react-router-dom";
import {fetchUser} from "../../api";

require('moment/locale/ru');


const ProfileAdmin = () => {
    const params = useParams();
    const [user, setUser] = useState([])

    useEffect(() => {
        const getUser = async () => {
            let store = localStorage.getItem('authToken')
            let id = localStorage.getItem('id')
            const res = await fetchUser(id, store).then(resolve => resolve.data);
            const user = res[0]
            setUser(user)

        }
        getUser().then(r => r.data)
    }, [params.id])

    return (
        <div className="AdminProfile text-center">
            <div className="dataInfo">
                <div className="viewing">
                    <div className="box">
                        <div className= {styles.infobox}>
                            <h2>Ваші персональні данні</h2>
                            <div className= {styles.data}>
                                <p className= {styles.dataTitle}>Ім'я</p>
                                <p className= {styles.dataInfo}> {user.name}</p>
                            </div>
                            <div className= {styles.data}>
                                <p className= {styles.dataTitle}>Прізвіще</p>
                                <p className= {styles.dataInfo}>{user.surname}</p>
                            </div>
                            <div className= {styles.data}>
                                <p className= {styles.dataTitle}>Номер телефону</p>
                                <p className= {styles.dataInfo}>{user.phone}</p>
                            </div>
                            <div className= {styles.data}>
                                <p className= {styles.dataTitle}>E-mail</p>
                                <p className= {styles.dataInfo}>{user.email}</p>
                            </div>

                            <button className={styles.btn}>
                                <a href={`/changeUser/`}>Редагувати</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileAdmin;
