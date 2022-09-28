import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../utils/config'
const userId = JSON.parse(localStorage.getItem('user'))?.user.id

export const userApiService = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    createCoupon: builder.mutation({
      query: (userId) => ({
        url: `user/${userId}/get-coupon`,
        method: 'put',
      }),
      invalidatesTags: ['User'],
    }),
    createCourseComment: builder.mutation({
      query: (data) => ({
        url: `user/course-orders/comment`,
        method: 'put',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
    createProductComment: builder.mutation({
      query: (data) => ({
        url: `user/product-orders/comment`,
        method: 'put',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
    getUser: builder.query({
      query: (userId) => `user/${userId}`,
      providesTags: ['User'],
    }),
    getAvatar: builder.query({
      query: () => `user/avatar/img`,
      providesTags: ['User'],
    }),
    updatePassword: builder.mutation({
      query: (data) => ({
        url: `/user/password`,
        method: 'put',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
    updateUserAccount: builder.mutation({
      query: (data) => ({
        url: `/user/account`,
        method: 'put',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
    updateUserAvatar: builder.mutation({
      query: (data) => ({
        url: `/user/avatar`,
        method: 'put',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
    getUserCourseOrders: builder.query({
      query: (userId) => `user/${userId}/course-orders`,
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
      query: (userId) => `user/${userId}/product-orders`,
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
      query: (userId) => `user/${userId}/coupons`,
      providesTags: ['User'],
    }),
    userLikesCourse: builder.query({
      query: (userId) => `user/${userId}/likes-course`,
      providesTags: ['User'],
    }),
    removeUserPageFavoriteCourse: builder.mutation({
      query: (courseId) => ({
        url: `course/${courseId}?userId=${userId}`,
        method: 'DELETE',
        body: courseId,
      }),
      invalidatesTags: ['User'],
    }),
    userLikesProduct: builder.query({
      query: (userId) => `user/${userId}/likes-product`,
      providesTags: ['User'],
    }),
    removeUserPageFavoriteProduct: builder.mutation({
      query: (productId) => ({
        url: `product/${productId}?userId=${userId}`,
        method: 'delete',
        body: productId,
      }),
      invalidatesTags: ['User'],
    }),
    getUserBlog: builder.query({
      query: (userId) => `user/${userId}/blog`,
      providesTags: ['User'],
    }),
    deleteBlog: builder.mutation({
      query: (blogId) => ({
        url: `blog/${blogId}`,
        method: 'delete',
        body: blogId,
      }),
      invalidatesTags: ['User'],
    }),
    hideBlog: builder.mutation({
      query: (blogId) => ({
        url: `blog/${blogId}/hide`,
        method: 'put',
        body: blogId,
      }),
      invalidatesTags: ['User'],
    }),
    showBlog: builder.mutation({
      query: (blogId) => ({
        url: `blog/${blogId}/show`,
        method: 'put',
        body: blogId,
      }),
      invalidatesTags: ['User'],
    }),
    // userLikesBlog: builder.query({
    //   query: () => 'user/likes-blog',
    //   providesTags: ['User'],
    // }),
  }),
})

export const {
  useCreateCouponMutation,
  useCreateCourseCommentMutation,
  useCreateProductCommentMutation,
  useUpdatePasswordMutation,
  useUpdateUserAccountMutation,
  useUpdateUserAvatarMutation,
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
  useRemoveUserPageFavoriteProductMutation,
  useRemoveUserPageFavoriteCourseMutation,
  useGetUserBlogQuery,
  useDeleteBlogMutation,
  useHideBlogMutation,
  useShowBlogMutation,
  useGetAvatarQuery,
  // useRemoveUserFavoriteProductOnNewsMutation,
} = userApiService
