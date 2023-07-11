import React, { useContext } from "react";
import { ShopContext, ShopContextValue } from "../ShoppingCart/ShopContext";
import { Product } from "../../../interfaces/Products";

interface CartItemProps {
  data: Product;
}

export const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const { productsId, companyName, product, email, price, campaignName, quantity } = data;
  const shopContext = useContext(ShopContext) as ShopContextValue;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = shopContext;

  return (
    <div className="cartItem">
      <img src={""} alt="" />
      <div className="description">
        <p>
          <b>{product}</b>
        </p>
        <p>
          <b>{companyName}</b>
        </p>
        <p>{email}</p>
        <p>{campaignName}</p>
        <p>{quantity}</p>
        <p>Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(productsId)}>-</button>
          <input
            type="number"
            value={cartItems[productsId] || 0}
            onChange={(e) => updateCartItemCount(Number(e.target.value), productsId)}
          />
          <button onClick={() => addToCart(productsId)}>+</button>
        </div>
      </div>
    </div>
  );
};
