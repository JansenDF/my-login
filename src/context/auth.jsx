import React, { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();

    const [ user, setUser ] = useState(null);
    
    const login = (email, password) => {
        console.log('login auth', {email, password})
        if(email === 'teste@gmail.com' && password === 'secreta'){
            setUser({id: '123', email})
            navigate("/")
        }
    }
    const logout = () => {
        console.log('logout')
        setUser(null);
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}