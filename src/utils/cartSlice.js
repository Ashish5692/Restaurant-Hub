import { createSlice } from "@reduxjs/toolkit";

//when we do createSlice , this function will return an object in cartSlice.
const cartSlice = createSlice({
    name: 'cart',
    //initial value in Redux store
    //initialState is an object and it will have cart items and initially giving it empty array.
    initialState: {
        items:[],
    },
    //Reducer is an object which have different type of actions we can take.
    //Creating reducer function corresponding to each action
    //This reducer function actually modifies the data inside the slice by getting access to state and action.
    //It will modify the state based on action
    reducers:{
        // we will pass some data in these reducer function (action)
        addItem: (state, action) =>{
            //diretly modifying or mutating our state here
            state.items.push(action.payload);  // when we will call add item we will get payload
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0; // state as empty array []
        },
    },
});

//CartSlice object will have actions and this action will have addItem etc,.. and reducers

//actions
export const {addItem, removeItem, clearCart} = cartSlice.actions;

//reducers
export default cartSlice.reducer;