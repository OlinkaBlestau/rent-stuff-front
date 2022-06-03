import React, {useState} from 'react'
import styles from '../../css/Auth/Registration.module.css'
import {fetchCreateUser, shelters} from "../../api";

export default function Registration() {
    const [roleValue, setRoleValue] = useState('')
    const [register, setRegister] = useState(() => {
        return {
            name: "",
            surname: "",
            phone: "",
            email: "",
            password: "",
        }
    })

    const changeInputRegister = (field, event) => {
        setRegister(prev => {
            return {
                ...prev,
                [field]: event.target.value
            }
        })
    }


    const linkStyle = {
        color: 'black',
        marginLeft: '240px',
        fontSize: '20px',
        marginBottom: '50px'
    };
    const submit = event => {
        event.preventDefault();


        fetchCreateUser({
            name: register.name,
            surname: register.surname,
            phone: register.phone,
            email: register.email,
            password: register.password,
            role: roleValue
        }).then(() => {
            alert('Вы успешно зарегестрированы')
            window.location.replace('/login');
        })
            .catch(e => {
                alert(e)

            })
    }
    return (
        <div className={styles.formRegister}>
            <form onSubmit={submit} className={styles.form}>
                <h2>Реєстрація</h2>
                <div className={styles.formData}>
                    <label htmlFor="username">
                        Ім'я:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={register.name}
                        onChange={(event) => changeInputRegister("name", event)}
                        className={styles.input}
                    />
                </div>
                <div className={styles.formData}>
                    <label htmlFor="surname">
                        Прізвище:
                    </label>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        value={register.surname}
                        onChange={(event) => changeInputRegister("surname", event)}
                        className={styles.input}

                    />
                </div>
                <div className={styles.formData}>
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={register.email}
                        onChange={(event) => changeInputRegister("email", event)}
                        className={styles.input}

                    />
                </div>
                <div className={styles.formData}>
                    <label htmlFor="phone">Номер телефону: </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        onChange={(event) => changeInputRegister("phone", event)}
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
                        value={register.password}
                        onChange={(event) => changeInputRegister("password", event)}
                        className={styles.input}

                    />
                </div>
                <div className={styles.formData}>
                    <label htmlFor="">Роль</label>
                    <select value={roleValue} onChange={(event) => setRoleValue(event.target.value)}>
                        <option value="landlord">Орендодавець</option>
                        <option value="renting">Орендатор</option>
                    </select>

                </div>
                <button className={styles.btn}>Зареєструватися</button>
                <a href={"/login"} className={styles.account}>Вже маю акаунт</a>
            </form>
        </div>
    )
}
