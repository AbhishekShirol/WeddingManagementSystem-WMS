import { createContext,useState, useEffect } from "react";
import axios from 'axios';


export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const login = async (inputs) => {
        const res = await axios.post('http://localhost:5000/api/user/userlogin', inputs);
        setCurrentUser(res.data);
    };


    const logout = async () => {
        
        await axios.post('http://localhost:5000/api/user/userlogout',{});
        setCurrentUser(null);
    };


    useEffect( () => {
        localStorage.setItem('user',JSON.stringify(currentUser));
        setLoading(false);
    },[currentUser])
    
    
    const [loading, setLoading] = useState(true);

    if (loading) {
        return null;
    }

    return(
        <AuthContext.Provider value={{currentUser,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}