import React from "react";
import { Link } from "react-router-dom";

const Product = ({ data }) => {
  const id = data.id;
  const title = data.title.slice(0, 20) + "...";
  const price = data.price;
  const imgSrc = data.image;

  return (
    <div className="w-[45%] mx-auto bg-white p-[15px] rounded-md text-lg">
      <Link to={`/product/${id}`}>
        <div>
          <img
            src={imgSrc}
            alt=""
            className="rounded-md w-[80%] mx-auto mb-5"
          />
          <h1 className="text-violet-700 font-bold mb-2">{title}</h1>
          <h1 className="text-slate-700 text-2xl font-bold">$ {price}</h1>
        </div>
      </Link>
    </div>
  );
};

export default Product;
