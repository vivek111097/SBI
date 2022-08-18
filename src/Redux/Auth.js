import { createSlice, current } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = {
    user:{}
};

const auth_slice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {

        SAVE_USER:(state, action)=>{
            let newUser = Object.assign({}, action.payload);
            
            return {
                ...state,
                user:newUser
            }
        },

        LOGOUT_USER:(state,action)=>{
            return {
                ...state,
                user:{}
            }
        }
    },
});

export const {
    SAVE_USER,
    LOGOUT_USER
} = auth_slice.actions;
export default auth_slice.reducer;
