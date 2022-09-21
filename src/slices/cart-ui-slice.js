import { createSlice } from '@reduxjs/toolkit'

const cartUiSlice = createSlice({
  name: 'cartUi',
  initialState: { cartIsVisible: false },

  reducers: {
    cartToggle(state) {
      state.cartIsVisible = !state.cartIsVisible
    },
    cartClose(state, action) {
      state.cartIsVisible = action.payload
    },
  },
})

export const { cartToggle, cartClose } = cartUiSlice.actions
export default cartUiSlice.reducer
