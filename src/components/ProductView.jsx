import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../redux/slices/product-api-slice";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/slices/productSlice";
const ProductView = () => {
  const { id } = useParams();

  // Using RTK Query
  // const { data, isLoading, error, isSuccess } = useGetProductQuery(id);

  // Using AsyncThunk
  // const dispatch = useDispatch();
  // dispatch(getProduct(id));
  // const data = useSelector((state) => state.selectedProduct);

  return <div></div>;
};

export default ProductView;
