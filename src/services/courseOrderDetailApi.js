import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { API_URL, ARI_URL } from '../utils/config'

export const courseOrderDetailApiService = createApi({
  reducerPath: 'CourseOrderDetailApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['CourseOrderDetail'],
  endpoints: (builder) => ({
    createCourseOrderDetail: builder.mutation({
      query: (CourseOrder) => ({
        url: 'order/course/detail',
        method: 'POST',
        body: CourseOrder,
      }),
      invalidatesTags: ['CourseOrderDetail'],
    }),
  }),
})

export const { useCreateCourseOrderDetailMutation } = courseOrderDetailApiService
