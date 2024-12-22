import React, { useContext } from "react";
import { HomeContext } from "../context/home-context";
import './Cart.css'

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(HomeContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt="product pic"/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: Rs.{price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};