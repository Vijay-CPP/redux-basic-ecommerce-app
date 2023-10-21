import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productAPI = createApi({
    reducerPath: 'product',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `products`
        }),
        getProduct: builder.query({
            query: (id) => `products/${id}`
        })
    }),
});

export const {
    useGetAllProductsQuery,
    useGetProductQuery
} = productAPI;