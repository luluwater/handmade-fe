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
    // CREATE
    createBlog: builder.mutation({
      query: (data) => ({
        url: 'blog',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['blog'],
    }),
    //TODO: update Blog
    updateBlog: builder.mutation({
      query: (data) => ({
        url: 'blog',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['blog'],
    }),
  }),
})

export const { useGetBlogQuery, useCreateBlogMutation } = blogApiService
