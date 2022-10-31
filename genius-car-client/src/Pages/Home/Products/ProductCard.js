import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { name, img, price } = product;
  return (
    <div className="border rounded-lg p-4 text-center">
      <div className="bg-red-100 flex items-center justify-center">
        <img src={img} alt="" className="mb-10 h-48" />
      </div>
      <div className="text-center py-10">
        <p className="flex justify-center text-center block text-orange-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </p>
        <h2 className="text-3xl my-3">{name}</h2>
        <p className="text-orange-600 text-xl font-bold">Price: ${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
