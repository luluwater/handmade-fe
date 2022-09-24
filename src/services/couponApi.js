import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { API_URL } from '../utils/config'

export const couponApiService = createApi({
  reducerPath: 'couponApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    deleteUserCoupon: builder.mutation({
      query: (userCouponId) => ({
        url: 'coupon',
        method: 'delete',
        body: userCouponId,
      }),
      invalidatesTags: ['coupon'],
    }),
  }),
})

export const { useDeleteUserCouponMutation } = couponApiService
