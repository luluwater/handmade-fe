import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const categoryApiService = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
  endpoints: (builder) => ({
    getcategoryList: builder.query({
      query: () => 'category',
    }),
  }),
})

export const { useGetcategoryListQuery } = categoryApiService
