import { createContext,useState, useEffect } from "react";
import axios from 'axios';
import { Navigate } from "react-router-dom";
// const navigate = useNavigate();

export const AuthContext = createContext();

export const AdminAuthContextProvider = ({children}) => {
    const [currentAdmin, setCurrentAdmin] = useState(JSON.parse(localStorage.getItem('admin')) || null);

    const login = async (inputs) => {
        const res = await axios.post('http://localhost:5000/api/adminlogin', inputs);
        setCurrentAdmin(res.data);
    };

    const logout = async () => {
        
        await axios.post('http://localhost:5000/api/adminlogout',{});
        setCurrentAdmin(null);
    };


    useEffect( () => {
        localStorage.setItem('admin',JSON.stringify(currentAdmin));
        setLoading(false);
    },[currentAdmin])
    
    
    const [loading, setLoading] = useState(true);

    if (loading) {
        return null;
    }

    return(
        <AuthContext.Provider value={{currentAdmin,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}