// Step1:引入 createApi 和 fetchBaseQuery
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../utils/config'

// http://localhost:8080/api/blog
// Step2:使用 createApi 建立 blogApi 實體
export const storeApiService = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getStore: builder.query({
      query: () => 'store',
      providesTags: ['Store'],
    }),
    getStoreDetail: builder.query({
      query: (storeId) => `store/${storeId}`,
      providesTags: ['Store'],
    }),
    getStoreCourse: builder.query({
      query: (storeId) => `course/${storeId}`,
      providesTags: ['Store'],
    }),
  }),
})

export const {
  useGetStoreQuery,
  useGetStoreDetailQuery,
  useGetStoreCourseQuery,
} = storeApiService
