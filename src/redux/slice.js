import { createSlice } from "@reduxjs/toolkit"

const initialState={
   items:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],

};
export const AddCart=createSlice({
    name:"cart",
        initialState,
        reducers:{
        addItem:(state,action) => { 
           // state.value += 1;
           console.log(action.payload);
           state.items.push(action.payload);
           localStorage.setItem("cartItems",JSON.stringify(state.items));
        },
        
        removeItem:(state, action) => { 
            const cartData=state.items.filter(item=>item.id !== action.payload.id);
            state.items=cartData;
            localStorage.setItem("cartItems",JSON.stringify(state.items));
           // state.value -= 1;
          
        },
        
        clearAllItems:(state) => { 
            state.items=[];
        },
    }
});
export const {addItem,removeItem,clearAllItems}=AddCart.actions;
export default AddCart.reducer;
    