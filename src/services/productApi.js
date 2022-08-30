// Step1:引入 createApi 和 fetchBaseQuery
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApiService = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: () => 'product',
    }),
    getProductDetail: builder.query({
      query: (productId) => `product/${productId}`,
    }),
  }),
})

export const { useGetProductListQuery, useGetProductDetailQuery } =
  productApiService
