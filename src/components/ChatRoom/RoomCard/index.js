import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function RoomCard({ roomName, endpoint, roomImg }) {
  return (
    <Card>
      <Card.Body className="px-0 py-0 rounded">
        <div className="max-h-md-175">
          <img
            className="max-h-md-175 w-100 object-fit"
            src={roomImg}
            alt="room card"
          />
        </div>
        <Card.Title className="text-center my-3">{roomName}</Card.Title>
        <div>
          <Link
            to={`/chat${endpoint}`}
            className="w-100 btn bg-secondary-dark text-white border-0 mx-auto"
          >
            進入聊天室
            <FontAwesomeIcon
              className="text-white ms-3"
              icon="fa-solid fa-right-to-bracket"
            />
          </Link>
        </div>
      </Card.Body>
    </Card>
  )
}

export default RoomCard
