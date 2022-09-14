// Step1:引入 createApi 和 fetchBaseQuery
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../utils/config'

export const courseApiService = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['course'],
  endpoints: (builder) => ({
    getCourseList: builder.query({
      query: () => 'course',
      providesTags: ['course'],
    }),
    getCourseDetail: builder.query({
      query: (courseId) => `course/detail/${courseId}`,
      providesTags: ['course'],
    }),
    getCourseComment: builder.query({
      query: (courseId) => `course/comment/${courseId}`,
      providesTags: ['course'],
    }),
    addUserFavoriteCourse: builder.mutation({
      query: (courseId) => ({
        url: `course/${courseId}`,
        method: 'POST',
        body: courseId,
      }),
      invalidatesTags: ['course'],
    }),
    removeUserFavoriteCourse: builder.mutation({
      query: (courseId) => ({
        url: `course/${courseId}`,
        method: 'DELETE',
        body: courseId,
      }),
      invalidatesTags: ['course'],
    }),
  }),
})

export const {
  useGetCourseListQuery,
  useGetCourseDetailQuery,
  useGetCourseCommentQuery,
  useAddUserFavoriteCourseMutation,
  useRemoveUserFavoriteCourseMutation,
} = courseApiService
