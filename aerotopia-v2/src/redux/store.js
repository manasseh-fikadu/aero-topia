import {
    createSlice,
    createAsyncThunk,
    combineReducers,
    configureStore,
  } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import axios from "../util/axios";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const persistConfig = {
    key: "root",
    storage,
};
  
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
});
export const persistor = persistStore(store);
export default store;