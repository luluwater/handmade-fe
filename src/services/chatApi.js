import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../utils/config'

export const chatApiService = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['chat'],
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: (chatId) => {
        if (chatId !== 'all') {
          return `chat/${chatId}`
        }
        return 'chat'
      },
      providesTags: ['chat'],
    }),

    sendMessage: builder.mutation({
      query: (data) => ({
        url: 'chat/msg',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['chat'],
    }),
  }),
})

export const { useGetRoomsQuery, useSendMessageMutation } = chatApiService
