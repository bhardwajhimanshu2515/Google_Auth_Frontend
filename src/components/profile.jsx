import React from "react";
import "./profile.css";
import {useSelector} from "react-redux"
import { Redirect } from "react-router-dom";
function Profile(){
    const loggedIn=useSelector(state=>state.userReducer).loggedIn;
    if(loggedIn===false){
        return <Redirect to="/login"></Redirect>
    }
    return <div id="profile">Welcome to main page</div>
}

export default Profile;