import React, {Component} from 'react';
import styles from '../../css/User/ChangeUser.module.css'
import {useParams} from "react-router-dom";
import {fetchCategory, fetchThing, fetchUser, updateThing, updateUser} from "../../api";
import {Translation} from "react-i18next";

function withParams(Component) {
    return props => <Component {...props} params={useParams()}/>;
}

class EditAnnouncement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: '',

        }
    }

    componentDidMount() {
        let id = Number(this.props.params.id)

        this.setState({idThing: id})

        fetchThing(id).then(resolve => {
            this.setState({thing: resolve.data[0]})
        });

        fetchCategory().then(resolve => {
            this.setState({category: resolve.data})
        })
    }

    submit = event => {
        event.preventDefault();
        let store = localStorage.getItem('authToken')
        let thing = {
            name: this.state.thing.name,
            price: this.state.thing.price,
            photo: this.state.thing.photo,
            description: this.state.thing.description,
            category: this.state.category_id,
        }
        updateThing(this.state.idThing, thing, store).then(response => (response));
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
        this.setState(prevState => ({
            thing: {
                ...prevState.thing,
                [fieldString]: value.target.value
            }
        }));
    }

    changePassword = event => {
        let state = this.state;
        state.password = event.target.value
        this.setState(state)
    }

    setCategory(event) {
        this.setState({category_id: event.target.value})
    }

    onChange(e) {
        let files = e.target.files;
        let reader = new FileReader()
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            this.setState(prevState => ({
                thing: {
                    ...prevState.thing,
                    photo: files[0].name + "\\" + e.target.result
                }
            }));
        }
    }

    render() {

        return (
            <Translation>
                {
                    (t, {i18n}) => {
                        return <div className={styles.wrapper}>
                            <h1>{t('editProfile.editTitle')}</h1>
                            <form onSubmit={this.submit} encType="multipart/form-data">
                                <div>
                                    <div>
                                        <div className="name">
                                            <input className={styles.input} name='name'
                                                   id='name'
                                                   type="text"
                                                   value={(this.state.thing === undefined) ? '' : this.state.thing.name}
                                                   placeholder="Назва"
                                                   onClick={(item) => {
                                                       this.handleChanges("name", item)
                                                   }}
                                                   onChange={(item) => {
                                                       this.handleChanges("name", item)
                                                   }}
                                            />
                                            <input className={styles.input} name='price'
                                                   id='price'
                                                   type="text"
                                                   value={(this.state.thing === undefined) ? '' : this.state.thing.price}
                                                   placeholder="Price"
                                                   onClick={(item) => {
                                                       this.handleChanges("price", item)
                                                   }}
                                                   onChange={(item) => {
                                                       this.handleChanges("price", item)
                                                   }}
                                            />
                                            <div className={styles.file}>
                                                <input name="photo"
                                                       type="file"
                                                       placeholder="Фото"
                                                       className={styles.customFileInput}
                                                       onChange={(e) => this.onChange(e)}
                                                />
                                            </div>
                                            <textarea name='description'
                                                      id='description'
                                                      value={(this.state.thing === undefined) ? '' : this.state.thing.description}
                                                      placeholder={t('createShop.description')}
                                                      onClick={(item) => {
                                                          this.handleChanges("description", item)
                                                      }}
                                                      onChange={(item) => {
                                                          this.handleChanges("description", item)
                                                      }}
                                            />
                                            <div className={styles.category}>
                                                <p>Виберіть категорію</p>
                                                <div className={styles.typeB} onChange={this.setCategory.bind(this)}>
                                                    {
                                                        this.state.category === undefined
                                                            ? ''
                                                            : this.state.category.categories.map(el => {
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
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <button className={styles.btn}>
                                    {t('editProfile.save')}
                                </button>
                            </form>
                        </div>
                    }
                }
            </Translation>

        )
    }

}

export default withParams(EditAnnouncement);

