import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../utils/config'

export const replyApiService = createApi({
  reducerPath: 'replyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['Reply'],
  endpoints: (builder) => ({
    // READ
    replies: builder.query({
      query: () => 'reply',
    }),
    //Insert reply
    createReply: builder.mutation({
      query: (reply) => ({
        url: '/reply',
        method: 'POST',
        body: reply,
      }),
    }),
    //DELETE Reply
    deleteReply: builder.mutation({
      query: (replyId) => ({
        url: '/reply',
        method: 'delete',
        body: replyId,
      }),
    }),
  }),
})

export const {
  useRepliesQuery,
  useCreateReplyMutation,
  useDeleteReplyMutation,
} = replyApiService
