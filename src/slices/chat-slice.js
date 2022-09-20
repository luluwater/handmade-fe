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
  newMessage: [],
  scrollBottom: 0,
  senderTyping: { typing: false },
  //TODO:加入 HISTORY 的欄位，這個拿來抓後端資料
  history: [],
}

export const chatSilce = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setSocket: (state, action) => {
      return {
        ...state,
        socket: action.payload,
      }
    },
    addMesssage: (state, action) => {
      return {
        ...state,
        newMessage: state.newMessage.concat(action.payload),
      }
    },
  },
})

export const { setSocket, addMesssage } = chatSilce.actions
export default chatSilce.reducer
