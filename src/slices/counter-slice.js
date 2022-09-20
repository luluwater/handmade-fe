import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
  stockWarning: '',
  stocks: 10,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      if (state.value < state.stocks) {
        state.value += action.payload
      }
      if (state.value >= state.stocks) {
        state.stockWarning = '庫存已達上限'
      }
    },
    decrement: (state, action) => {
      if (state.value > 1) {
        state.value -= action.payload
      }
      if (state.value < state.stocks) {
        state.stockWarning = ''
      }
    },
    stocks: (state, action) => {
      state.stocks = action.payload
    },
  },
})

export const { increment, decrement, maxStock } = counterSlice.actions
export default counterSlice.reducer
