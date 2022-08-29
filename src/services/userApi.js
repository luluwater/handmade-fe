// Step1:引入 createApi 和 fetchBaseQuery
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// http://localhost:8080/api/blog
// Step2:使用 createApi 建立 blogApi 實體
export const userApiService = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => 'user',
    }),
  }),
})

export const { useGetUserQuery } = userApiService
