import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

const initialState = {
  rawStore: [],
  store: [],
  center: [],
  mrt_line: 'all',
  mrt_station: 'all',
  category: 'all',
}

function filter(state) {
  state.store = state.rawStore
  if (state.category !== 'all') {
    state.store = state.store.filter((v) => {
      console.log(v.category_en_name === state.category)
      return v.category_en_name === state.category
    })
  }
  if (state.mrt_line !== 'all') {
    state.store = state.store.filter((v) => {
      return (
        state.mrt_line === v.MRT_Line || state.mrt_line === v.MRT_Line_Second
      )
    })
  }
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
      state.category = action.payload
      filter(state)
    },
    setMRT_Line: (state, action) => {
      state.mrt_line = action.payload
      filter(state)
    },
    setMRT_Station: (state, action) => {
      state.mrt_station = action.payload
      filter(state)
    },
  },
})

export const {
  getStore,
  setCenter,
  setFilterCategory,
  setMRT_Line,
  setMRT_Station,
} = storeSlice.actions
export default storeSlice.reducer
