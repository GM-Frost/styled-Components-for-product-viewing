import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productAPI = createApi({
  reducerPath: "restProductAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products`,
    }),
    getAllProductDetails: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery,useGetAllProductDetailsQuery } = productAPI;
