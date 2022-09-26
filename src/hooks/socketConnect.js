import { useEffect } from 'react'
import io from 'socket.io-client'
import { BASE_URL } from '../utils/config'
import { useGetRoomsQuery } from '../services/chatApi'
import {
  setSocket,
  addMesssage,
  setJoinRoomMsg,
  setWelcomeMsg,
  setFriends,
  setLeftRoom,
} from '../slices/chat-slice'

function useSocket(user, dispatch) {
  useEffect(() => {
    const socket = io(BASE_URL, {
      withCredentials: true,
    })
    dispatch(setSocket(socket))

    socket.on('roomMsg', (roomMsg) => {
      dispatch(setWelcomeMsg(roomMsg))
    })

    socket.on('joinData', async (data) => {
      await dispatch(setFriends(data.user))
    })

    socket.on('leftMsg', (leftMsg) => {
      dispatch(setWelcomeMsg(leftMsg))
    })

    socket.on('leftData', (leftData) => {
      dispatch(setLeftRoom(leftData))
    })

    // socket.on('leftData', (leftData) => {
    //   dispatch(setLeftRoom(leftData))
    // })

    socket.on('chat', async (chatMsg) => {
      await dispatch(addMesssage(chatMsg))
    })
  }, [dispatch])
}

export default useSocket
