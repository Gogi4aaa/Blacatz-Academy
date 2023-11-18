import React from 'react';
import './Menu.css'
import Contacts from './Contacts';
export default function Menu(props) {
    return (
        <>
            <nav className='menu'>
                <ul>
                    {props.objects.map(object => <li><a href={object.link}>{object.label}</a></li>)}
                </ul>
            </nav>
        </>
    );
}