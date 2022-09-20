import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../utils/config'
import { BASE_URL } from '../utils/config'
import { useEffect } from 'react'
import { io } from 'socket.io-client'

export const chatApiService = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['chat'],
  endpoints: (builder) => ({
    // getRooms: builder.query({
    //   query: () => 'chat',
    //   // queryFn: () => ({ data: [] }),
    //   async onCacheEntryAdded(
    //     photoId,
    //     { cacheDataLoaded, cacheEntryRemoved, updateCachedData }
    //   ) {
    //     try {
    //       await cacheDataLoaded
    //       // the /chat-messages endpoint responded already

    //       const socket = io(BASE_URL, {
    //         withCredentials: true,
    //       })

    //       socket.on('ReceiveMessage', (message) => {
    //         updateCachedData((draft) => {
    //           draft.push(message)
    //         })
    //       })

    //       socket.on('SendAllMessages', (messages) => {
    //         updateCachedData((draft) => {
    //           draft.splice(0, draft.length, ...messages)
    //         })
    //       })

    //       socket.on('messageToClient', { welcome: 'wlecome' })

    //       socket.off('connect')
    //       socket.off('SendAllMessages')
    //       socket.off('ReceiveMessage')

    //       await cacheEntryRemoved
    //     } catch {}
    //   },
    //   providesTags: ['chat'],
    // }),
    getRooms: builder.query({
      query: (chatId) => {
        console.log('chatId', chatId)
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
