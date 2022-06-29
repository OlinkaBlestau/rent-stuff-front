import React, {Component} from 'react';
import styles from '../../css/Admin/EditShope.module.css'
import {useParams} from "react-router-dom";
import {fetchShop, fetchUser, updateShop, updateUser} from "../../api";
import {Translation} from "react-i18next";

function withParams(Component) {
    return props => <Component {...props} params={useParams()}/>;
}

class EditShop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: '',

        }
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {

        console.log(this.props.params.id)
        this.setState({id:this.props.params.id})
        fetchShop(this.props.params.id).then(resolve => {
            this.setState({shop: resolve.data})
        });

    }

    submit = async event => {
        event.preventDefault();
        let store = localStorage.getItem('authToken')
        let shop = {
            name: this.state.shop.name,
            email: this.state.shop.email,
            address: this.state.shop.address,
            longitude: this.state.shop.longitude,
            latitude: this.state.shop.latitude,
            phone: this.state.shop.phone,
            password: this.state.shop.password,
            description: this.state.shop.description,
        }
         await updateShop(this.state.id, shop, store);
         window.location.replace('/viewShop/')
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
            shop: {
                ...prevState.shop,
                [fieldString]: value.target.value
            }
        }));
    }

    changePassword = event => {
        let state = this.state;
        state.password = event.target.value
        this.setState(state)
    }


    render() {

        return (
            <Translation>
                {
                    (t, {i18n}) => {
                        return <div className={styles.wrapper}>
                            <h1>{t('editShop.titleShopEdit')}</h1>
                            <form onSubmit={this.submit} encType="multipart/form-data">
                                <div>
                                    <div>
                                        <div className="name">
                                            <input className={styles.input} name='name'
                                                   id='name'
                                                   type="text"
                                                   value={(this.state.shop === undefined) ? '' : this.state.shop.name}
                                                   placeholder={t('editShop.name')}
                                                   onClick={(item) => {
                                                       this.handleChanges("name", item)
                                                   }}
                                                   onChange={(item) => {
                                                       this.handleChanges("name", item)
                                                   }}
                                            />
                                            <input className={styles.input} name='email'
                                                   id='email'
                                                   type="text"
                                                   value={(this.state.shop === undefined) ? '' : this.state.shop.email}
                                                   placeholder={t('editShop.email')}
                                                   onClick={(item) => {
                                                       this.handleChanges("email", item)
                                                   }}
                                                   onChange={(item) => {
                                                       this.handleChanges("email", item)
                                                   }}
                                            />
                                            <input className={styles.input} name='phone'
                                                   id='phone'
                                                   type="text"
                                                   value={(this.state.shop === undefined) ? '' : this.state.shop.phone}
                                                   placeholder={t('editShop.phone')}
                                                   onClick={(item) => {
                                                       this.handleChanges("phone", item)
                                                   }}
                                                   onChange={(item) => {
                                                       this.handleChanges("phone", item)
                                                   }}
                                            />
                                            <input className={styles.input} name='address'
                                                   id='address'
                                                   type="text"
                                                   value={(this.state.shop === undefined) ? '' : this.state.shop.address}
                                                   placeholder={t('editShop.address')}
                                                   onClick={(item) => {
                                                       this.handleChanges("address", item)
                                                   }}
                                                   onChange={(item) => {
                                                       this.handleChanges("address", item)
                                                   }}
                                            />
                                            <input className={styles.input} name='longitude'
                                                   id='longitude'
                                                   type="text"
                                                   value={(this.state.shop === undefined) ? '' : this.state.shop.longitude}
                                                   placeholder={t('editShop.longitude')}
                                                   onClick={(item) => {
                                                       this.handleChanges("longitude", item)
                                                   }}
                                                   onChange={(item) => {
                                                       this.handleChanges("longitude", item)
                                                   }}
                                            />
                                            <input className={styles.input} name='latitude'
                                                   id='latitude'
                                                   type="text"
                                                   value={(this.state.shop === undefined) ? '' : this.state.shop.latitude}
                                                   placeholder={t('editShop.latitude')}
                                                   onClick={(item) => {
                                                       this.handleChanges("latitude", item)
                                                   }}
                                                   onChange={(item) => {
                                                       this.handleChanges("latitude", item)
                                                   }}
                                            />

                                            <textarea name='description'
                                                      id='description'
                                                      value={(this.state.shop === undefined) ? '' : this.state.shop.description}
                                                      placeholder={t('createShop.description')}
                                                      onClick={(item) => {
                                                          this.handleChanges("description", item)
                                                      }}
                                                      onChange={(item) => {
                                                          this.handleChanges("description", item)
                                                      }}
                                            />

                                            <input className={styles.password} name='password'
                                                   id='password'
                                                   type="text"
                                                   value={this.state.password}
                                                   placeholder={t('editProfile.password')}
                                                   onChange={this.changePassword}
                                            />

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

export default withParams(EditShop);


