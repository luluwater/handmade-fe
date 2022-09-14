// Step1:引入 createApi 和 fetchBaseQuery
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../utils/config'

export const productApiService = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['product'],
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: () => 'product',
      providesTags: ['product'],
    }),
    getProductDetail: builder.query({
      query: (productId) => `product/detail/${productId}`,
      providesTags: ['product'],
    }),
    getProductComment: builder.query({
      query: (productId) => `product/comment/${productId}`,
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
    removeUserFavoriteProduct: builder.mutation({
      query: (productId) => ({
        url: `product/${productId}`,
        method: 'DELETE',
        body: productId,
      }),
      invalidatesTags: ['product'],
    }),
  }),
})

export const {
  useGetProductListQuery,
  useGetProductDetailQuery,
  useGetProductCommentQuery,
  useAddUserFavoriteProductMutation,
  useRemoveUserFavoriteProductMutation,
} = productApiService
