import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { API_URL } from '../utils/config'

export const productOrderDetailApiService = createApi({
  reducerPath: 'ProductOrderDetailApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['ProductOrderDetail'],
  endpoints: (builder) => ({
    createProductOrderDetail: builder.mutation({
      query: (ProductOrder) => ({
        url: 'order/product/detail',
        method: 'POST',
        body: ProductOrder,
      }),
      invalidatesTags: ['ProductProductOrderDetailOrder'],
    }),
  }),
})

export const { useCreateProductOrderDetailMutation } =
  productOrderDetailApiService
