import React, {useState} from "react"
import './menu.css';
export default function Menu() {
    const [display, setDisplay] = useState('none');
    return(
        <div>
            <div>
                <button type="button" onClick={()=>{
                    if(display == 'none'){
                        setDisplay('block');
                    }
                    else{
                        setDisplay('none');
                    }
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
            </div>
            <div>
                <ul className="menu-view" style={{display: display}}>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About Us</a>
                    </li>
                    <li>
                        <a>Contacts</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}