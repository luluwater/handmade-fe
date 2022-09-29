import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../utils/config'

export const blogApiService = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['blog'],
  endpoints: (builder) => ({
    getBlog: builder.query({
      query: (blogId) => {
        if (blogId !== 'all') {
          return `blog/${blogId}`
        }
        return 'blog'
      },
      providesTags: ['blog'],
    }),
    // CREATE Blog
    createBlog: builder.mutation({
      query: (data) => ({
        url: 'blog',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['blog'],
    }),
    updateBlog: builder.mutation({
      query: (data) => {
        const { blogId } = data
        return { url: `blog/${blogId}/edit`, method: 'PUT', body: data }
      },
      invalidatesTags: ['blog'],
    }),
    // DELETE Blog
    deleteBlog: builder.mutation({
      query: (blogId) => ({
        url: `blog/${blogId}`,
        method: 'delete',
        body: blogId,
      }),
      invalidatesTags: ['blog'],
    }),
  }),
})

export const {
  useGetBlogQuery,
  useCreateBlogMutation,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
} = blogApiService
