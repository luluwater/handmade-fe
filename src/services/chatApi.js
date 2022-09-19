import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../utils/config'
import io from 'socket.io-client'
import { createEntityAdapter } from '@reduxjs/toolkit'

const messagesAdapter = createEntityAdapter()

export const chatApiService = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    // chatRooms: builder.query({
    //   query: () => `chat`,
    //   providesTags: ['Chat'],
    // }),
    // getMessages: builder.query({
    //   queryFn: () => ({ data: ['123123'] }),
    //   transformResponse(response) {
    //     return messagesAdapter.addMany(
    //       messagesAdapter.getInitialState(),
    //       response
    //     )
    //   },
    //   async onCacheEntryAdded(
    //     photoId,
    //     { cacheDataLoaded, cacheEntryRemoved, updateCachedData }
    //   ) {
    //     try {
    //       await cacheDataLoaded
    //       const socket = io(BASE_URL, {
    //         withCredentials: true,
    //       })
    //       socket.on('connect', () => {
    //         socket.emit('RequestAllMessages')
    //       })
    //       socket.on('messageToClient', (msg) => {
    //         console.log('msg', msg)
    //       })
    //       socket.on('rooms', (roomData) => {
    //         console.log('roomData1111', roomData)
    //       })
    //       // socket.on('SendAllMessages', (messages) => {
    //       //   updateCachedData((draft) => {
    //       //     draft.splice(0, draft.length, ...messages)
    //       // messagesAdapter.upsertOne(draft, data)
    //       //   })
    //       // })
    //       // socket.on('ReceiveMessage', (message) => {
    //       //   updateCachedData((draft) => {
    //       //     draft.push(message)
    //       //   })
    //       // })
    //       await cacheEntryRemoved
    //       // socket.off('connect')
    //       // socket.off('SendAllMessages')
    //       // socket.off('ReceiveMessage')
    //     } catch {}
    //   },
    // }),
  }),
})

export const { useGetMessagesQuery } = chatApiService
