import React, {useState} from 'react'
import styles from '../../css/Auth/Registration.module.css'
import {fetchCreateUser, shelters} from "../../api";
import {t} from "i18next";
import {useTranslation} from "react-i18next";

export default function Registration() {
    const [roleValue, setRoleValue] = useState('')
    const [register, setRegister] = useState(() => {
        return {
            name: "",
            surname: "",
            phone: "",
            email: "",
            password: "",
            photo: null,
        }
    })

    const onChange = (e) => {
        let files = e.target.files;
        let name = files[0].name;
        let reader = new FileReader(files)
        reader.readAsDataURL(files[0]);
        //console.log(files[0]);
        reader.onload = (e) => {
            console.log(e.target.result);
            console.log(name)
            setRegister(prev => {
                return {
                    ...prev,
                    photo: name + "\\" + e.target.result
                }
            })
        }
    }

    const changeInputRegister = (field, event) => {
        setRegister(prev => {
            return {
                ...prev,
                [field]: event.target.value
            }
        })
    }

    const {t} = useTranslation();

    const linkStyle = {
        color: 'black',
        marginLeft: '240px',
        fontSize: '20px',
        marginBottom: '50px'
    };
    const submit = event => {
        event.preventDefault();

        console.log((register));

        fetchCreateUser({
            name: register.name,
            surname: register.surname,
            phone: register.phone,
            email: register.email,
            password: register.password,
            photo: register.photo,
            role: roleValue
        }).then(() => {
            alert('Вы успешно зарегестрированы')
            // window.location.replace('/login');
        })
            .catch(e => {
                alert(e)

            })


    }
    return (
        <div className={styles.formRegister}>
            <form onSubmit={submit} className={styles.form}>
                <h2>{t('registrationPage.titleRegistration')}</h2>
                <div className={styles.formData}>
                    <label htmlFor="username">
                        {t('registrationPage.name')}
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
                        {t('registrationPage.surname')}
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
                    <label htmlFor="email">{t('registrationPage.email')}</label>
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
                    <label htmlFor="phone">{t('registrationPage.phone')}</label>
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
                        {t('registrationPage.password')}
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
                    <label htmlFor="">{t('registrationPage.role')}</label>
                    <select value={roleValue} onChange={(event) => setRoleValue(event.target.value)}>
                        <option value="landlord">{t('registrationPage.landlord')}</option>
                        <option value="renting">{t('registrationPage.renting')}</option>
                    </select>

                </div>
                <div className={styles.formData}>
                    <label htmlFor="photo">
                        {t('registrationPage.photo')}
                    </label>
                    <div className={styles.file}>
                        <input name="photo"
                               type="file"
                               placeholder="Фото"
                               defaultValue={register.photo}
                               className={styles.customFileInput}
                               onChange={(e) => onChange(e)}
                        />
                    </div>
                </div>
                <button className={styles.btn}>{t('registrationPage.btnEnter')}</button>
                <a href={"/login"} className={styles.account}>{t('registrationPage.account')}</a>
            </form>
        </div>
    )
}
