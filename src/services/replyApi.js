import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const replyApiService = createApi({
  reducerPath: 'replyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
  tagTypes: ['reply'],
  endpoints: (builder) => ({
    // READ
    replies: builder.query({
      query: () => 'reply',
      providesTags: ['reply'],
    }),
    // CREATE
    createReply: builder.mutation({
      query: (reply) => ({
        url: '/reply',
        method: 'POST',
        body: reply,
      }),
      invalidatesTags: ['Reply'],
    }),
    //DELETE Reply
    deleteReply: builder.mutation({
      query: (replyId) => ({
        url: '/reply',
        method: 'delete',
        body: replyId,
      }),
      invalidatesTags: ['Reply'],
    }),
  }),
})

export const {
  useRepliesQuery,
  useCreateReplyMutation,
  useDeleteReplyMutation,
} = replyApiService
