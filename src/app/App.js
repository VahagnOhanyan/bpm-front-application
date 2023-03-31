import {AuthProvider} from "../auth/AuthProvider";
import {Route, Routes} from "react-router";
import {Login} from "../pages/login/Login"
import {SignUp} from "../pages/signUp/SingUp";
import Users from "../pages/users/Users";
import ParsingHistory from "../pages/parsinghistory/ParsingHistory";
import Subscriptions from "../pages/subscriptions/Subscriptions";
import Pages from "../pages/pages/Pages";
import React, {useState} from "react";
import {Redirect, useNavigate} from 'react-router-dom';
import {AppBar, MenuItem} from "@mui/material";

function App() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const token = localStorage.getItem("token");
    const handleClick = (path) => {

        if (!token) {
            setIsAuthenticated(false);
            navigate("/");
        } else {
            navigate(path);
        }
    };
    return (
        <>
            <AuthProvider>
                <MenuItem onClick={() => handleClick('/users')}>Users</MenuItem>
                <MenuItem onClick={() => handleClick('/pages')}>Sites</MenuItem>
                <MenuItem onClick={() => handleClick('/subscriptions')}>Subscriptions</MenuItem>
                <MenuItem onClick={() => handleClick('/parsing-history')}>Parsing History</MenuItem>
                <Routes>
                    <Route exact path="/users" element={<Users/>}/>
                    <Route exact path="/pages" element={<Pages/>}/>
                    <Route exact path="/subscriptions" element={<Subscriptions/>}/>
                    <Route exact path="/parsing-history" element={<ParsingHistory/>}/>
                    <Route exact path="/" element={<Login navigate={navigate}/>}/>
                    <Route exact path="/signUp" element={<SignUp/>}/>
                </Routes>
            </AuthProvider>
        </>
    );

}

export default App;