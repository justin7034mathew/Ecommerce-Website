import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../contexts/Shop-contexts";
import CartItems from "./CartItems";
import { useNavigate } from "react-router-dom";
import "./Cart.css"

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()

  return (
    <div className="cart">
        <h1>Your Cart Items</h1>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems data={product} />;
          }
        })}
      </div>
    {totalAmount > 0 ? (
      <div className="checkout">
        <p>Subtotal :${totalAmount}</p>
        <button onClick={() => navigate("/")}>Continue Shoppig</button>
        <button>Checkout</button>
      </div>
    ) : (
      <h1>Your Cart is Empty</h1>
    )} 
    </div>
  );
};
