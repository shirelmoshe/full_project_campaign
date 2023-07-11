import React, { useState, createContext } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { Product } from '../interfaces/Products';
import { CartBadge } from '../pages/Products/CartBadge';
import "./RootLayout.css"

const CartContext = createContext<{
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});





export const RootLayout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter((item) => item.productsId !== productId));
  };

  return (
    <>
      <div style={{ marginTop: '50rem' }}>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/campaign">Campaign</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <Link to="/cart">
                <CartBadge />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
          <Outlet />
        </CartContext.Provider>
      </main>
    </>
  );
};

export default RootLayout;
