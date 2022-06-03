import React, {useEffect, useState} from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom';
import styles from '../../css/Headers/HeaderUnathorized.module.css'



const HeaderAdmin = () => {
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
                                <Link to={'/user/home/' + id}>Главная</Link>
                                <a href={"/adminAnnouncement"}>Оголошення</a>
                                <div className={styles.droplist}>
                                    <div className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" style={dropA} href="#" id="navbarDropdown" role="button"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            Профіль
                                        </a>
                                        <ul className="dropdown-menu" id = "lang" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href={"/profileAdmin"}>Мій профіль</a></li>
                                            <li><a className="dropdown-item" href={"/adminAnnouncement"}>Мої оголошення</a></li>
                                            <li><a className="dropdown-item" href="#">Статистика</a></li>
                                            <li><a className="dropdown-item" href="#">Повідомлення</a></li>
                                            <li><a className="dropdown-item" href="#">Служба підтримки</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <a href={"/"} onClick={exit}>Выход</a>
                            </div>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderAdmin;