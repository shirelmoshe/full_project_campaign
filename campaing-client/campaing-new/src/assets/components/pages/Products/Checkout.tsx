import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from './ShoppingCart/ShopContext';

const Checkout = () => {
  const shopContext = useContext(ShopContext);
  const cartItems = shopContext?.cartItems || {}; // Add a null check for cartItems
  const checkout = shopContext?.checkout || (() => {}); // Add a null check for checkout
  const navigate = useNavigate();

  const handleCheckout = () => {
    checkout();
    navigate('/confirmation');
  };
  console.log(cartItems)

  return (
    <div>
      <h1>Checkout</h1>

      <h2>Purchased Products:</h2>
      <ul>
        {Object.entries(cartItems).map(([productId, quantity]) => (
          <li key={productId}>
            Product ID: {productId} - Quantity: {quantity}
          </li>
        ))}
      </ul>

      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Checkout;
