import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  reply: [],
  displayToast: false,
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
    displayToast: (state, action) => {
      state.displayToast = action.payload
    },
  },
})

export const { addReply, getReply, displayToast } = replySlice.actions
export default replySlice.reducer
