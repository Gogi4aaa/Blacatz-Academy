import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../components/SPA-App/Home";
import ForUs from "../components/SPA-App/ForUs";
import Contacts from "../components/SPA-App/Contacts";

export default function RouteSettings()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="for-us" element={<ForUs/>} />
                <Route path="contacts" element={<Contacts />} />
            </Routes>
        </BrowserRouter>
    )
}