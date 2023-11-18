import React from "react";
import './Menu.css'
import { Route, Routes, Link } from "react-router-dom";
import FirstPage from "./FirstPage";
import About from './About';
import Contacts from './Contacts';
export default function Menu(){
    return(
        <>
            <div className="menu">
                <ul>
                    <li><a><Link to="/">Home</Link></a></li>
                    <li><a><Link to="/about">About</Link></a></li>
                    <li><a><Link to="/contacts">Contacts</Link></a></li>
                </ul>
            </div>
            <Routes>
                <Route path='/' exact/>
                <Route path='about' element={<About />}/>
                <Route path='contacts' element={<Contacts />}/>
            </Routes>
        </>
    )
}