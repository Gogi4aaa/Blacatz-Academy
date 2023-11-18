import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Form from "../components/Form";
import Details from "../pages/Details";
import View from "../components/View";
export default function RouteSettings()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={ <Home /> }/>
                <Route path="/add" element={ <Form /> } />
                <Route path="/edit/:id" element={ <Form /> } />
                <Route path="/details" element={ <Details />} />
                <Route path="/view/:id" element={<View />} />
            </Routes>
        </BrowserRouter>
    )
}