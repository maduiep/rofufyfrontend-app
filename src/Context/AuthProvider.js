import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const localStorageKey = 'rodufy';
    let authValue = {};
    let authStatusValue = false;

    let localStorageValue = localStorage.getItem(localStorageKey);
    if(localStorageValue !== null){
        localStorageValue = JSON.parse(localStorageValue);
        authValue = localStorageValue.auth;
        authStatusValue = localStorageValue.authStatus;
    }

    const [auth, setAuth] = useState(authValue)
    const [authStatus, setAuthStatus] = useState(authStatusValue);

    let mainDataBase = {auth:auth, authStatus:authStatus};

    const setTheLogout = () => {
        localStorage.removeItem(localStorageKey);
        let newValue = mainDataBase;
        setAuthStatus(false);
        // let valueToSave = {...mainDataBase, auth:newValue};
        // localStorage.setItem(localStorageKey, JSON.stringify(valueToSave));
    }

    const authValueSaver = (value) => {
        let newValue = value;
        setAuth(newValue);
        let localStorageValue = localStorage.getItem(localStorageKey);
        let valueToSave = {...mainDataBase, auth:newValue};
        if(localStorageValue !== null){
            localStorageValue = JSON.parse(localStorageValue);
            valueToSave = {...localStorageValue, auth:newValue};
        }
        
        localStorage.setItem(localStorageKey, JSON.stringify(valueToSave))
    }

    const authStatusSetter = ()=> {
        let newValue = authStatus === false ? true:false;
        setAuthStatus(newValue);
        let localStorageValue = localStorage.getItem(localStorageKey);
        let valueToSave = {...mainDataBase, authStatus:newValue};
        if(localStorageValue !== null){
            localStorageValue = JSON.parse(localStorageValue);
            valueToSave = {...localStorageValue, authStatus:newValue};
        }
        
        localStorage.setItem(localStorageKey, JSON.stringify(valueToSave))
    }

    return ( 
        <AuthContext.Provider value={{ auth, setTheLogout, authValueSaver, authStatusSetter, authStatus }} > 
        { children } 
        </AuthContext.Provider>
    )
}

export default AuthProvider;