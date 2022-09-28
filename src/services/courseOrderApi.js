import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { API_URL } from '../utils/config'

export const courseOrderApiService = createApi({
  reducerPath: 'CourseOrderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['CourseOrder'],
  endpoints: (builder) => ({
    getCourseOrderDetail: builder.query({
      query: (orderId) => `order/course/${orderId}`,
      providesTags: ['CourseOrder'],
    }),
    createCourseOrder: builder.mutation({
      query: (CourseOrder) => ({
        url: 'order/course',
        method: 'POST',
        body: CourseOrder,
      }),
      invalidatesTags: ['CourseOrder'],
    }),
  }),
})

export const { useCreateCourseOrderMutation, useGetCourseOrderDetailQuery } =
  courseOrderApiService
