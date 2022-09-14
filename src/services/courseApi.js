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
  }),
})

export const { useGetCourseListQuery } = courseApiService
