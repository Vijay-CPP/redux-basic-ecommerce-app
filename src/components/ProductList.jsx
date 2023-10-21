import React from "react";
// RTY Query
import { useGetAllProductsQuery } from "../redux/slices/product-api-slice";
import Loader from "./Loader";
import Product from "./Product";

// Async Thunk
import { useDispatch, useSelector } from "react-redux";
// import { getAllProducts, getProduct } from "../redux/slices/productSlice";

const ProductList = () => {
  // Using RTK Query
  const { data, isLoading, error, isSuccess } = useGetAllProductsQuery();


  // Using AsyncThunk
  // const dispatch = useDispatch();
  // dispatch(getAllProducts())
  // const data = useSelector((state) => {
  //   console.log(state)
  //   return state.products
  // })
  // const pending = useSelector((state) => state.pending)

  return (
    <div>
      {isLoading ? <Loader /> : ""}
      {error && (
        <h1 className="text-center text-2xl text-red-600 font-bold">
          {error.error}
        </h1>
      )}

      <div className="flex flex-wrap gap-y-4 gap-x-1 w-[95%] mx-auto">
        {isSuccess
          ? data.map((ele, idx) => {
              return <Product key={idx} data={ele} />;
            })
          : ""}
      </div>
    </div>
  );
};

export default ProductList;
