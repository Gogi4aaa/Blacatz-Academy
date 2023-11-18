import React from "react";
import { Link } from "react-router-dom";
export default function Header(){
    const MENU_ITEMS = [
        {link: "/", title: "Home"},
        {link: "/add", title: "Add Event"},
        {link: "/details", title: "Details"},
    ]
    return(
        <nav style={{backgroundColor: "gray"}} className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-center align-items-center">  
            <ul className="nav">
                <li>
                    {
                        MENU_ITEMS.map((i, index) =>
                            <Link key={index} className="text-white navbar-brand" to={i.link}>
                                {i.title}
                            </Link>)
                    }
                </li>
            </ul>
        </nav>
    )
}