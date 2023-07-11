import React, { createContext, useState } from "react";
import { useProduct } from "../../../../services/apiProduct";
import { Product } from "../../../interfaces/Products";

export interface ShopContextValue {
  cartItems: { [id: number]: number };
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
  getTotalCartAmount: () => number;
  checkout: () => void;
  totalQuantity: number;
}

export const ShopContext = createContext<ShopContextValue | null>(null);

export const ShopContextProvider: React.FC = ({ children }) => {
  const [cartItems, setCartItems] = useState<{ [id: number]: number }>({});
  const { data: products = [], isLoading, error } = useProduct();

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = products.find((product) => product.productsId === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) - 1 }));
  };

  const updateCartItemCount = (newAmount: number, itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems({});
  };

  const totalQuantity = Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);

  const contextValue: ShopContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    checkout,
    totalQuantity,
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};
