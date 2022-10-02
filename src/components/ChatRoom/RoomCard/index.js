import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector, useDispatch } from 'react-redux'
import { useGetUserQuery } from '../../../services/userApi'

function RoomCard({ roomName, endpoint, roomImg }) {
  const navigate = useNavigate()
  const socket = useSelector((state) => state.chatReducer).socket

  const sliceAuth = useSelector((state) => state.authReducers)
  const userData = JSON.parse(localStorage.getItem('user'))?.user
  const { data: user } = useGetUserQuery(userData.id)

  const handleJoinRoom = async () => {
    await socket.emit('roomMsg', { user: user[0], roomName })
    await navigate(`/chat${endpoint}`)
  }

  return (
    <div className="d-flex flex-column position-relative">
      <div className="chat-room_img d-flex pb-md-1">
        <img
          onClick={handleJoinRoom}
          className="w-75 w-md-75 mx-auto "
          src={roomImg}
          alt="room card"
        />
      </div>
      <div
        className="chat-room_text d-flex justify-content-center align-items-center "
        onClick={handleJoinRoom}
      >
        <p className="text-center my- pb-md-1 m-0 fs-6">
          {roomName}
          <FontAwesomeIcon
            className="ms-3"
            icon="fa-solid fa-right-to-bracket"
          />
        </p>
      </div>
    </div>
  )
}

export default RoomCard
