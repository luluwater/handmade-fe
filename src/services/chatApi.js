import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../utils/config'

export const chatApiService = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['Chat'],
  endpoints: (builder) => ({
    chatRooms: builder.query({
      query: (blogId) => `chat`,
      providesTags: ['Chat'],
    }),
  }),
})

export const { useChatRoomsQuery } = chatApiService
