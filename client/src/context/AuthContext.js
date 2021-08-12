import React, {createContext, useState, useEffect} from 'react';
import AuthService from '../services/Authservice';

export const AuthContext = createContext();

// eslint-disable-next-line
export default ({children})=>{
    const [person, setPerson] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isloaded, setIsloaded] = useState(false);
    
    // useEffect(()=>{
    //     AuthService.isAuthenticated().then(data=>{
    //         setPerson(data.person);
    //         setIsAuthenticated(data.isAuthenticated);
    //         setIsloaded(true);

    //     });
    // },[]);

    return(
        <div>
            {!isloaded ? <h1>Loading...</h1> :
            <AuthContext.Provider value={{person,setPerson, isAuthenticated, setIsAuthenticated}}>
                {children}
            </AuthContext.Provider> }
        </div>
    )

}