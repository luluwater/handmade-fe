import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  comment: [],
}

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    getComment: (state, action) => {
      state.comment = action.payload
    },
    addComment: (state, action) => {
      console.log(action.payload)
    },
  },
})

export const { addComment, getComment } = commentSlice.actions
export default commentSlice.reducer
