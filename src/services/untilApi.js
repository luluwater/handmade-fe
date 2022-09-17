import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const utilApiService = createApi({
  reducerPath: 'utilApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
  endpoints: (builder) => ({
    getSelect: builder.query({
      query: () => 'filter/select',
      providesTags: ['filter'],
    }),
    getTags: builder.query({
      query: () => 'filter/tags',
      providesTags: ['filter'],
    }),
  }),
})

export const { useGetSelectQuery, useGetTagsQuery, useCreateTagsMutation } =
  utilApiService
