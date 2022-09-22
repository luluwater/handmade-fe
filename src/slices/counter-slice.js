import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
  stockWarning: '',
  stock: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      if (state.value < state.stock) {
        state.value += action.payload
      }
      if (state.value >= state.stock) {
        state.stockWarning = '庫存已達上限'
      }
    },
    decrement: (state, action) => {
      if (state.value > 1) {
        state.value -= action.payload
      }
      if (state.value < state.stock) {
        state.stockWarning = ''
      }
    },
    maxStocks: (state, action) => {
      state.stock = action.payload
    },
  },
})

export const { increment, decrement, maxStocks } = counterSlice.actions
export default counterSlice.reducer
