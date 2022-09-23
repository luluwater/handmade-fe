import { useEffect } from 'react'
import io from 'socket.io-client'
import { BASE_URL } from '../utils/config'
import { useGetRoomsQuery } from '../services/chatApi'
import {
  setSocket,
  addMesssage,
  setJoinRoomMsg,
  setWelcomeMsg,
  fetchAllRooms,
} from '../slices/chat-slice'
import { useSelector } from 'react-redux'

/**
 * SOCKET TODO
 * TODO:事件
 * 1. 加入 ROOM
 * 2. 離開 ROOM
 * 3. 發送訊息
 */
// useEffect(() => {
//   const socket = io(BASE_URL, {
//     withCredentials: true,
//   })

//   socket.on('message', (message) => {
//     console.log('message 920', message)
//   })
//   //TODO: 用 redux 來拿到這些資料，並渲染到葉面上
//   const joinRoom = (room) => {
//     socket.emit('joinRoom', room)

//     //加入房間的 msg
//     socket.on('join-room-message', (msg) => {
//       console.log('join-room-message', msg)
//     })
//     //歡迎加入房間的 msg 顯示是哪個使用者加入
//     socket.on('room-broadcast', (msg) => {
//       console.log('broadcast msg', msg)
//     })
//     //使用者在打字的 msg 搭配 input focus 來用
//     socket.on('typing', (msg) => {
//       console.log('typing', msg)
//     })
//   }

// TODO: JOIN ROOM 後再該 ROOM 裡面EMIT
// }, [])

function useSocket(user, dispatch) {
  const { data } = useGetRoomsQuery('all')

  const userData = JSON.parse(localStorage.getItem('user'))?.user
  const chatReducer = useSelector((state) => state.chatReducer)
  const currentRoom = chatReducer.currentRoom
  const newMessage = chatReducer.newMessage

  useEffect(() => {
    const socket = io(BASE_URL, {
      withCredentials: true,
    })
    dispatch(setSocket(socket))

    // socket.emit('join', user)

    socket.on('rooms', (rooms) => {
      dispatch(fetchAllRooms(rooms))
    })

    socket.on('welcome-user-msg', (welcomeMsg) => {
      dispatch(setWelcomeMsg(welcomeMsg))
    })

    socket.on('responseMsg', (responseMsg) => {
      console.log('responseMsg in socket', responseMsg)
      dispatch(addMesssage(responseMsg))
    })
  }, [dispatch])
}

export default useSocket

// useEffect(() => {
//   const socket = io(BASE_URL, {
//     withCredentials: true,
//   })
//   dispatch(setSocket({ socket }))

//   socket.emit('joinRoom', currentRoom)

//   // socket.on('join-room-message', (msg) => {
//   //   dispatch(setJoinRoomMsg(msg))
//   // })

//   socket.emit('join-room-user', userData)

//   socket.on('welcome-user-msg', (msg) => {
//     console.log('In HOOKKKK', msg)
//     dispatch(setWelcomeMsg(msg))
//   })

//   console.log('newMessage in hook', newMessage)

//   socket.emit('sendMsg', newMessage)

//   socket.on('responseMsg', (msg) => {
//     console.log('responseMsg', msg)
//     // dispatch(addMesssage(msg))
//   })

//   // console.log(user)

//   // socket.emit('join', user)

//   // socket.on('message', (msg) => {
//   //   console.log(msg)
//   // })

//   // //用 disptch 傳到狀態中
//   // socket.on('responseMsg', (msg) => {
//   //   dispatch(addMesssage(msg))
//   //   // console.log('responseMsg', msg)
//   // })

//   // socket.on('typing', (user) => {
//   //   console.log(user)
//   // })
// }, [newMessage])
