import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice" //it comes from cartSlice

// Add Slices in app store
const appStore = configureStore({
    //big Reducer containing small Reducers
    reducer : {
        cart: cartReducer
    }
});

export default appStore;