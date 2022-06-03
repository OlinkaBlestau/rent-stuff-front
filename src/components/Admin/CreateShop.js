import React, {Component} from 'react';
import styles from '../../css/Admin/CreateShop.module.css'
import {
     createShop
} from "../../api";
import {Link} from "react-router-dom";

export default class CreateShop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: "",
            name: '',
            phone: '',
            address: '',
            email: '',
            longitude: '',
            latitude: '',
        };
        this.submit = this.submit.bind(this);
    }


    submit = event => {
        event.preventDefault();
        let store = localStorage.getItem('authToken')
        let id = localStorage.getItem('id')
        let shop = {
            name: this.state.name,
            description: this.state.description,
            phone: this.state.phone,
            email: this.state.email,
            address: this.state.address,
            longitude: this.state.longitude,
            latitude: this.state.latitude,
            user_id : id
        }

        console.log(shop)

        createShop(shop, store).then(response => {
            this.setState({response: response.data});
        }).catch(errors => {
            this.setState({valid: errors.response.data.errors});
        })
    }

    handleChanges = (field, value) => {
        let fieldString = `${field}`;
        let input = document.getElementById(fieldString);
        if (value.target.value === "") {
            input.style.border = '3px solid red';
        } else {
            input.style.border = '';
            input.style.borderBottom = '2px solid #000';
        }
        this.setState({[fieldString]: value.target.value})
    }


    render() {
        return (
            <div className={styles.wrapper}>
                <h1>Створити Магазин</h1>
                <form onSubmit={this.submit} encType="multipart/form-data">
                    <div className={styles.formElements}>
                        <div className={styles.elementsRight}>
                            <div className={styles.name}>
                                <input name='name'
                                       id='name'
                                       type="text"
                                       className={styles.input}
                                       value={this.state.name}
                                       placeholder="Назва магазину"
                                       onClick={(item) => {
                                           this.handleChanges("name", item)
                                       }}
                                       onChange={(item) => {
                                           this.handleChanges("name", item)
                                       }}
                                />
                            </div>
                            <div className={styles.email}>
                                <input name='email'
                                       id='email'
                                       type="text"
                                       className={styles.input}
                                       value={this.state.email}
                                       placeholder="E-mail"
                                       onClick={(item) => {
                                           this.handleChanges("email", item)
                                       }}
                                       onChange={(item) => {
                                           this.handleChanges("email", item)
                                       }}
                                />
                            </div>
                            <div className={styles.phone}>
                                <input name='phone'
                                       id='phone'
                                       type="text"
                                       className={styles.input}
                                       value={this.state.phone}
                                       placeholder="Телефон"
                                       onClick={(item) => {
                                           this.handleChanges("phone", item)
                                       }}
                                       onChange={(item) => {
                                           this.handleChanges("phone", item)
                                       }}
                                />
                            </div>
                            <div className={styles.address}>
                                <input name='address'
                                       id='address'
                                       type="text"
                                       className={styles.input}
                                       value={this.state.address}
                                       placeholder="Адреса"
                                       onClick={(item) => {
                                           this.handleChanges("address", item)
                                       }}
                                       onChange={(item) => {
                                           this.handleChanges("address", item)
                                       }}
                                />
                            </div>
                            <div className={styles.longitude}>
                                <input name='longitude'
                                       id='longitude'
                                       type="text"
                                       className={styles.input}
                                       value={this.state.longitude}
                                       placeholder="Довгота"
                                       onClick={(item) => {
                                           this.handleChanges("longitude", item)
                                       }}
                                       onChange={(item) => {
                                           this.handleChanges("longitude", item)
                                       }}
                                />
                            </div>
                            <div className={styles.latitude}>
                                <input name='latitude'
                                       id='latitude'
                                       type="text"
                                       className={styles.input}
                                       value={this.state.latitude}
                                       placeholder="Широта"
                                       onClick={(item) => {
                                           this.handleChanges("latitude", item)
                                       }}
                                       onChange={(item) => {
                                           this.handleChanges("latitude", item)
                                       }}
                                />
                            </div>
                            <div className={styles.description}>
                                    <textarea name='description'
                                              id='description'
                                              value={this.state.description}
                                              placeholder="Опис"
                                              onClick={(item) => {
                                                  this.handleChanges("description", item)
                                              }}
                                              onChange={(item) => {
                                                  this.handleChanges("description", item)
                                              }}
                                    />
                            </div>
                        </div>
                    </div>
                    <button className={styles.btn} onClick={this.submit}>
                        Стоврити магазин
                    </button>
                </form>
            </div>

        )
    }

}
