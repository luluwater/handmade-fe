import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const API_URL = 'http://localhost:8080/api/blog'
//EXAMPLE
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

export const getBlogAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}`)
    dispatch(getBlog(response.data))
  } catch (err) {
    throw new Error(err)
  }
}

export const { addBlog, getBlog } = blogSlice.actions
export const showBlog = (state) => state.todo.data
export default blogSlice.reducer
