import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { API_URL } from '../utils/config'

export const productOrderApiService = createApi({
  reducerPath: 'ProductOrderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['ProductOrder'],
  endpoints: (builder) => ({
    createProductOrder: builder.mutation({
      query: (ProductOrder) => ({
        url: 'order/product',
        method: 'POST',
        body: ProductOrder,
      }),
      invalidatesTags: ['ProductOrder'],
    }),
  }),
})

export const { useCreateProductOrderMutation } = productOrderApiService
