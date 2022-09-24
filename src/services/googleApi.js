import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../utils/config'

export const googleApiService = createApi({
  reducerPath: 'googleApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['google'],
  endpoints: (builder) => ({
    sendValidationMail: builder.mutation({
      query: (data) => ({
        url: 'google/validationMail',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['google'],
    }),
    //TODO:傳送訂單資訊到後端
    sendOrderDetail: builder.mutation({
      query: (data) => ({
        url: 'google/orderConfirmation',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['google'],
    }),
    addToSchedule:builder.mutation({
      query:(data) => ({
        url:'google/calendar',
        method:'POST',
        body:data,
      }),
      invalidatesTags: ['google'],
    })
  }),
})

export const { useSendValidationMailMutation, useSendOrderDetailMutation,useAddToScheduleMutation } =
  googleApiService
