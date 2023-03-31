import React, {createContext, useContext, useState, useEffect} from "react";
import jwt_decode from "jwt-decode";


const AuthContext = createContext('');

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    useEffect(() => {
        // Check if there's a JWT token stored in localStorage
        const jwt = localStorage.getItem("token");
        if (jwt) {
            // Send a request to the backend to verify the JWT token
            fetch("/bpm/login", {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    if (data.user) {
                        setUser(data.user);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    const logIn = async (login, password, navigate) => {
        try {
            const res = await fetch("/bpm/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({login, password}),
            });
            const data = await res.text();
            localStorage.setItem("token", data);
            const decodedToken = jwt_decode(data);
            console.log(decodedToken)
            setToken(localStorage.getItem("token"))
            setUser(decodedToken.user);
            navigate(-1);
        } catch (err) {
            console.log(err);
        }
    };
    const signUp = async (login, password, firstName, lastName, role, privileges, telegramId) => {
        try {
            const res = await fetch("/bpm/admin/users/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({login, password, firstName, lastName, role, privileges, telegramId}),
            });
            const data = await res.text();
            localStorage.setItem("token", data);
            const decodedToken = jwt_decode(data);
            console.log(decodedToken)
            setUser(decodedToken.user);
        } catch (err) {
            console.log(err);
        }
    };

    const logOut = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    const authValues = {
        logIn,
        signUp,
        logOut,
        token
    };

    return <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
