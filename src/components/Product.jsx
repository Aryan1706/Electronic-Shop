import React, { useContext } from 'react'
import { HomeContext } from '../context/home-context'

const Product = (props) => {
  const {id, productName, price, productImage} = props.data;
  const { addToCart, cartItems} = useContext(HomeContext)

  const cartItemAmount = cartItems[id]
  return (
    <div className='product'>
        <img src={productImage} alt='Product Image' />
        <div className='description'>
          <p>
            <b>{productName}</b>
          </p>
          <p>
            Rs.{price}
          </p>
        </div>
        <button className='addToCartBttn' onClick={()=>addToCart(id)}>
          Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
    </div>
  )
}

export default Product