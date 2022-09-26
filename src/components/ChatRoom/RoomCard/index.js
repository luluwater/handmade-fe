import Card from 'react-bootstrap/Card'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector, useDispatch } from 'react-redux'

function RoomCard({ roomName, endpoint, roomImg }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const socket = useSelector((state) => state.chatReducer).socket

  const sliceAuth = useSelector((state) => state.authReducers)
  const userData = JSON.parse(localStorage.getItem('user'))?.user

  // const handleJoinRoom = async () => {
  //   await socket.emit('roomMsg', `${userData.account} 已加入 ${roomName}`)
  //   await navigate(`/chat${endpoint}`)
  // }
  const handleJoinRoom = async () => {
    await socket.emit('roomMsg', { user: userData, roomName })
    await navigate(`/chat${endpoint}`)
  }

  return (
    <Card className="rounded-3">
      <Card.Body className="px-0 py-0">
        <div className="max-h-md-175">
          <img
            className="max-h-175 h-md-auto w-100 object-fit "
            src={roomImg}
            alt="room card"
          />
        </div>
        <Card.Title className="text-center my-3">{roomName}</Card.Title>
        <div
          className="w-100 btn bg-secondary-dark text-white border-0 mx-auto"
          onClick={handleJoinRoom}
        >
          進入聊天室
          <FontAwesomeIcon
            className="text-white ms-3"
            icon="fa-solid fa-right-to-bracket"
          />
        </div>
      </Card.Body>
    </Card>
  )
}

export default RoomCard
