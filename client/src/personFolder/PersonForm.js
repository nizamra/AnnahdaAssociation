import React, { useState, useContext } from 'react'
import {navigate} from '@reach/router'
import AuthService from '../services/Authservice';
import Message from './Message';
import AuthContext from '../context/AuthContext'

const PersonForm = props => {
    const authContext = useContext(AuthContext);
    const [person, setPerson] = useState({ username: "", password: "" });
    const [message, setMessage] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        setPerson({ username: username, passwd: password });
        AuthService.login({ username: username, passwd: password }).then(data => {
            const { isAuthenticated, message } = data;
            if (isAuthenticated) {
                authContext.setPerson(person);
                authContext.setIsAuthenticates(isAuthenticated);
                navigate('/');
            }
            else
                setMessage(message)
        })
            .catch(err => console.log(err))
        setUsername("");
        setPassword("");
    }
    return (
        <form onSubmit={onSubmitHandler}>
            {message ? <Message message={message} /> : null}
            <p>
                <label>User Name</label><br />
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

export default PersonForm;