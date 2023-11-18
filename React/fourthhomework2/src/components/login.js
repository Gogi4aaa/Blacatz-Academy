import React, { useState } from "react";
export default function Login(props){
    const email = "gogi@abv.bg";
    const password = "1234"
    const[isEmailCorrect, setIsEmailCorrect] = useState(false);
    const[isPasswordCorrect, setIsPasswordCorrect] = useState(false);
    return(
        <div>
            <div>
                <label>Email:</label>
                <input onInput={(e)=>{
                    if(e.target.value == email){
                        setIsEmailCorrect(true)
                        props.isEmailCorrect(isEmailCorrect)
                    }
                }} type="email"/>
            </div>
            <div>
                <label>Password:</label>
                <input onInput={(e)=>{
                    if(e.target.value == password){
                        setIsPasswordCorrect(true)
                        props.isPasswordCorrect(isPasswordCorrect)
                    }
                }} type="password"/>
            </div>
        </div>
    )
}