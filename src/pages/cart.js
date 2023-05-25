import cartItems from "../component/cartItems";
import React from 'react';
import { Link } from 'react-router-dom';


const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>{item.name}</div>
            <div>{item.qty}</div>
            <div>${item.price.toFixed(2)}</div>
          </li>
        ))}
      </ul>
      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
