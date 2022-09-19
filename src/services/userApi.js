import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../utils/config'

export const userApiService = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    //read
    getUser: builder.query({
      query: () => 'user',
      providesTags: ['User'],
    }),
    //update
    // updateUser: builder.mutation({
    //   query: (userId) => ({
    //     url: `user`,
    //     method: 'put',
    //     body: userId,
    //   }),
    //   invalidatesTags: ['User']
    // }),
    getUserProductOrders: builder.query({
      query: () => 'user/product-orders',
      providesTags: ['User'],
    }),
    userLikesCourse: builder.query({
      query: () => 'user/likes-course',
      providesTags: ['User'],
    }),
    userLikesProduct: builder.query({
      query: () => 'user/likes-product',
      providesTags: ['User'],
    }),
  }),
})

export const {
  useGetUserQuery,
  useGetUserProductOrdersQuery,
  useUserLikesCourseQuery,
  useUserLikesProductQuery,
} = userApiService
