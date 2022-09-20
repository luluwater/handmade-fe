import { useEffect } from 'react'
import io from 'socket.io-client'
import { BASE_URL } from '../utils/config'
import { useGetRoomsQuery } from '../services/chatApi'
import { setSocket } from '../slices/chat-slice'

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

  // console.log('user in useSocket', user)
  // console.log('data in useSocket', data)

  useEffect(() => {
    const socket = io(BASE_URL, {
      withCredentials: true,
    })

    dispatch(setSocket(socket))

    // socket.emit('join', user)
    socket.on('message', (msg) => {
      console.log(msg)
    })
    socket.on('typing', (user) => {
      console.log(user)
    })
  }, [])
}

export default useSocket
