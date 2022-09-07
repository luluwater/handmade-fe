// Step1:引入 createApi 和 fetchBaseQuery
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApiService = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
  tagTypes: ['product'],
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: () => 'product',
      providesTags: ['product'],
    }),
    getProductDetail: builder.query({
      query: (productId) => `product/${productId}`,
      providesTags: ['product'],
    }),
    addUserFavoriteProduct: builder.mutation({
      query: (productId) => ({
        url: `product/${productId}`,
        method: 'POST',
        body: productId,
      }),
      invalidatesTags: ['product'],
    }),
    removeUserFavoriteProduct:builder.mutation({
      query: (productId) => ({
        url: `product/${productId}`,
        method: 'DELETE',
        body: productId,
      }),
      invalidatesTags: ['product'],
    })
  }),
})

export const {
  useGetProductListQuery,
  useGetProductDetailQuery,
  useAddUserFavoriteProductMutation,
  useRemoveUserFavoriteProductMutation
} = productApiService
