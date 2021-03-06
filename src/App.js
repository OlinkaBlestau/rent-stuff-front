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
import i18n from "./i18n";
import HomeAdmin from "./components/Admin/HomeAdmin";
import HomeUser from "./components/User/HomeUser";
import ViewShop from "./components/Admin/ViewShop";
import EditShop from "./components/Admin/EditShop";
import EditAnnouncement from "./components/Admin/EditAnnouncement";
import AllAnnouncement from "./components/Admin/AllAnnouncement";
import FullInfoAnnouncement from "./components/Admin/FullInfoAnnouncement";
import Statistics from "./components/Admin/Statistics";
import Rented from "./components/Admin/Rented";

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
                    : (role === 'landlord' ? <HeaderAdmin/> : <HeaderUser/>)
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

                <Route path="/homeAdmin/:id" element={
                    storage === null
                        ? <Authorization/>
                        : <HomeAdmin/>
                }/>

                <Route path="/homeUser/:id" element={
                    storage === null
                        ? <Authorization/>
                        : <HomeUser/>
                }/>

                <Route path="/viewShop/" element={
                    storage === null
                        ? <Authorization/>
                        : <ViewShop/>
                }/>

                <Route path="/editShop/:id" element={
                    storage === null
                        ? <Authorization/>
                        : <EditShop/>
                }/>

                <Route path="/editAnnouncement/:id" element={
                    storage === null
                        ? <Authorization/>
                        : <EditAnnouncement/>
                }/>

                <Route path="/allAnnouncement/" element={
                    storage === null
                        ? <Authorization/>
                        : <AllAnnouncement/>
                }/>

                <Route path="/fullInfoAnnouncement/:id" element={
                    storage === null
                        ? <Authorization/>
                        : <FullInfoAnnouncement/>
                }/>

                <Route path="/statistics/" element={
                    storage === null
                        ? <Authorization/>
                        : <Statistics/>
                }/>

                <Route path="/rented/" element={
                    storage === null
                        ? <Authorization/>
                        : <Rented/>
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
