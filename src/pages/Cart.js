import React, { useContext } from 'react'
import { PRODUCTS } from '../showproduct'
import  { HomeContext } from '../context/home-context'
import { CartItem } from './cart-item'
import './Cart.css'

const Cart = () => {
    const { cartItems } = useContext(HomeContext)

  return (
    <div className='cart'>
        <div>
            <h1>
                Your Cart Items
            </h1>
        </div>
        <div className='cartItems'>
            {PRODUCTS.map((product) =>{
                if (cartItems[product.id] !== 0){
                    return <CartItem data={product} />
                }
            })}
        </div>
    </div>
  )
}

export default Cart
