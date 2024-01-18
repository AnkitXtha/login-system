import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { login } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";
import loginReducer from "../redux/loginSlice"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: 'root',
    version: 1,
    storage
};

export const rootReducer = combineReducers({
    user: loginReducer,
    [login.reducerPath] : login.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(login.middleware),
})

setupListeners(store.dispatch);