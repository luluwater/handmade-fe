// Step1:引入 createApi 和 fetchBaseQuery
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../utils/config'

// http://localhost:8080/api/blog
// Step2:使用 createApi 建立 blogApi 實體
export const blogApiService = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),

  endpoints: (builder) => ({
    getBlog: builder.query({
      query: (blogId) => {
        if (blogId !== 'all') {
          return `blog/${blogId}`
        }
        return 'blog'
      },
    }),
    createBlog: builder.mutation({
      query: (data) => {},
    }),
  }),
})

export const { useGetBlogQuery, useCreateBlogMutation } = blogApiService
