import { useEffect } from 'react'
import io from 'socket.io-client'
import { BASE_URL } from '../utils/config'
import { useGetRoomsQuery } from '../services/chatApi'
import {
  setSocket,
  addMesssage,
  setJoinRoomMsg,
  setWelcomeMsg,
} from '../slices/chat-slice'
import { useSelector } from 'react-redux'

function useSocket(user, dispatch) {
  const { data } = useGetRoomsQuery('all')

  const userData = JSON.parse(localStorage.getItem('user'))?.user
  const chatReducer = useSelector((state) => state.chatReducer)

  useEffect(() => {
    const socket = io(BASE_URL, {
      withCredentials: true,
    })
    dispatch(setSocket(socket))

    socket.on('roomMsg', (roomMsg) => {
      dispatch(setWelcomeMsg(roomMsg))
    })
    socket.on('sendMsg', (roomMsg) => {
      dispatch(addMesssage(roomMsg))
    })
  }, [dispatch])
}

export default useSocket
