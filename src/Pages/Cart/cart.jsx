import React from 'react'
import {useSelector,useDispatch } from 'react-redux'
import CartItem from './cart-item';
import './cart.css';
import { useNavigate } from "react-router-dom";
import { cleanCart } from '../../Redux/Features/cartSlice';
import Popup from 'reactjs-popup';



const Cart = () => {
  const cart = useSelector((state)=> state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
   
  let total = 0;
  cart.cartItems?.map(item=>{
    total += (item.quantity * item.price)

    return total;
  })

  const handleCheckout=(e)=>{
    e.preventDefault();

    dispatch(cleanCart());

    navigate("/checkout");
  }

  const PopupExample = () => (
    <Popup trigger={<button>Trigger</button>} position="top left">
      {close => (
        <div>
          Content here
          <a className="close" onClick={close}>
            &times;
          </a>
        </div>
      )}
    </Popup>
  );


  return (
    <div class="container mx-auto mt-10">
    <div class="flex shadow-md my-10">
      <div class="w-3/4 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">
            {cart.cartItems.length === 0 ? (
              <p>Empty ProductList</p>
            ):(cart.cartItems.length)} 
            </h2>
        </div>
       
        {cart.cartItems.length === 0 ? (
           <h1 className='text-center mt-5'>Your cart is currently empty</h1>
        ):(
         <div>
         <div className="flex mt-10 mb-5">
             <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
             <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
             <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
             <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
          </div>

           {cart.cartItems?.map(cartitem=>(
            <CartItem cartItem={cartitem} />
           ))}

         
       </div>
        )
        
        }
       
        

        <a onClick={()=> navigate("/shop")} class="flex font-semibold text-indigo-600 text-sm mt-10">
          <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </a>
      </div>

      <div id="summary" class="w-1/4 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm uppercase">Items {cart.cartItems.length}</span>
          <span class="font-semibold text-sm">${total}</span>
        </div>
        <div>
          <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select class="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div class="py-10">
          <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full" />
        </div>
        <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>${total + 10}</span>
          </div>
          <button onClick={(e)=> handleCheckout(e)}  class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Cart
