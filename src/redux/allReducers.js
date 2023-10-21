import { productAPI } from "./slices/product-api-slice"
import productReducer from "./slices/productSlice"

export const reducerObj = {
    // Using Async Thunk
    product: productReducer,
    
    // Using RTK Query
    // [productAPI.reducerPath]: productAPI.reducer
}

