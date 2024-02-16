import { createSlice,configureStore } from "@reduxjs/toolkit";

import { userSlice } from "./createSlice";





const store = configureStore({
   reducer:{ 
    user:userSlice.reducer
   }
})

export const {updateFullname}=userSlice.actions

export default store