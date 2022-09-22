import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { API_URL } from '../utils/config'

export const couponService = createApi({
  reducerPath: 'couponApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getCoupon: builder.query({
      query: (couponId) => `coupon/${couponId}`,
      providesTags: ['coupon'],
    }),
  }),
})

export const { useGetCouponQuery } = couponService
