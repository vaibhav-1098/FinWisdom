import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   user:JSON.parse(localStorage.getItem("user")) || false,
   isApplied:JSON.parse(localStorage.getItem("applied")) || false,
}


export const authSlice = createSlice({
    name:"auth",
    initialState,

    reducers:{
        userExist:(state)=>{
            state.user = true;
            localStorage.setItem("user", JSON.stringify(true));
        },
        userNotExist:(state)=>{
            state.user = false;
            localStorage.setItem("user", JSON.stringify(false));
        },

        userApplied:(state)=>{
            state.isApplied = true;
            localStorage.setItem("applied", JSON.stringify(true));
        },
        userNotApplied:(state)=>{
            state.isApplied = false;
            localStorage.setItem("applied", JSON.stringify(false));
        }
    }

})


export const {userExist,userNotExist,userApplied,userNotApplied} = authSlice.actions

export default authSlice.reducer;








