import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {signupAPI,loginAPI} from "../services/user.service";

export const signupItem = createAsyncThunk(
    'user/signupItem',
    async (payload, thunkAPI) => {
        console.log("payload=",payload)
        let response = await signupAPI(payload);
        console.log("response=", response);
        if (response.isSuccessful === true) {
            return response.data
        }
        else thunkAPI.rejectWithValue('network call failed');
    }
)

export const loginItem = createAsyncThunk(
    'user/loginItem',
    async (payload, thunkAPI) => {
        console.log("payload=",payload)
        let response = await loginAPI(payload);
        console.log("response=", response);
        if (response.isSuccessful === true) {
            return response.data
        }
        else thunkAPI.rejectWithValue('network call failed');
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: [
        ],
        loggedIn: false
    },
    reducers: {
        logoutFunction: (state, action) => {
            
        }
    },
    extraReducers: {
        [signupItem.fulfilled]: (state, action) => {
            console.log("action=",action.payload);
            if (action.payload.token) {
                state.userInfo = [action.payload];
                let updateConnector = true;
                state.loggedIn = updateConnector;
                localStorage.setItem('loggedIn', state.loggedIn);
            }
            else{
                state.loggedIn=false;
            }
        },
        [loginItem.fulfilled]: (state, action) => {
            console.log("action=",action.payload);
            if (action.payload.token) {
                state.userInfo = [action.payload];
                let updateConnector = true;
                state.loggedIn = updateConnector;
                localStorage.setItem('loggedIn', state.loggedIn);
            }
            else{
                state.loggedIn=false;
            }
        }
    }
});
export const { logoutFunction } = userSlice.actions;
export default userSlice.reducer;