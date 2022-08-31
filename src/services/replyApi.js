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
