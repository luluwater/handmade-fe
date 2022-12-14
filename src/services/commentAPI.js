import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../utils/config'

export const commentApiService = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['Comment'],
  endpoints: (builder) => ({
    // READ
    comments: builder.query({
      query: (blogId) => `/comment/${blogId}`,
      providesTags: ['Comment'],
    }),
    // CREATE
    createComment: builder.mutation({
      query: (comment) => ({
        url: '/comment',
        method: 'POST',
        body: comment,
      }),
      invalidatesTags: ['Comment'],
    }),
    //DELETE Comment
    deleteComment: builder.mutation({
      query: (commentId) => ({
        url: 'comment',
        method: 'delete',
        body: commentId,
      }),
      invalidatesTags: ['Comment'],
    }),
    //update Comment
    updateComment: builder.mutation({
      query: (data) => ({
        url: 'comment',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Comment'],
    }),
  }),
})

export const {
  useCommentsQuery,
  useCreateCommentMutation,
  useDeleteCommentMutation,
  useUpdateCommentMutation,
} = commentApiService
