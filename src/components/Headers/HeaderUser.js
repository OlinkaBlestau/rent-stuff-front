import React, {useEffect, useState} from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom';
import styles from '../../css/Headers/HeaderUnathorized.module.css'
import {useTranslation} from "react-i18next";


const HeaderUser = () => {
    const {t, i18n} = useTranslation();

    function setLocale(locale, event) {
        event.preventDefault();
        i18n.changeLanguage(locale).then(
            localStorage.setItem('locale', locale)
        );
    }

    const [id, setId] = useState('')
    const exit = () => {
        localStorage.removeItem('id')
        localStorage.removeItem('role')
        localStorage.removeItem("authToken");
        localStorage.removeItem("authTokenDate");
        window.location.replace('/');
    }

    useEffect(() => {
        let store = localStorage.getItem('id')
        setId(store)
    }, [])

    const dropA = {
        position: 'relative',
        top: '-10px',
    }


    return (
        <div className={styles.wrapper}>
            <Navbar bg="#FFE552" expand="lg">
                <Container fluid>
                    <nav className={styles.logo} href="#">RentStuff</nav>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{maxHeight: '100px'}}
                        >
                        </Nav>
                        <Form className="d-flex">
                            <div className={styles.links}>
                                <Link to={'/homeUser/' + id}>{t('userHeader.main')}</Link>
                                <div className={styles.droplist}>
                                    <div className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" style={dropA} href="#"
                                           id="navbarDropdown" role="button"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            {t('adminHeader.profile')}
                                        </a>
                                        <ul className="dropdown-menu" id="lang" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item"
                                                   href={"/profileUser"}>{t('userHeader.myProfile')}</a></li>
                                            {/*<li><a className="dropdown-item"*/}
                                            {/*       href="#">{t('userHeader.supportServices')}</a></li>*/}
                                        </ul>
                                    </div>
                                </div>
                                <a href={"/"} onClick={exit}>{t('userHeader.logOut')}</a>
                                <div className={styles.droplist}>
                                    <div className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" style={dropA} href="#"
                                           id="navbarDropdown" role="button"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            {
                                                localStorage.getItem('locale') === 'uk'
                                                    ? 'Ua'
                                                    : "En"
                                            }
                                        </a>
                                        <ul className="dropdown-menu" id="lang" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item"
                                                   onClick={event => setLocale('uk', event)}>Ua</a></li>
                                            <li><a className="dropdown-item"
                                                   onClick={event => setLocale('en', event)}>En</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderUser;