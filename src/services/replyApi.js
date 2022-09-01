import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../utils/config'

export const replyApiService = createApi({
  reducerPath: 'replyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['reply'],
  endpoints: (builder) => ({
    // READ
    replies: builder.query({
      query: () => 'reply',
      providesTags: ['reply'],
    }),
    // CREATE
    // createReply: builder.mutation({
    //   query: (content) => ({
    //     url: '/reply',
    //     method: 'POST',
    //     body: content,
    //   }),
    //   invalidatesTags: ['reply'],
    // }),
  }),
})

export const { useRepliesQuery } = replyApiService
