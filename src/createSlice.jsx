import { createSlice } from "@reduxjs/toolkit";

const data={
    fullName:"",
    mobile:""
}


export const userSlice =createSlice({
    name:"user",
    initialState:data,
    reducers:{
        updateFullname:(state,action)=>{
                 state.fullName = action.fullName;
        }
    }
});