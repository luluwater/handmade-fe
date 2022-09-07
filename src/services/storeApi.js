import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const storeApiService = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
  endpoints: (builder) => ({
    getStoreList: builder.query({
      query: () => 'store',
    }),
  }),
})

export const { useGetStoreListQuery } = storeApiService