
import React, { useContext } from "react";
import { ShopContext } from "./ShoppingCart/ShopContext";
import { ShoppingCart } from "phosphor-react";

export const CartBadge = () => {
  const { totalQuantity } = useContext(ShopContext) ?? {};

  return (<div><ShoppingCart size={32} /><span className="cart-badge">{totalQuantity}</span></div>)
}
