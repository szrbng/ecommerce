import {createSlice } from '@reduxjs/toolkit';

const initialState ={
    cartItems:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity:0,
    cartTotalAmount:0,

};

export const cartReducer = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addtoCart:(state,action) =>{
            const itemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id);
            if(itemIndex >= 0 )
            {
                state.cartItems[itemIndex].quantity += 1;
                
            }
            else{
               const tempProduct = {...action.payload,quantity:1};
               state.cartItems.push(tempProduct);
            }

            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
            
        },

        removefromCart:(state,action)=>{
         const nextCartItems =  state.cartItems.filter(cartitem => cartitem.id !== action.payload.id);

         state.cartItems = nextCartItems;

       
        },

        decreaseCart(state,action)
        {
            const itemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id);

            if(state.cartItems[itemIndex].quantity > 1)
            {
                state.cartItems[itemIndex].quantity -=1
            }
            else if(state.cartItems[itemIndex].quantity === 1)
            {
                 const nextCartItems =  state.cartItems.filter(cartitem => cartitem.id !== action.payload.id);
                 state.cartItems = nextCartItems;
            }

            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },

        cleanCart(state,action){
            state.cartItems=[];
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },

        subTotalAmount(state,action){
            let total = 0;

            state.cartItems.map(cartitem=>{

                total += (cartitem.quantity) * (cartitem.price)

                return total;
            }

            )
        }
        
    }
});

export const {addtoCart,removefromCart,decreaseCart,cleanCart,subTotalAmount} = cartReducer.actions;

export default cartReducer.reducer;