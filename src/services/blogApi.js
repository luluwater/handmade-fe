// Step1:引入 createApi 和 fetchBaseQuery
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Step2:使用 createApi 建立 blogApi 實體
export const blogApiService = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
  endpoints: (builder) => ({
    getBlogList: builder.query({
      query: () => 'blog',
    }),
    getBlogDetail: builder.query({
      query: (blogId) => `blog/${blogId}`,
    }),
  }),
})

export const { useGetBlogListQuery, useGetBlogDetailQuery } = blogApiService
