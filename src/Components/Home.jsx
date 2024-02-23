import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import '../Style/style.css'

const Home = () => {
  const [loading, SetLoading] = useState(false);
  const [products, SetProducts] = useState([]);
  const [count, SetCount] = useState(0);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const data = await response.json();
      if (data && data.products && data.products.length) {
        SetProducts((prev) => [...prev, ...data.products])
        SetLoading(false)
      }
    } catch (error) {
      console.log(error);
      SetLoading(false)
    }
  };

  if (loading) {
    <h1 className="dispay-5 text-align-center">Loading Products...</h1>
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  return (
    <>
      <div className="main-container">
{
    products.map((product) => <ProductCard key={product.id} product={product}/>)
}
      </div>
      <button  className="add-cart" onClick={() => SetCount(count+1)}>Load More Products</button>
    </>
  );
};

export default Home;
