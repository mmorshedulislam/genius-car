import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="py-10">
      <div className="text-center my-14 w-1/2 mx-auto">
        <h2 className="text-xl text-orange-600">Popular Products</h2>
        <h2 className="text-5xl font-bold my-3">Browse Our Products</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductItem key={product.id} product={product}></ProductItem>
        ))}
      </div>
      <div className="w-48 mx-auto my-10">
        <button className="py-3 px-4 font-bold bg-orange-500 text-white rounded">More Products</button>
      </div>
    </div>
  );
};

export default Products;
