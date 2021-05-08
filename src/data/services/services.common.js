import axios from 'axios';
import { constants } from "../../config";

export const api = constants.endpoint
console.log(api);
export const error = (error) => { return { status: "error", isSuccessful: false, message: error }}
export const success = (data) => { return { status: "success", isSuccessful: true, data: data }}


export const post = async (url, data, headers) => {
    try {
        console.log("this is url=",url);
        let response = await axios.post(url, data, { headers })
        return success(response.data)
    }
    catch (e) {
        console.log(e)
        return error(e)
    }
}




