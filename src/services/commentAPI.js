import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
