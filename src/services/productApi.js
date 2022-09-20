// Step1:引入 createApi 和 fetchBaseQuery
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../utils/config'
const userId = JSON.parse(localStorage.getItem('user'))?.user.id
// console.log('user', userData)
export const productApiService = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['product'],
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: () => `product?userId=${userId}`,
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
      query: (productId, storeId, categoryId) => ({
        url: `product/${productId}?userId=${userId}`,
        method: 'POST',
        body: productId,
        storeId,
        categoryId,
      }),
      invalidatesTags: ['product'],
    }),
    removeUserFavoriteProduct: builder.mutation({
      query: (productId) => ({
        url: `product/${productId}?userId=${userId}`,
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
