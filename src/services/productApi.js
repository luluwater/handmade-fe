// Step1:引入 createApi 和 fetchBaseQuery
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const userId = JSON.parse(localStorage.getItem('user'))?.user.id
// console.log('user', userData)
export const productApiService = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
  tagTypes: ['product'],
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: () => `product?userId=${userId}`,
      providesTags: ['product'],
    }),
    getProductDetail: builder.query({
      query: (productId) => `product/${productId}`,
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
  useAddUserFavoriteProductMutation,
  useRemoveUserFavoriteProductMutation,
} = productApiService
