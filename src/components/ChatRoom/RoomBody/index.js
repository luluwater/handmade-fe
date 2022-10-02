import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { Button, Form, InputGroup } from 'react-bootstrap'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import {
  useGetRoomsQuery,
  useSendMessageMutation,
} from '../../../services/chatApi'
import { useGetUserQuery } from '../../../services/userApi'
import axios from 'axios'

const RoomBody = () => {
  const [message, setMessage] = useState('')
  const userData = JSON.parse(localStorage.getItem('user'))?.user
  const sliceAuth = useSelector((state) => state.authReducers)

  const { data } = useGetRoomsQuery('all')
  const { data: user } = useGetUserQuery(userData?.id)
  const [sendMessage, { isLoading }] = useSendMessageMutation()

  const { chatId } = useParams()
  const navigate = useNavigate()

  const msgBox = useRef()
  const chatImgRef = useRef()

  const currentChat = data?.filter((room) => {
    return room.endpoint === `/${chatId}`
  })

  const newMessage = useSelector((state) => state.chatReducer).newMessage
  const socket = useSelector((state) => state.chatReducer).socket

  const handleLeftRoom = async () => {
    socket.emit('left', { user: userData, room: currentChat?.[0] })
    socket.emit('leftRoom', { user: userData, room: currentChat?.[0] })
    navigate('/user/chat')
  }

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const [file, setFile] = useState()

  const handleSendMsg = (resImage) => {
    if (message.length < 1 && !resImage) return

    const isNotString = typeof resImage === 'object'

    const msg = {
      id: uuidv4(),
      content: !isNotString ? resImage : message,
      user_id: userData?.id || sliceAuth?.user.id,
      created_at: moment().format('YYYY-MM-DD h:mm:ss'),
      room_id: currentChat?.[0].id,
      room_title: currentChat?.[0].room_title,
      isCurrentUser: true,
      user: user[0],
    }

    sendMessage(msg)
    socket.emit('sendMsg', msg)

    setMessage('')
    setFile('')
  }

  const handleImageUpload = () => {
    const formData = new FormData()
    formData.append('files', file)

    axios
      .post('http://localhost:8080/api/chat/msgImage', formData)
      .then((response) => handleSendMsg(response.data))
      .catch((error) => console.log(error))
  }

  function scroll() {
    msgBox.current.scrollTop = msgBox?.current.scrollHeight
  }

  useEffect(() => {
    scroll()
  }, [handleSendMsg, newMessage])

  return (
    <>
      <div>
        <div className="position-relative justify-content-md-center my-md-3 d-md-flex align-items-center">
          <div
            onClick={handleLeftRoom}
            className="position-absolute top-50 translate-middle-y start-0 fs-1 d-md-none"
          >
            <FontAwesomeIcon icon=" fa-solid fa-angle-left mt-4 " />
          </div>
          <h5 className="m-0 text-center">{currentChat?.[0].room_title}</h5>
          <div
            onClick={handleLeftRoom}
            className="position-absolute bottom-0 end-0 d-none d-md-flex"
          >
            <FontAwesomeIcon icon="fa-solid fa-door-open" />
            <span className="ms-md-2">離開</span>
          </div>
        </div>
        <hr />

        <ListGroup
          ref={msgBox}
          className="chat_body max-h-350 d-flex flex-column gap-3 my-5"
        >
          {newMessage.map((m) => {
            const isCurrentUser = userData.id === m.user_id
            const isImg = m.content.includes('http://localhost:8080')
            return (
              <div key={m.message_id}>
                <div
                  className={`d-flex align-items-start gap-3 ${
                    isCurrentUser ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className="d-flex flex-column align-items-center">
                    <img
                      className="chat_avatar rounded-circle"
                      src={
                        m.user.avatar
                          ? m.user.avatar
                          : require('../../../assets/user/profile_2.png')
                      }
                      alt="user avatar"
                    />
                    <p className="m-0 mt-1">{m.user?.account}</p>
                  </div>
                  <ListGroup.Item
                    className={`w-25 rounded-2 ${
                      isCurrentUser
                        ? 'chat_body_text-self'
                        : 'chat_body_text-others'
                    }`}
                  >
                    {isImg ? <img src={m.content} alt="chat IMG" /> : m.content}
                  </ListGroup.Item>
                  <div className="text-muted fs-7 text-center align-self-end">
                    {moment(m.created_at).format('LT')}
                  </div>
                </div>
              </div>
            )
          })}
        </ListGroup>
      </div>

      <Form>
        <Form.Group className="m-2 d-flex align-items-center">
          <InputGroup>
            <Form.Control
              as="textarea"
              required
              value={message}
              className="rounded-start"
              onChange={handleChange}
              style={{ height: '20px', resize: 'none' }}
            />
          </InputGroup>
          <DropdownButton
            id={`dropdown-button-drop-up`}
            drop="up"
            variant="skin-brighter border-0"
          >
            <div className="d-flex align-items-center justify-content-center gap-4">
              <label className="cursor-pointer" htmlFor="file">
                <p className="h-100 d-flex align-items-center justify-content-center m-0">
                  上傳照片
                </p>
                <input
                  ref={chatImgRef}
                  className="d-none"
                  type="file"
                  name="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
              <FontAwesomeIcon
                onClick={() => chatImgRef.current.click()}
                icon="fa-solid fa-image"
              />
            </div>
            {file?.name ? (
              <div className="d-flex gap-3 mx-3">
                <p className="text-cut-1">{file.name}</p>

                <FontAwesomeIcon
                  onClick={handleImageUpload}
                  className="cursor-pointer"
                  icon="fa-solid fa-upload"
                />

                <FontAwesomeIcon
                  onClick={() => {
                    setFile('')
                  }}
                  className="cursor-pointer"
                  icon="fa-solid fa-times"
                />
              </div>
            ) : (
              ''
            )}

            {/* <Dropdown.Item className="d-flex justify-content-around align-items-center">
              邀請好友
              <FontAwesomeIcon icon="fa-solid fa-circle-info" />
            </Dropdown.Item> */}
          </DropdownButton>
          <Button
            onClick={handleSendMsg}
            disabled={isLoading}
            className="bg-skin-brighter border-0 border-start  rounded-end"
            type="button"
          >
            <FontAwesomeIcon icon="fa-regular fa-paper-plane" />
          </Button>
        </Form.Group>
      </Form>
    </>
  )
}

export default RoomBody
