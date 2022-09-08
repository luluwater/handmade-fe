import { createSlice } from '@reduxjs/toolkit'

//EXAMPLE
const initialState = {
  id: '',
  name: '',
  isActive: false,
  stores: [],
}

export const filterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
})

export const { auth } = filterSlice.actions
export default filterSlice.reducer
