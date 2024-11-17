import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLogin: !!localStorage.getItem("token"),
        role: 0, // admin will have this role as 1
    },
    reducers: {
        login(state) {
            state.isLogin = true;
        },
        logout(state) {
            state.isLogin = false;
            state.role = 0; 
        },
        setRole(state, action) {
            state.role = action.payload; 
        },
    },
});

export const authActions = authSlice.actions;
export const store = configureStore({
    reducer: authSlice.reducer,
});

export default store;
