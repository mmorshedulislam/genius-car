import React from "react";
import { FaStar } from "react-icons/fa";

const ProductItem = ({ product }) => {
  const { name, img, price } = product;
  return (
    <div className="border rounded-lg p-10 text-center">
      <img src={img} alt="" className="mb-10 h-48" />
      <div className="text-center">
        <p className="flex text-center block text-orange-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </p>
        <h2 className="text-3xl">{name}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
