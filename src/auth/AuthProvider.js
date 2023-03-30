import React, {createContext, useContext, useState, useEffect} from "react";
import jwt_decode from "jwt-decode";


const AuthContext = createContext('');

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        // Check if there's a JWT token stored in localStorage
        const token = localStorage.getItem("token");
        if (token) {
            // Send a request to the backend to verify the JWT token
            fetch("/bpm/login", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.user) {
                        setUser(data.user);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    const logIn = async (login, password) => {
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
            setUser(decodedToken.user);
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
    };

    return <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
