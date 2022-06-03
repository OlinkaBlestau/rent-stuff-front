import React, { useState} from 'react'
import styles from '../../css/Auth/Auth.module.css'
import {Link} from "react-router-dom";
import {fetchLoginUser} from "../../api";


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

            if(res.data.role === 'landlord'){
                window.location.replace('/createShop');
            }else{
                window.location.replace('/user/home/' + res.data.userId);

            }

        })
            .catch(e => {
                alert(e)
            })
    }
    return (
        <div className={styles.formAuth}>
            <form onSubmit={submit} className={styles.formA}>
                <h2>Авторизація</h2>
                <div className={styles.formData}>
                    <label htmlFor="email">E-mail</label>
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
                        Пароль:
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
                    Увійти
                </button>
                <a href={"/register"} className={styles.account}>Створити акаунт</a>
            </form>
        </div>
    )
}
