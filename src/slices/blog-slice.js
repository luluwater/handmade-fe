import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  blog: [],
}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blog.push(action.payload)
    },
    getBlog: (state, action) => {
      state.blog = action.payload
    },
  },
})

export const { addBlog, getBlog } = blogSlice.actions
export default blogSlice.reducer
