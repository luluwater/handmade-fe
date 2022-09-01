import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  store: [],
}

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    getStore: (state, action) => {
      state.store = [action.payload]
    },
  },
})

export const { getStore } = storeSlice.actions
export default storeSlice.reducer
