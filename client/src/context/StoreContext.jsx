import { createContext, useState } from "react";
import { useEffect } from "react";
import {toast} from 'react-toastify'
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {

    const url = 'http://localhost:8000';
    const [signupStatus, setSignupStatus] = useState(false);
    const [loginStatus, setLoginStatus] = useState(false);

    const [token, setToken] = useState("");

    const toggleLoginStatus = () => {
        setLoginStatus(!loginStatus);
        setSignupStatus(false);
    }

    const toggleSignupStatus = () => {
        setSignupStatus(!signupStatus);
        setLoginStatus(false);
    }

    const logoutFunction = () => {
        toast.success('Logout Successful');
        setToken("");
        localStorage.clear();
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }

    const contextValue = {
        url,
        token,
        setToken,
        signupStatus,
        setSignupStatus,
        loginStatus,
        setLoginStatus,
        toggleLoginStatus,
        toggleSignupStatus,
        logoutFunction
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;