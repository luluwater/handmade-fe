// Step1:引入 createApi 和 fetchBaseQuery
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// http://localhost:8080/api/blog
// Step2:使用 createApi 建立 blogApi 實體
export const blogApiService = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
  endpoints: (builder) => ({
    // 用上面這ㄍ方法(各個 endpoint 分開寫)
    // getBlogList: builder.query({
    //   query: () => 'blog',
    // }),
    // getBlogDetail: builder.query({
    //   query: (blogId) => `blog/${blogId}`,
    // }),
    getBlog: builder.query({
      query: (blogId) => {
        if (blogId !== 'all') {
          return `blog/${blogId}`
        }
        return 'blog'
      },
    }),
  }),
})

export const { useGetBlogQuery } = blogApiService
