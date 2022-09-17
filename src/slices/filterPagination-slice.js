import { createSlice, current } from '@reduxjs/toolkit'
import moment from 'moment'

function sortData(a, b, sort) {
  if (sort === 'heighPrice') return b.price - a.price
  if (sort === 'lowerPrice') return a.price - b.price
  return b.sold_amount - a.sold_amount
}

function product(state) {
  if (!state.rawData) return
  state.data = state.rawData
  //篩選關鍵字
  if (state.filter.searchWord !== '') {
    state.data = state.data?.filter((product) => {
      return (
        product.name.includes(state.filter.searchWord) ||
        product.store_name.includes(state.filter.searchWord)
      )
    })
  }

  //篩選商店名稱
  if (state.filter.store.length > 0) {
    state.data = state.data?.filter((product) =>
      state.filter.store.includes(product.store_name)
    )
  }

  //篩選時間
  if (
    state.filter.date?.startDate !== null &&
    state.filter.date?.startDate !== undefined &&
    state.filter.date?.endDate !== undefined
  ) {
    state.data = state.data?.filter((product) => {
      const productDate = moment(product.course_date).format('YYYY-M-D')
      const startDate = state.filter.date.startDate
      const endDate = state.filter.date.endDate ?? startDate
      return (
        moment(productDate).isSameOrBefore(endDate) &&
        moment(productDate).isSameOrAfter(startDate)
      )
    })
  }

  //篩選價格
  if (state.data.length > 0 && Object.keys(state.data[0]).includes('price')) {
    state.data = state.data
      ?.filter(
        (product) =>
          product.price > state.filter.price.min &&
          product.price < state.filter.price.max
      )
      .sort((a, b) => sortData(a, b, state.filter.sort))
  }

  //計算頁數與分頁
  state.totalPage = Math.ceil(state.data?.length / state.itemCount)
  state.data = state.data?.slice(
    (state.currentPage - 1) * state.itemCount,
    state.itemCount * state.currentPage
  )
}

function blog(state) {
  if (!state.rawData) return
  state.data = state.rawData

  console.log('state.data', state.data)

  if (state.filter.searchWord !== '') {
    state.data = state.data?.filter(
      (blog) =>
        blog.title.includes(state.filter.searchWord) ||
        blog.store_name.includes(state.filter.searchWord) ||
        blog.category_name.includes(state.filter.searchWord) ||
        blog.content.includes(state.filter.searchWord)
    )
  }

  if (state.filter.store.length > 0) {
    console.log('state.data', state.data)
    state.data = state.data?.filter((blog) =>
      state.filter.store.includes(blog.store_name)
    )
  }

  //篩選時間
  if (
    state.filter.date?.startDate !== null &&
    state.filter.date?.startDate !== undefined &&
    state.filter.date?.endDate !== undefined
  ) {
    state.data = state.data?.filter((blog) => {
      const blogDate = moment(blog.blog_create_time).format('YYYY-M-D')
      console.log('blogDate', blogDate)
      const startDate = state.filter.date.startDate
      const endDate = state.filter.date.endDate ?? startDate
      return (
        moment(blogDate).isSameOrBefore(endDate) &&
        moment(blogDate).isSameOrAfter(startDate)
      )
    })
  }
  //計算頁數與分頁
  state.totalPage = Math.ceil(state.data?.length / state.itemCount)
  state.data = state.data?.slice(
    (state.currentPage - 1) * state.itemCount,
    state.itemCount * state.currentPage
  )
}

function doPagination(state) {
  switch (state.type) {
    case 'product':
      product(state)
      break
    case 'blog':
      blog(state)
      break

    default:
      break
  }
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
    date: { startDate: null, endDate: null },
    sort: 'hot',
  },
  currentPage: 1,
  itemCount: 20,
  totalPage: 1,
  type: '',
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    pagination: (state, action) => {
      const length = action.payload?.length ?? 1
      state.totalPage = Math.ceil(length / state.itemCount)
      // if (state.rawData != action.payload) {
      //   console.log('換頁')
      //   state.filter = { ...initialState.filter }
      // }
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
    setType: (state, action) => {
      state.type = action.payload
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
  setType,
} = paginationSlice.actions
export default paginationSlice.reducer
