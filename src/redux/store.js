import { configureStore } from "@reduxjs/toolkit";
import themesReducer from "./slices/themes";

export const store = configureStore({
    reducer:{
        themesStore: themesReducer
    }
})