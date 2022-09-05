import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
      // console.log('payload', state.length)
      const length = action.payload?.length ?? 1
      state.totalPage = Math.ceil(length / state.prePage)
      console.log('totalPage', state.totalPage)
      state.data = action.payload?.slice(
        (state.currentPage - 1) * state.prePage,
        state.prePage
      )
    },
  },
})

export const { pagination } = paginationSlice.actions
export default paginationSlice.reducer
