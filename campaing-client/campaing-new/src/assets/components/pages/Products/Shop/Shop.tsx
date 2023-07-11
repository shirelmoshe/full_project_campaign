import React, { useContext, useState } from "react";
import { ProductItem } from "../Product";
import { useProduct } from "../../../../services/apiProduct";
import "./Shop.css";
import { Product } from "../../../interfaces/Products";
import { ShopContext } from "../ShoppingCart/ShopContext";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const Shop = () => {
   
        const { data = [], isLoading, error } = useProduct();
        const { addToCart } = useContext(ShopContext) ?? {};
      
        const handleAddToCart = (product: Product) => {
          if (addToCart) {
            addToCart(product.productsId);
          }
        };
      
        if (isLoading) {
          return <div>Loading...</div>;
        }
      
        if (error) {
          return <div>Error: {error.message}</div>;
        }
      
        return (
          <div className="shop">
            <div className="shopTitle">
              <h1>PedroTech Shop</h1>
            </div>
      
            <div className="products">
              {data.map((product) => (
                <ProductItem
                  key={product.productsId}
                  product={product}
                  addToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        );
      };
      
      export default Shop;
      
