import cartItems from "../component/cartItems";
import React from 'react';

const Checkout = () => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  
  return (
    <div>
      <h1>Checkout</h1>
      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" />
        </label>
        <br />
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default Checkout;
