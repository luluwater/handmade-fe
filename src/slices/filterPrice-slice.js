import { createSlice } from '@reduxjs/toolkit'

//EXAMPLE
const initialState = {
  min: 0,
  max: 10000,
  leftValue: 0,
  rightValue: 10000,
  leftStyle: '0%',
  rightStyle: '0%',
}

export const filterSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    setLeftValue: (state, actions) => {
      const value = Math.min(actions.payload, state.rightValue)
      state.leftValue = value
      const percent = Math.floor(((value - state.min) / state.max) * 100)
      state.leftStyle = percent + '%'
    },
    setRightValue: (state, actions) => {
      const value = Math.max(actions.payload, state.leftValue)
      state.rightValue = value
      const percent = Math.floor(100 - ((value - state.min) / state.max) * 100)
      state.rightStyle = percent + '%'
    },
    initFilterPrice: (state, action) => {
      state.leftStyle = '0%'
      state.rightStyle = '0%'
      state.leftValue = 0
      state.rightValue = 10000
      // console.log('price', state)
    },
  },
})

export const { setLeftValue, setRightValue, initFilterPrice } =
  filterSlice.actions
export default filterSlice.reducer
