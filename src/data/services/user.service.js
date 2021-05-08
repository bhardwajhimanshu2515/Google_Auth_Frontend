import { api, post} from "./services.common";

export const signupAPI = async (userlogin) => {
    console.log("userlogin=",userlogin);
    //another path e.g.
    let url = `${api}/googleSignup`
    return await post(url, userlogin)
}

export const loginAPI = async (userlogin) => {
    console.log("userlogin=",userlogin);
    //another path e.g.
    let url = `${api}/googleLogin`
    return await post(url, userlogin)
}