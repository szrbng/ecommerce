import React from 'react'

import ProductsData from '../../data/data'
import Product from './product'

const Shop = () => {
  return (
<div className='p-8 justify-center text-center'>
<div class="grid grid-cols-4 gap-4">

        
{ProductsData.map((data)=>(

       <Product data={data} />
))} 

</div>
    </div>
  )
}

export default Shop
