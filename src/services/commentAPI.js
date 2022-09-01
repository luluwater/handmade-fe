import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../utils/config'

export const commentApiService = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['Comment', 'Reply'],
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
    //Insert reply
    createReply: builder.mutation({
      query: (reply) => ({
        url: '/reply',
        method: 'POST',
        body: reply,
      }),
      invalidatesTags: ['Reply'],
    }),
  }),
})

export const {
  useCommentsQuery,
  useCreateCommentMutation,
  useCreateReplyMutation,
} = commentApiService
