import { createSlice, current } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'
import { useSelector } from 'react-redux'
import Proudcts from '../pages/Products'

function doPagination(state) {
  if (state.filter.store.length > 0) {
    state.data = state.rawData.filter((product) =>
      state.filter.store.includes(product.store_name)
    )
    state.totalPage = Math.ceil(state.data.length / state.itemCount)
    console.log(current(state))
  } else {
    state.data = state.rawData
  }

  state.data = state.data?.slice(
    (state.currentPage - 1) * state.itemCount,
    state.itemCount * state.currentPage
  )
}
function checkPage(page, state) {
  if (page > state.totalPage) return state.totalPage
  if (page < 1) return 1
  return page
}

const initialState = {
  rawData: [],
  data: [],
  filter: {
    keyword: [],
    store: [],
    price: [],
    date: [],
  },
  currentPage: 1,
  itemCount: 20,
  totalPage: 1,
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    pagination: (state, action) => {
      const length = action.payload?.length ?? 1
      state.totalPage = Math.ceil(length / state.itemCount)
      state.rawData = action.payload
      doPagination(state)
    },
    setShowItemCount: (state, action) => {
      state.itemCount = action.payload
    },
    changePage: (state, action) => {
      const page = checkPage(action.payload, state)
      state.currentPage = page
      doPagination(state)
      // console.log(current(state))
    },
    nextPage: (state, action) => {
      const page = checkPage(state.currentPage + 1, state)
      state.currentPage = page
      doPagination(state)
    },
    prePage: (state, action) => {
      const page = checkPage(state.currentPage - 1, state)
      state.currentPage = page
      doPagination(state)
    },
    setStoreFilter: (state, action) => {
      state.filter.store = action.payload
      state.currentPage = 1
      doPagination(state)
    },
  },
})

export const {
  pagination,
  setShowItemCount,
  changePage,
  nextPage,
  prePage,
  setStoreFilter,
} = paginationSlice.actions
export default paginationSlice.reducer
