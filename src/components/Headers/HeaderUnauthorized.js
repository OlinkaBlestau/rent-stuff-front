import React from 'react';
import styles from '../../css/Headers/HeaderUnathorized.module.css'
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {logDOM} from "@testing-library/react";

const dropA = {
    position: 'relative',
    top: '-10px',
    right: '20px',

}

const HeaderUnauthorized = () => {
    const { t, i18n } = useTranslation();

    function setLocale(locale, event) {
        event.preventDefault();
        i18n.changeLanguage(locale).then(
            localStorage.setItem('locale', locale)
        );
    }

    return (
        <div className={styles.wrapper}>
            <Navbar>
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
                                {/*<a href={"/register"}>Регистрация</a>*/}
                                <a href={"/"}>{t('unauth_header.main')}</a>
                                <a href={"/login"}>{t('unauth_header.login')}</a>
                            </div>
                            <div className={styles.droplist}>
                                <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" style={dropA} href="#" id="navbarDropdown" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        {
                                            localStorage.getItem('locale') === 'uk'
                                                ? 'Ua'
                                                : "En"
                                        }
                                    </a>
                                    <ul className="dropdown-menu" id = "lang" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" onClick={event => setLocale('uk', event)}>Ua</a></li>
                                        <li><a className="dropdown-item" onClick={event => setLocale('en', event)}>En</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
);
};

export default HeaderUnauthorized;
