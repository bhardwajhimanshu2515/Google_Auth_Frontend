import React from "react";
import "./header.css";
import {NavLink} from "react-router-dom"
import {useSelector} from "react-redux"
function Header(){
    const loggedIn=useSelector(state=>state.userReducer).loggedIn;
    if(loggedIn===true){
        return(
            <div id="header">
                <div id="logo">
                    Google Auth Project
                </div>
                <div id="links">
                    <NavLink to="/login">Logout</NavLink>
                </div>
            </div>
        )
    }
    return(
        <div id="header">
            <div id="logo">
                Google Auth Project
            </div>
            <div id="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/signup">Signup</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </div>
    )
}

export default Header;