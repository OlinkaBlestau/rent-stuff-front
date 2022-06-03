import React from 'react';
import styles from '../../css/Headers/HeaderUnathorized.module.css'
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";

const dropA = {
    position: 'relative',
    top: '-10px',
    right: '20px',

}

const HeaderUnauthorized = () => {
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
                                <a href={"/"}>Головна</a>
                                <a href={"/login"}>Увійти</a>
                            </div>
                            <div className={styles.droplist}>
                                <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" style={dropA} href="#" id="navbarDropdown" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Ua
                                    </a>
                                    <ul className="dropdown-menu" id = "lang" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Ua</a></li>
                                        <li><a className="dropdown-item" href="#">En</a></li>
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
