import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../redux/slices/product-api-slice";
import Loader from "./Loader";

// import { useDispatch, useSelector } from "react-redux";
// import { getProduct } from "../redux/slices/productSlice";
const ProductView = () => {
  const { id } = useParams();

  // Using RTK Query
  const { data, isLoading, error, isSuccess } = useGetProductQuery(id);

  // Using AsyncThunk
  // const dispatch = useDispatch();
  // dispatch(getProduct(id));
  // const data = useSelector((state) => state.selectedProduct);

  return (
    <div>
      {isLoading ? <Loader /> : ""}
      {error && (
        <h1 className="text-center text-2xl text-red-600 font-bold">
          {error.error}
        </h1>
      )}
      {isSuccess ? (
        <div className="w-[95%] bg-white mx-auto flex flex-col justify-between gap-y-3 p-3 rounded-md">
          <img src={data.image} className="w-[75%] mx-auto m-3" alt="" />
          <h1 className="text-violet-900 text-4xl">{data.title}</h1>
          <p className="text-lg">{data.description}</p>
          <h2 className="font-bold text-3xl text-slate-700">$ {data.price}</h2>
          <h3 className="text-xl">Rating : {data.rating.rate} / 5.0 ⭐</h3>
          <h3 className="text-xl">Items Left : {data.rating.count}</h3>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductView;
