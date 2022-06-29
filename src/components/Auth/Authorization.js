import React, {useState} from 'react'
import styles from '../../css/Auth/Auth.module.css'
import {Link} from "react-router-dom";
import {fetchLoginUser, isUserHasShop} from "../../api";
import {t} from "i18next";
import {useTranslation} from "react-i18next";


export default function Authorization() {
    const [authorization, setAuthorization] = useState(() => {
        return {
            email: "",
            password: "",
        }
    })


    const changeInputAuth = (field, event) => {
        setAuthorization(prev => {
            return {
                ...prev,
                [field]: event.target.value
            }
        })
    }
    const {t} = useTranslation();

    const linkStyle = {
        color: 'black',
        marginLeft: '120px',
        fontSize: '20px'
    };
    const submit = event => {
        event.preventDefault();
        fetchLoginUser({
            email: authorization.email,
            password: authorization.password,
        }).then(res => {
            localStorage.setItem('id', res.data.userId)
            localStorage.setItem('authToken', res.data.token);
            localStorage.setItem('authTokenDate', new Date().toISOString());
            localStorage.setItem('role', res.data.role);

            let isShelter = isUserHasShop(res.data.token, res.data.userId)
                .then(isHas => {
                    if (res.data.role === 'landlord') {
                        if (isHas.data === 1) {
                            window.location.replace('/homeAdmin/' + res.data.userId);
                        } else {
                            window.location.replace('/createShop')
                        }
                    } else {
                        window.location.replace('/homeUser/' + res.data.userId);

                    }
                })
                .catch(errors => console.log(errors));

        })
            .catch(e => {
                alert(e)
            })
    }
    return (
        <div className={styles.formAuth}>
            <form onSubmit={submit} className={styles.formA}>
                <h2>{t('authorizationPage.titleAuthorization')}</h2>
                <div className={styles.formData}>
                    <label htmlFor="email">{t('authorizationPage.email')}</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={authorization.email}
                        onChange={(event) => changeInputAuth("email", event)}
                        className={styles.input}

                    />
                </div>
                <div className={styles.formData}>
                    <label htmlFor="password">
                        {t('authorizationPage.password')}
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={authorization.password}
                        onChange={(event) => changeInputAuth("password", event)}
                        className={styles.input}

                    />
                </div>
                <button className={styles.btn}>
                    {t('authorizationPage.btnEnter')}
                </button>
                <a href={"/register"} className={styles.account}>{t('authorizationPage.account')}</a>
            </form>
        </div>
    )
}
