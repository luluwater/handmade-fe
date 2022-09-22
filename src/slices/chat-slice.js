import { createSlice, current } from '@reduxjs/toolkit'
/**
 * 1. 目前線上的人數
 * 2. 目前使用者是誰
 * 3. 目前使用者的房間
 * 4. 傳送的聊天內容
 */

const initialState = {
  chatRooms: [],
  chats: [],
  currentRoom: {},
  socket: {},
  newMessage: [],
  scrollBottom: 0,
  senderTyping: { typing: false },
  history: [],
  joinRoomMsg: '',
  welcomeMsg: '',
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

    fetchAllRooms: (state, action) => {
      return { ...state, chatRooms: action.payload }
    },

    currentRoom: (state, action) => {
      return { ...state, currentRoom: action.payload }
    },

    // setJoinRoomMsg: (state, action) => {
    //   return { ...state, joinRoomMsg: action.payload }
    // },

    setWelcomeMsg: (state, action) => {
      return { ...state, welcomeMsg: action.payload }
    },

    getMessage: (state, action) => {},

    getRooms: (state, action) => {},

    //TODO:抓到後端 MSG 再把 NEW MSG 塞到狀態裡
    addMesssage: (state, action) => {
      console.log('state.currentRoom', current(state.currentRoom))
      return {
        ...state,
        currentRoom: state.currentRoom.msg.concat(action.payload),
        newMessage: state.newMessage.concat(action.payload),
      }
    },
  },
})

export const {
  sendMesssage,
  setSocket,
  addMesssage,
  setJoinRoomMsg,
  currentRoom,
  setWelcomeMsg,
  fetchAllRooms,
} = chatSilce.actions
export default chatSilce.reducer
