import { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebaseConfig";

export const AuthContext = createContext({});

const authRef = auth;

export const Auth = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userStorage = window.localStorage.getItem("@User");

        if (userStorage) {
            setUser(JSON.parse(userStorage));
        } else {
            setUser(null);
        }

    }, []);

    


    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
};
