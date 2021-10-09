import React from "react";
import Product from "./Product";
import "./styles/products.scss";

const Products = ({ filterProduct }) => {
  return (
    <div className="products">
      {filterProduct.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
