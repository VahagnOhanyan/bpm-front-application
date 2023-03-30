import {AuthProvider} from "../auth/AuthProvider";
import {Route, Router, Routes} from "react-router";
import {Switch} from "@mui/material";
import {Login} from "../pages/login/Login"
import {SignUp} from "../pages/signUp/SingUp";
import ResponsiveDrawer from "./DrawerHeader";

function App() {
    return (
        <>
            {/* <ResponsiveDrawer/>*/}
            <AuthProvider>
                <Routes>
                    <Route exact path="/*" element={<Login/>}/>
                    <Route exact path="/signUp" element={<SignUp/>}/>
                </Routes>
            </AuthProvider>
        </>
    );

}

export default App;