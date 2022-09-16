import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rawStore: [],
  store: [],
  center: [],
}

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    getStore: (state, action) => {
      state.rawStore = action.payload
      state.store = action.payload
    },
    setCenter: (state, action) => {
      state.center = action.payload
    },
    setFilterCategory: (state, action) => {
      if (action.payload === 'all') {
        state.store = state.rawStore
        return
      }
      state.store = state.rawStore.filter(
        (v) => v.category_en_name === action.payload
      )
    },
  },
})

export const { getStore, setCenter, setFilterCategory } = storeSlice.actions
export default storeSlice.reducer
