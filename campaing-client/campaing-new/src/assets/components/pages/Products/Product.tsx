import React, { useContext } from "react";
import { Product } from "../../interfaces/Products";
import { ShopContext } from "./ShoppingCart/ShopContext";


interface ProductItemProps {
  product: Product;
  addToCart: (product: Product) => void;
}

export const ProductItem: React.FC<ProductItemProps> = ({ product, addToCart }) => {
  const { productsId, companyName, product: productName, price, campaignName, quantity } = product;
  const { cartItems } = useContext(ShopContext) ?? {};
  const cartItemCount = cartItems?.[productsId];

  const handleAddToCart = () => {
    
    addToCart(product);
  };

  return (
    <div className="product">
      <div className="description">
        <p>
          <b>Product Name:</b> {productName}
        </p>
        <p>
          <b>Company Name:</b> {companyName}
        </p>
        <p>
          <b>Campaign Name:</b> {campaignName}
        </p>
        <p>
          <b>Quantity:</b> {quantity}
        </p>
        <p>
          <b>Price:</b> ${price}
        </p>
      </div>
      <button className="addToCartButton" onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
};
