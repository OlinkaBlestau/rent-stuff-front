import './App.css';
import React, {useEffect, useState} from "react";
import {Routes, Route,} from 'react-router-dom';
import Header from "./components/Headers/HeaderUnauthorized";
import Authorization from "./components/Auth/Authorization";
import Registration from "./components/Auth/Registration";
import ChangeUser from "./components/User/ChangeUser";
import ProfileUser from "./components/User/ProfileUser";
import ProfileAdmin from "./components/Admin/ProfileAdmin";
import CreateAnnouncement from "./components/Admin/CreateAnnouncement";
import HeaderAdmin from "./components/Headers/HeaderAdmin";
import HeaderUser from "./components/Headers/HeaderUser";
import Home from "./components/Home/Home";
import Announcement from "./components/Admin/Announcement";
import CreateShop from "./components/Admin/CreateShop";


function App() {
    const [storage, setStorage] = useState([])
    const [role, setRole] = useState([])


    useEffect(() => {
        let store = localStorage.getItem('authToken')
        let role = localStorage.getItem('role')
        setStorage(store)
        setRole(role)

    }, [])


    return (
        <div>
            {
                storage === null && role !== undefined
                    ? <Header/>
                    : (role === 'admin' ? <HeaderAdmin/> : <HeaderUser/>)
            }
            <Routes>
                <Route path="/changeUser/" element={
                    storage === null
                        ? <Authorization/>
                        : <ChangeUser/>
                }/>

                <Route path="/profileUser/" element={
                    storage === null
                        ? <Authorization/>
                        : <ProfileUser/>
                }/>

                <Route path="/createAnnouncement/" element={
                    storage === null
                        ? <Authorization/>
                        : <CreateAnnouncement/>
                }/>

                <Route path="/createShop/" element={
                    storage === null
                        ? <Authorization/>
                        : <CreateShop/>
                }/>

                <Route path="/adminAnnouncement/" element={
                    storage === null
                        ? <Authorization/>
                        : <Announcement/>
                }/>

                <Route path='/' element={<Home/>}/>

                <Route path='/login' element={<Authorization/>}/>
                <Route path='/register' element={<Registration/>}/>
                <Route path='/profileAdmin' element={<ProfileAdmin/>}/>
            </Routes>
        </div>
    );
}

export default App;
