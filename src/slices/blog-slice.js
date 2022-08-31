import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.data.push(action.payload)
    },
    getBlog: (state, action) => {
      state.data = [action.payload]
    },
  },
})

export const { addBlog, getBlog } = blogSlice.actions
export const showBlog = (state) => state.todo.data
export default blogSlice.reducer
