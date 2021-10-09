import React from "react";
import "../skelton/skelton-loading.scss";
const SkeltonLoading = ({ products }) => {
  return (
    <div className="continer">
      {products.map((product) => (
        <div key={product.id} className="product-sk-loading"></div>
      ))}
    </div>
  );
};

export default SkeltonLoading;
