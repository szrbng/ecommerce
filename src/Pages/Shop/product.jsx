import React from 'react'
import './shop.css'
import {useDispatch} from 'react-redux'
import { addtoCart } from '../../Redux/Features/cartSlice'

const Product = ({data}) => {

  const dispatch = useDispatch();

  const handleaddTocart=(data)=>{
    dispatch(addtoCart(data));
  }

  return (
    <div class="p-4 bg-white border border-slate-900 rounded-sm shadow-md dark:bg-gray-800 dark:border-gray-700">
       
        <img id='imgg' class="visible relative rounded-lg w-96 h-96 scale-75 hover:scale-100 ease-in duration-500  " src={data.image} alt="" />
        
        
    <div class="mx-auto">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${data.price}</p>
        <a onClick={()=> handleaddTocart(data)} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           + Add To Cart
            
        </a>
        |
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
         WishList
            
        </a>
    </div>
</div>
  )
}

export default Product;
