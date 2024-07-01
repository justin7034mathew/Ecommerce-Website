import React from 'react'
import './Shop.css'
import { PRODUCTS } from '../../products'
import Product from './Product'
 
export const Shop = () => {
  // console.log(PRODUCTS);
  return (
    <div className='shop'>
      <div className="shopTitle">
        <h1>JUSTIN SHOP</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product, key) => {
          return(
            <Product key={key} data={product}/>
          )
        })}
      </div>
    </div>
  )
}
