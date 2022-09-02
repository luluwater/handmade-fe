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
      providesTags: ['Reply'],
    }),
    //Insert reply
    createReply: builder.mutation({
      query: (reply) => ({
        url: 'reply',
        method: 'POST',
        body: reply,
      }),
      invalidatesTags: ['Reply'],
    }),
    //DELETE Reply
    deleteReply: builder.mutation({
      query: (replyId) => ({
        url: 'reply',
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
