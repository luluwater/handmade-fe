import { createSlice, current } from '@reduxjs/toolkit'
/**
 * 1. 目前線上的人數
 * 2. 目前使用者是誰
 * 3. 目前使用者的房間
 * 4. 傳送的聊天內容
 */

const initialState = {
  chats: [],
  currentChat: {},
  socket: {},
  newMessage: { chatId: null, seen: null },
  scrollBottom: 0,
  senderTyping: { typing: false },
}

export const chatSilce = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setSocket: (state, action) => {
      // console.log('state', current(state))
      // console.log(action.payload)

      return {
        ...state,
        socket: action.payload,
      }
    },
  },
})

export const { setSocket } = chatSilce.actions
export default chatSilce.reducer
