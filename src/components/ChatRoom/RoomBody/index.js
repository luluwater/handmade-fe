import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment/moment'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import useSocket from '../../../hooks/socketConnect'
import { currentRoom } from '../../../slices/chat-slice'

const RoomBody = ({ data }) => {
  const [isCurrentUser, setIsCurrentUser] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userData = JSON.parse(localStorage.getItem('user'))?.user

  const newMessage = useSelector((state) => state.chatReducer).newMessage
  const socket = useSelector((state) => state.chatReducer).socket

  const handleLeftRoom = () => {
    socket.emit('roomMsg', `${userData.account} 已離開 ${data?.[0].room_title}`)
    navigate('/user/chat')
  }

  useEffect(() => {
    dispatch(currentRoom(data?.[0]))
  }, [dispatch])

  return (
    <>
      {data?.map((currentChat) => {
        return (
          <div key={currentChat.id}>
            <div className="position-relative text-center mt-3 ">
              <div className="position-absolute bottom-0 start-0 fs-1 d-md-none">
                <FontAwesomeIcon icon="fa-solid fa-angle-left" />
              </div>
              <h5>{currentChat?.room_title}</h5>
              <div
                onClick={handleLeftRoom}
                className="position-absolute bottom-0 end-0 d-none d-md-block"
              >
                <FontAwesomeIcon icon="fa-solid fa-door-open" />
                <span className="ms-md-2">離開</span>
              </div>
            </div>
            <hr />

            {isCurrentUser ? (
              <>
                <ListGroup className="chat_body d-flex flex-column gap-3 my-5">
                  {newMessage.map((m) => {
                    return (
                      <div key={m.message_id}>
                        <div className="d-flex align-items-start gap-3">
                          <img
                            className="chat_avatar"
                            src={require('../../../assets/user/profile_2.png')}
                            alt="user avatar"
                          />
                          <ListGroup.Item className="chat_body_text-others w-25 rounded-2 ">
                            {m.content}
                          </ListGroup.Item>
                          <div className="text-muted fs-7 text-center align-self-end">
                            {moment(m.created_at).format('LT')}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </ListGroup>
              </>
            ) : (
              <>
                <ListGroup className="chat_body d-flex flex-column gap-3 my-5">
                  {newMessage.map((m) => {
                    return (
                      <div key={m.message_id}>
                        <div className="d-flex align-items-start gap-3 justify-content-end">
                          <div className="text-muted fs-7 text-center align-self-end">
                            {moment(m.created_at).format('LT')}
                          </div>
                          <ListGroup.Item className="chat_body_text-self w-25 rounded-2">
                            {m.content}
                          </ListGroup.Item>
                          <img
                            className="chat_avatar"
                            src={require('../../../assets/user/profile_2.png')}
                            alt="user avatar"
                          />
                        </div>
                      </div>
                    )
                  })}
                </ListGroup>
              </>
            )}
          </div>
        )
      })}
    </>
  )
}

export default RoomBody

//  //TODO:先用狀態擋著
//  let finalMsg = isSliceMsg ? newMessage : currentChat?.msg
//  const finalMsg = currentChat?.msg.concat(newMessage)

//  console.log('finalMsg', finalMsg)
