import { createSlice, current } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

function doPagination(state) {
  state.data = state.rawData?.slice(
    (state.currentPage - 1) * state.prePage,
    state.prePage * state.currentPage
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
  filter: [],
  currentPage: 1,
  prePage: 20,
  totalPage: 1,
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    pagination: (state, action) => {
      const length = action.payload?.length ?? 1
      state.totalPage = Math.ceil(length / state.prePage)
      state.rawData = action.payload
      doPagination(state)
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
  },
})

export const { pagination, changePage, nextPage, prePage } =
  paginationSlice.actions
export default paginationSlice.reducer
