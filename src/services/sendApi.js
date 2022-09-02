// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { API_URL } from '../utils/config'

// export const sendCommentApiService = createApi({
//   reducerPath: 'sendCommentApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: API_URL,
//   }),
//   tagTypes: ['sendComment'],
//   endpoints: (builder) => ({
//     // READ
//     comments: builder.query({
//       query: () => `comment`,
//       providesTags: ['sendComment'],
//     }),
//     // CREATE
//     createComment: builder.mutation({
//       query: (content) => ({
//         url: `comment`,
//         method: 'POST',
//         body: content,
//       }),
//       invalidatesTags: ['sendComment'],
//     }),
//   }),
// })

// export const { useCreateCommentMutation } = sendCommentApiService
