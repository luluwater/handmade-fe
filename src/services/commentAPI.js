// Step1:引入 createApi 和 fetchBaseQuery
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// http://localhost:8080/api/comment
// Step2:使用 createApi 建立 commentApi 實體
export const commentApiService = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
  tagTypes: ['Comment'],
  endpoints: (builder) => ({
    // READ
    comments: builder.query({
      query: (blogId) => `/comment/${blogId}`,
      providesTags: ['Comment'],
    }),
    // CREATE
    createComment: builder.mutation({
      query: (content) => ({
        url: '/comment',
        method: 'POST',
        body: content,
      }),
      invalidatesTags: ['Comment'],
    }),
  }),
})

export const { useCommentsQuery, useCreateCommentMutation } = commentApiService
