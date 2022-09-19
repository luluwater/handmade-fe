import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
  stockWarning: '',
  stocks: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      if (state.value < 5) {
        state.value += action.payload
      }
      if (state.value >= 5) {
        state.stockWarning = '庫存已達上限'
      }
    },
    decrement: (state, action) => {
      if (state.value > 1) {
        state.value -= action.payload
      }
      if (state.value < 5) {
        state.stockWarning = ''
      }
    },
  },
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
