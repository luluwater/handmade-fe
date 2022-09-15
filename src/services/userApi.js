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
    getUserCourseOrders: builder.query({
      query: () => 'user/course-orders',
      providesTags: ['User'],
    }),
    getUserCourseOrderDetails: builder.query({
      query: (orderNumber) => `user/course-orders/${orderNumber}`,
      providesTags: ['User'],
    }),
    courseOrderDetails: builder.query({
      query: (orderNumber) => `user/course-orders/${orderNumber}/details`,
      providesTags: ['User'],
    }),
    courseOrderPay: builder.query({
      query: (orderNumber) => `user/course-orders/${orderNumber}/details/pay`,
      providesTags: ['User'],
    }),
    getUserProductOrders: builder.query({
      query: () => 'user/product-orders',
      providesTags: ['User'],
    }),
    getUserProductOrderDetails: builder.query({
      query: (orderNumber) => `user/product-orders/${orderNumber}`,
      providesTags: ['User'],
    }),
    productOrderDetails: builder.query({
      query: (orderNumber) => `user/product-orders/${orderNumber}/details`,
      providesTags: ['User'],
    }),
    productOrderPay: builder.query({
      query: (orderNumber) => `user/product-orders/${orderNumber}/details/pay`,
      providesTags: ['User'],
    }),
    getUserCoupons: builder.query({
      query: () => 'user/coupons',
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
    userLikesBlog: builder.query({
      query: () => 'user/likes-blog',
      providesTags: ['User'],
    }),
  }),
})

export const {
  useGetUserQuery,
  useGetUserProductOrdersQuery,
  useGetUserProductOrderDetailsQuery,
  useProductOrderDetailsQuery,
  useProductOrderPayQuery,
  useGetUserCourseOrdersQuery,
  useGetUserCourseOrderDetailsQuery,
  useCourseOrderDetailsQuery,
  useCourseOrderPayQuery,
  useGetUserCouponsQuery,
  useUserLikesCourseQuery,
  useUserLikesProductQuery,
  useUserLikesBlogQuery,
} = userApiService
