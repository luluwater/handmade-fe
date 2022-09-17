import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../utils/config'

export const authApiService = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    //TODO:HEADER CONFIG
    // prepareHeaders: (headers, { getState }) => {
    //     // By default, if we have a token in the store, let's use that for authenticated requests
    //     const token = (getState() as RootState).auth.token;
    //     if (token) {
    //       headers.set("authentication", `Bearer ${token}`);
    //     }git 
    //     return headers;
    //   }
  }),

  tagTypes: ['auth'],
  endpoints: (builder) => ({

    login: builder.mutation({
        query: (data) => ({
            url: '/auth/login',
            method: 'POST',
            body: data,
          }),
        providesTags: ['auth'],
      }),
    })

})


export const {
  useLoginMutation
  } = authApiService