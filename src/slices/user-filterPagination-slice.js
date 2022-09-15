import { createSlice, current } from '@reduxjs/toolkit'

function sortData(a, b, sort) {
  if (sort === 'heighPrice') return b.price - a.price
  if (sort === 'lowerPrice') return a.price - b.price
  return b.sold_amount - a.sold_amount
}

function doPagination(state) {
  state.data = state.rawData
  if (state.filter.searchWord !== '') {
    state.data = state.data.filter((product) => {
      // console.log('key', current(product))
      return (
        product.name.includes(state.filter.searchWord) ||
        product.store_name.includes(state.filter.searchWord)
      )
    })
  }
  if (state.filter.store.length > 0) {
    state.data = state.data.filter((product) =>
      state.filter.store.includes(product.store_name)
    )
    console.log(current(state))
  }
  state.data = state.data
    ?.filter(
      (product) =>
        product.price > state.filter.price.min &&
        product.price < state.filter.price.max
    )
    .sort((a, b) => sortData(a, b, state.filter.sort))
  // console.log(state.filter.sort)
  state.totalPage = Math.ceil(state.data?.length / state.itemCount)
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
    searchWord: '',
    store: [],
    price: { min: 0, max: 10000 },
    date: [],
    sort: 'hot',
  },
  currentPage: 1,
  itemCount: 8,
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
    setFilter: (state, action) => {
      // state.filter.store = action.payload.store
      // state.filter.searchWord = action.payload.searchWord
      state.filter = { ...action.payload }
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
  setFilter,
} = paginationSlice.actions
export default paginationSlice.reducer
