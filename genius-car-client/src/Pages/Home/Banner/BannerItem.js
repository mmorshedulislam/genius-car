import React from "react";
import './BannerItem.css'

const BannerItem = ({ slide }) => {
  const { id, image, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img-gradient">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform text-white -translate-y-1/4 left-24 top-1/4">
        <h1 className="text-6xl font-bold">
          Affordable <br />
          Price For Car <br />
          Servicing
        </h1>
      </div>
      <div className="absolute flex justify-end transform text-white w-2/5 -translate-y-1/4 left-24 top-1/2">
        <p className="text-xl text-white">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start transform text-white w-2/5 -translate-y-1/4 left-24 top-3/4">
        <button className="btn btn-warning mr-5">Warning</button>
        <button className="btn btn-outline btn-warning">Warning</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mx-4">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle mx-4">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
