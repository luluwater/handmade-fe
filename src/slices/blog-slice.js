import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  // 長度:
  // 目前
}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.data.push(action.payload)
    },
    getBlog: (state, action) => {
      console.log(state.data)
      state.data = action.payload
    },

    pagation: (state, action) => {
      console.log(state.data)
      state.data = action.payload
    },
  },
})

export const { addBlog, getBlog } = blogSlice.actions
export default blogSlice.reducer
