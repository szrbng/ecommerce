import React from 'react'
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {addtoCart, cleanCart, decreaseCart, removefromCart} from '../../Redux/Features/cartSlice'

const CartItem = ({cartItem}) => {

  const cart = useSelector((state)=> state.shop);
  const dispatch = useDispatch();
  
  const handleremovefromcart=(cartitem)=>{
      dispatch(removefromCart(cartitem));
  }
  const handledecreaseCart=(cartitem)=>
  {
      dispatch(decreaseCart(cartitem));
  }

  const handleIncreaseCart=(cartitem)=>{
    dispatch(addtoCart(cartitem));
  }

  const handleclearfromcart=()=>{
      dispatch(cleanCart());
  }

  return (
   
       <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5"> 
            <div class="w-20">
              <img class="h-24" src={cartItem.image} alt="" />
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">{cartItem.name}</span>
              <span class="text-red-500 text-xs">Apple</span>
              <a onClick={()=> handleremovefromcart(cartItem)} href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
              <a onClick={()=> handleclearfromcart()} href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Clear Cart</a>
            </div>
          </div>
          <div class="flex justify-center w-1/5">
            <button onClick={()=> handledecreaseCart(cartItem)}><i class="fa fa-minus-circle" aria-hidden="true"></i></button>

            <input key={cartItem.id}  class="mx-2 border text-center w-8" type="text" value={cartItem.quantity} />

            <button onClick={()=> handleIncreaseCart(cartItem)}><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
          </div>
          <span class="text-center w-1/5 font-semibold text-sm">${cartItem.price}</span>
          <span class="text-center w-1/5 font-semibold text-sm">${cartItem.price * cartItem.quantity}</span>
        </div>
    
  )
}

export default CartItem
