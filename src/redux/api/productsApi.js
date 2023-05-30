import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getProductById: builder.query({
      query: ( id ) => `/products/${id}`,
    }),
    getCategories: builder.query({
      query: () => "/products/categories",
    }),
    getCategoryByName: builder.query({
      query: (category) => `/products/category/${category}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery, useGetCategoriesQuery, useGetCategoryByNameQuery } = productsApi;
