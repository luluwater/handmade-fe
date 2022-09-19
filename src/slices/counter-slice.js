import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      if (state.value < 5) {
        state.value += action.payload
      }
    },
    decrement: (state, action) => {
      if (state.value > 1) {
        state.value -= action.payload
      }
    },
  },
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
