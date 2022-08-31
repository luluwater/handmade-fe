import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  reply: [],
}

export const replySlice = createSlice({
  name: 'reply',
  initialState,
  reducers: {
    addReply: (state, action) => {
      state.reply.push(action.payload)
    },
    getReply: (state, action) => {
      state.reply = action.payload
    },
  },
})

export const { addReply, getReply } = replySlice.actions
export default replySlice.reducer
