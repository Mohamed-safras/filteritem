import React from "react";
import "./styles/product.scss";
const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="image">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="product-name">
        <h4>{product.name}</h4>
      </div>
      <div className="product-price">
        <h4>${product.price}</h4>
      </div>
    </div>
  );
};

export default Product;
