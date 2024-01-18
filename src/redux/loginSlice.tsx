import { createSlice } from "@reduxjs/toolkit"

export interface userState{
    name: string | null,
    token: string | null,
    id: number | null,
    email: string | null
}

const initialState: userState={
    name: null,
    token: null,
    id: null,
    email: null
}

const loginSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: ((state, action) => {
            state.name = action.payload.name;
            state.token = action.payload.token;
            state.email = action.payload.email;
            state.id = action.payload.id;
        }),
        logout: ((state) => {
            localStorage.removeItem('persist:root');
            state.name = null;
            state.token = null;
            state.email = null;
            state.id = null;
        })
    }
})

export const {setUser, logout} = loginSlice.actions;
export default loginSlice.reducer