import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

//EXAMPLE
const initialState = {
  list: [],
}

export const filterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addFilterStore: (state, action) => {
      state.list = action.payload
    },
  },
})

export const { addFilterStore } = filterSlice.actions
export default filterSlice.reducer
