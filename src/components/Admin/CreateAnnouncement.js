import React, {Component} from 'react';
import styles from '../../css/Admin/CreateAnnouncement.module.css'
import {
    createAnnouncement,
    createMovie, fetchCategory,
} from "../../api";
import {Link} from "react-router-dom";

export default class CreateAnnouncement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: "",
            name: '',
            price: '',
            photo: null,
            category_id: '',
        };
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        let store = localStorage.getItem('authToken')
        fetchCategory(store).then(
            resolve => this.setState({categories: resolve.data.categories}))

    }


    submit = event => {
        event.preventDefault();
        let store = localStorage.getItem('authToken')
        let thing = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
            photo: this.state.photo,
            shop_id: 1,
            category_id: this.state.category_id
        }

        console.log(thing)

        createAnnouncement(thing, store).then(response => {
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

    setCategory(event) {
        this.setState({category_id: event.target.value})
    }

    onChange(e) {
        let files = e.target.files;
        let reader = new FileReader()
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            this.setState({photo: files[0].name + "\\" + e.target.result})
        }
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <h1>Створити оголошення</h1>
                <form onSubmit={this.submit} encType="multipart/form-data">
                    <div className={styles.formElements}>
                        <div className={styles.elementsRight}>
                            <div className={styles.name}>
                                <input name='name'
                                       id='name'
                                       type="text"
                                       className={styles.input}
                                       value={this.state.name}
                                       placeholder="Назва"
                                       onClick={(item) => {
                                           this.handleChanges("name", item)
                                       }}
                                       onChange={(item) => {
                                           this.handleChanges("name", item)
                                       }}
                                />
                            </div>
                            <div className={styles.price}>
                                <input name='price'
                                       type="number"
                                       id='price'
                                       placeholder="Ціна за день"
                                       value={this.state.price}
                                       className={styles.input}
                                       onClick={(item) => {
                                           this.handleChanges("price", item)
                                       }}
                                       onChange={(item) => {
                                           this.handleChanges("price", item)
                                       }}/>

                            </div>

                            <div className={styles.file}>
                                <input name="photo"
                                       type="file"
                                       placeholder="Фото"
                                       className={styles.customFileInput}
                                       onChange={(e) => this.onChange(e)}
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

                            <div className={styles.category}>
                                <p>Оберіть категорію</p>
                                <div className={styles.typeB} onChange={this.setCategory.bind(this)}>
                                    {
                                        this.state.categories === undefined
                                            ? ''
                                            : this.state.categories.map(el => {
                                                return (
                                                    <div className={styles.radioButton}>
                                                        <label htmlFor={el.name}>{el.name}</label>
                                                        <input key={el.id} id={el.name} type="radio" value={el.id}
                                                               name="type"/>
                                                    </div>

                                                )

                                            })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className={styles.btn} onClick={this.submit}>
                        Додати об'яву
                    </button>
                </form>
            </div>

        )
    }

}
