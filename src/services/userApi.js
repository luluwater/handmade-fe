import { API_URL } from '../utils/config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApiService = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    //read
    getUser: builder.query({
      query: () => 'user',
      providesTags: ['User'],
    }),
    //update
    // updateUser: builder.mutation({
    //   query: (userId) => ({
    //     url: `user`,
    //     method: 'put',
    //     body: userId,
    //   }),
    //   invalidatesTags: ['User']
    // }),
    // getUser: builder.query({
    //   query: () => 'user/orders-products',
    //   providesTags: ['User'],
    // }),
    // getUser: builder.query({
    //   query: () => 'user/orders-courses',
    //   providesTags: ['User'],
    // }),
  }),
})

export const { useGetUserQuery } = userApiService
