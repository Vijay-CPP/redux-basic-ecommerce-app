import { productAPI } from "./slices/product-api-slice";

export const allMiddlewares = (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productAPI.middleware)
}