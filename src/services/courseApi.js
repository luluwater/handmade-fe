// Step1:引入 createApi 和 fetchBaseQuery
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../utils/config'
const userId = JSON.parse(localStorage.getItem('user'))?.user.id
export const courseApiService = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['course'],
  endpoints: (builder) => ({
    getCourseList: builder.query({
      query: () => `course?userId=${userId}`,
      providesTags: ['course'],
    }),
    getCourseDetail: builder.query({
      query: (courseId) => `course/detail/${courseId}?userId=${userId}`,
      providesTags: ['course'],
    }),
    getCourseComment: builder.query({
      query: (courseId) => `course/comment/${courseId}`,
      providesTags: ['course'],
    }),
    addUserFavoriteCourse: builder.mutation({
      query: (courseId, storeId, categortId) => ({
        url: `course/${courseId}?userId=${userId}`,
        method: 'POST',
        body: courseId,
        storeId,
        categortId,
      }),
      invalidatesTags: ['course'],
    }),
    removeUserFavoriteCourse: builder.mutation({
      query: (courseId) => ({
        url: `course/${courseId}?userId=${userId}`,
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
