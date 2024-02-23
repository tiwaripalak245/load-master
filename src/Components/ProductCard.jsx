import React from "react";

const ProductCard = ({ product }) => {
  return (
<>
<div className="product-card" style={{ width: "18rem" }}>
      <img src={product.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h2>{product.title}</h2>
        {/* <p className="card-text">{product.description}</p> */}
        <span>
          <h4>Price: {product.price}</h4>
          <h5>Rating: {product.rating}</h5>
        </span>
        <button>Add to cart</button>
      </div>
    </div>
</>
  );
};

export default ProductCard;
