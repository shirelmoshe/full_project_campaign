import React, { useContext } from 'react';
import { ShopContext } from '../ShoppingCart/ShopContext';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../../../../services/apiProduct';
import { Product } from '../../../interfaces/Products';
import { CartItem } from './CartItem';

const Cart = () => {
  const shopContext = useContext(ShopContext);
  const cartItems = shopContext?.cartItems || {}; // Add a null check for cartItems
  const getTotalCartAmount = shopContext?.getTotalCartAmount || (() => 0); // Add a null check for getTotalCartAmount
  const checkout = shopContext?.checkout || (() => {}); // Add a null check for checkout
  const navigate = useNavigate();

  const handleCheckout = () => {
    checkout();
    navigate('/checkout');
  };

  const { data = [], isLoading, error } = useProduct();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const getProductById = (productId: number): Product | undefined => {
    return data.find((product: Product) => product.productsId === productId);
  };

  const totalAmount = getTotalCartAmount();

  const totalQuantity = Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {Object.entries(cartItems).map(([productId, quantity]) => {
          const product = getProductById(parseInt(productId));
          if (product && quantity > 0) {
            return <CartItem key={product.productsId} data={product} quantity={quantity} />;
          }
          return null;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}

      <div className="cartQuantity">{totalQuantity}</div>
    </div>
  );
};

export default Cart;
