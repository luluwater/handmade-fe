import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  comment: [],
}

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comment.push(action.payload)
    },
    getComment: (state, action) => {
      state.comment = action.payload
    },
  },
})

export const { addComment, getComment } = commentSlice.actions
export default commentSlice.reducer
