import React, {useState} from 'react';
import Menu from './menu/menu';
import Home from '../pages/home/home';
import Footer from './footer/footer';
export default function App(){
    

    return(
        <div>
            <Menu/>
            <Home/>
            <Footer/>
        </div>
    )
}