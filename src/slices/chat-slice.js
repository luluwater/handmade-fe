import { createSlice, current } from '@reduxjs/toolkit'
/**
 * 1. 目前線上的人數
 * 2. 目前使用者是誰
 * 3. 目前使用者的房間
 * 4. 傳送的聊天內容
 */

//  {
//   id: '',
//   content: '',
//   user_id: '',
//   created_at: '',
//   room_id: '',
//   isCurrentUser: true,
// },

const userData = JSON.parse(localStorage.getItem('user'))?.user

const initialState = {
  chatRooms: [],
  chats: [],
  currentRoom: {},
  socket: {},
  newMessage: [],
  history: [],
  welcomeMsg: '',
  userData: userData,
  senderTyping: { typing: false },
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
      console.log('action.payload', action.payload)
      return { ...state, currentRoom: action.payload }
    },

    setWelcomeMsg: (state, action) => {
      return { ...state, welcomeMsg: action.payload }
    },

    addMesssage: (state, action) => {
      console.log('before eqully', current(state.newMessage))
      if (action.payload.user_id === userData.id) {
        return {
          ...state,
          newMessage: state.newMessage.concat(action.payload),
        }
      }
      console.log('after eqully', current(state.newMessage))
      if (action.payload.user_id !== userData.id) {
        return {
          ...state,
          newMessage: state.newMessage.concat(action.payload),
        }
      }
    },
  },
})

export const {
  setSocket,
  addMesssage,
  currentRoom,
  setWelcomeMsg,
  fetchAllRooms,
} = chatSilce.actions
export default chatSilce.reducer
