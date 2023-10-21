import React from "react";
import { useGetAllProductsQuery } from "../redux/slices/product-api-slice";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getProduct } from "../redux/slices/productSlice";

const ProductList = () => {
  // Using RTK Query
  // const {data, isLoading, error} = useGetAllProductsQuery();

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
    </div>
  );
};

export default ProductList;
