import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Reducers/CartReducer";

const store =configureStore({
    reducer:{
        cart:cartReducer,
    }
});

export default store;