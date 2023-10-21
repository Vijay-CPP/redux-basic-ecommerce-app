import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  selectedProduct: {}
}

export const getProduct = createAsyncThunk(
  'product/getProduct',
  async (productId, thunkAPI) => {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    return data;
  }
);

export const getAllProducts = createAsyncThunk(
  'product/getAllProduct',
  async (thunkAPI) => {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products`
    );
    return data;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // setProducts: (state, action) => {

    // },
    // selectedProduct: (state, action) => {

    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.fulfilled, (state, action) => {
        console.log(action.payload)
        state.selectedProduct = action.payload;
        state.pending = false;
      })
      .addCase(getProduct.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.pending = false;
      })
      .addCase(getAllProducts.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.error = action.error;
      });
  }
})

export default productSlice.reducer;
// export const { setProduct, selectedProduct } = productSlice.actions; 