import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { io } from 'socket.io-client';
import { SOCKET_URL } from '../utils/config';

// enum ChatEvent {
//   SendMessage = 'send_message',
//   RequestAllMessages = 'request_all_messages',
//   SendAllMessages = 'send_all_messages',
//   ReceiveMessage = 'receive_message',
// }



export const socketApiService = createApi({
  reducerPath: 'socketApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getMessages: builder.query({
      // query: () => 'chat-messages',
      queryFn: () => ({ data: [] }),
      async onCacheEntryAdded( photoId,{ cacheDataLoaded, cacheEntryRemoved, updateCachedData },){
          try {
          await cacheDataLoaded;
          // the /chat-messages endpoint responded already
 
          const socket = io(SOCKET_URL, {
            withCredentials: true,
          });
 
          socket.on(ChatEvent.ReceiveMessage, (message) => {
            updateCachedData((draft) => {
              draft.push(message);
            });
          });

         socket.on(ChatEvent.SendAllMessages, (messages) => {
          updateCachedData((draft) => {
            draft.splice(0, draft.length, ...messages);
          });
         });
  
          socket.off('connect');
          socket.off(ChatEvent.SendAllMessages);
          socket.off(ChatEvent.ReceiveMessage);

          await cacheEntryRemoved;
        } catch {
     
        }
      },
      providesTags: ['socket'],
    }),
  }),
})

export const {
  useGetStoreQuery,
  useGetStoreDetailQuery,
  useGetStoreCourseQuery,
  useGetProductCourseQuery,
} = storeApiService
