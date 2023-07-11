import React from "react";
import { ShopContextProvider } from "./ShopContext";
import Cart from "../Cart/Cart";

const ShoppingCart = () => {
  return (
    <ShopContextProvider>
      <Cart />
    </ShopContextProvider>
  );
};

export default ShoppingCart;
