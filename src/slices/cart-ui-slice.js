import { createSlice } from '@reduxjs/toolkit'

const cartUiSlice = createSlice({
  name: 'cartUi',
  initialState: { cartIsVisible: false },

  reducers: {
    cartToggle(state) {
      state.cartIsVisible = !state.cartIsVisible
    },
  },
})

export const { cartToggle } = cartUiSlice.actions
export default cartUiSlice.reducer
