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
  currentRoom: {},
  socket: {},
  newMessage: [],
  // history: [],
  friends: [],
  online: false,
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

    setCurrentRoom: (state, action) => {
      return { ...state, currentRoom: action.payload }
    },

    setWelcomeMsg: (state, action) => {
      return { ...state, welcomeMsg: action.payload }
    },

    setLeftRoom: (state, action) => {
      const { user, room } = action.payload

      const newFriends = state.friends.filter((f) => {
        return f.id !== user.id
      })

      return {
        ...state,
        friends: newFriends,
      }
    },

    setFriends: (state, action) => {
      const concatFriends = state.friends.concat(action.payload)

      const set = new Set()

      const filterFriend = concatFriends.filter((item) =>
        !set.has(item.account) ? set.add(item.account) : false
      )

      return {
        ...state,
        friends: filterFriend,
      }
    },

    addMesssage: (state, action) => {
      return {
        ...state,
        newMessage: [...state.newMessage, ...[action.payload]],
      }
    },
  },
})

export const {
  setSocket,
  addMesssage,
  setCurrentRoom,
  setWelcomeMsg,
  setFriends,
  setLeftRoom,
  fetchAllRooms,
} = chatSilce.actions
export default chatSilce.reducer
