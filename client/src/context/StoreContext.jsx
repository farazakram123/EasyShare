import { createContext, useState } from "react";
import { useEffect } from "react";
import {toast} from 'react-toastify'

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {

    const url = 'http://localhost:8000';
    const [loginSuccess, setLoginSuccess] = useState(false);
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
        setLoginSuccess(false);
    }

    useEffect(() => {

    }, [])

    const contextValue = {
        url,
        token,
        setToken,
        signupStatus,
        setSignupStatus,
        loginStatus,
        setLoginStatus,
        loginSuccess,
        setLoginSuccess,
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