import React, { useState, useRef, useEffect } from 'react';
import AuthService from '../services/Authservice';
import {navigate} from '@reach/router'
import Message from './Message';

const Register = props => {
    const [message, setMessage] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let timerID = useRef(null);

    useEffect(()=>{
        return ()=>{
            clearTimeout(timerID);
        }},[]);

    const onSubmitHandler = e => {
        e.preventDefault();
        AuthService.register({ username: username, passwd: password, role:"admin" }).then(data => {
            const {message} = data;
            setMessage(message);
            setUsername("");
            setPassword("");
            if (!message.msgError) {
                timerID=setTimeout(()=>{
                    navigate('/');
                },2000)
            }
        });
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <h2>Regester Here</h2>
            {message ? <Message message={message}/> : null}
            <p>
                <label>User name</label><br />
                <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username} />
            </p>
            <p>
                <label>Password</label><br />
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} />
            </p>
            <input type="submit" />
        </form>
    )
}

export default Register;