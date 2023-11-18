import React, { useRef, useState } from 'react';
export default function LoginForm()
{
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
function handleSubmit(event)
{
    event.preventDefault();
    setUsername(usernameRef.current.value);
    setPassword(passwordRef.current.value);
}

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >Username:</label>
                    <input type='text' name='username' ref={usernameRef}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type='password' name='password' ref={passwordRef}/>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
            <p>UsernameRef: {username}</p>
            <p>PasswordRef: {password}</p>
        </div>
    )
}