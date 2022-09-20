// Step1:引入 createApi 和 fetchBaseQuery
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const userId = JSON.parse(localStorage.getItem('user'))?.user.id
export const courseApiService = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
  tagTypes: ['course'],
  endpoints: (builder) => ({
    getCourseList: builder.query({
      query: () => `course?userId=${userId}`,
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
    test: builder.query({
      query: () => 'course/test',
    }),
  }),
})

export const {
  useGetCourseListQuery,
  useAddUserFavoriteCourseMutation,
  useRemoveUserFavoriteCourseMutation,
} = courseApiService
