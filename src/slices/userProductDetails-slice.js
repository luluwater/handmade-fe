import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  setShowUserProductOrders: false,
}

export const userProductDetailsSlice = createSlice({
  name: 'userProductDetails',
  initialState,
  reducers: {
    product: (state, action) => {
      state.setShowUserProductOrders = action.payload
    },
    backToPage: (state, action) => {
      state.setShowUserProductOrders = !state.setShowUserProductOrders
    },
  },
})

export const { product, backToPage } = userProductDetailsSlice.actions
export default userProductDetailsSlice.reducer
