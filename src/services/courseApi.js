// Step1:引入 createApi 和 fetchBaseQuery
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const courseApiService = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
  tagTypes: ['course'],
  endpoints: (builder) => ({
    getCourseList: builder.query({
      query: () => 'course',
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
  useAddUserFavoriteCourseMutation,
  useRemoveUserFavoriteCourseMutation,
} = courseApiService
