import React from "react";
import "./signup.css";
import { GoogleLogin } from "react-google-login";

import { useDispatch, useSelector } from "react-redux";
import { signupItem } from "../data/reducers/user.reducer";
import { Redirect } from "react-router-dom";

function Signup() {
  const dispatch = useDispatch();
  const loggedIn=useSelector(state=>state.userReducer).loggedIn;
    const responseSuccessGoogle=async (response)=>{
      console.log(response);
      let payload={
        tokenId:response.tokenId
      }
      try{
        let googleSignupAPIResponse=await dispatch(signupItem(payload));
      }
      catch(err){
        console.log(err);
      }
    }
    const responseErrorGoogle=()=>{
    
    }
    if(loggedIn===true){
      return <Redirect to="/profile"></Redirect>
    }
  return (
    <div id="signup">
      <GoogleLogin
        clientId="875493409490-80hsnftvg2l3l6gnecc3r49nfuj8m6rr.apps.googleusercontent.com"
        buttonText="Signup With Google"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Signup;
