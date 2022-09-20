import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Tab from 'react-bootstrap/Tab'
import { Button, Form, InputGroup, Container } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EmojiPicker from 'emoji-picker-react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RoomBody from '../RoomBody'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {
  useGetRoomsQuery,
  useSendMessageMutation,
} from '../../../services/chatApi'
import { v4 as uuidv4 } from 'uuid'
import io from 'socket.io-client'
import { BASE_URL } from '../../../utils/config'
import { useSelector } from 'react-redux'
import moment from 'moment'

const Chat = () => {
  const { chatId } = useParams()
  const { data } = useGetRoomsQuery('all')

  //!可能不能這樣拿資料改後端篩選
  const currentChat = data?.filter((room) => {
    return room.endpoint === `/${chatId}`
  })
  //兩個 user
  const sliceAuth = useSelector((state) => state.authReducers)
  const userData = JSON.parse(localStorage.getItem('user'))?.user

  const [message, setMessage] = useState('')

  const [sendMessage, { isLoading }] = useSendMessageMutation()
  // TODO:EMOJI
  const [showPicker, setShowPicker] = useState(false)

  //TODO:INPUT 改變事件
  const handleChange = (e) => {
    setMessage(e.target.value)
  }
  const handleKeyDown = (e, imgUpload = false) => {
    // if (e.key === 'Enter') sendMessage(imgUpload)
  }

  //send msg
  const handleSendMsg = (imgUpload) => {
    if (message.length < 1 && !imgUpload) return
    console.log(currentChat?.[0].id)

    let msg = {
      id: uuidv4(),
      content: message,
      user_id: userData?.id || sliceAuth?.user.id,
      created_at: moment().format('YYYY-MM-DD h:mm:ss'),
      room_id: currentChat?.[0].id,
    }

    //送到 DB 裡面
    console.log(msg)
    sendMessage(msg)
    setMessage('')
  }

  const handleShowPicker = () => {
    setShowPicker((prev) => !prev)
  }

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

  return (
    <Container className="my-8">
      <Row>
        <Col className="bg-skin-dark" lg={3}>
          <div className="d-flex align-items-center gap-3 p-1 m-3 bg-skin-brighter">
            <img
              className="chat_avatar"
              src={require('../../../assets/user/profile_2.png')}
              alt="user avatar"
            />

            <span>{userData.account}</span>
          </div>
          <div className="p-1 m-3">
            {/* TODO: 從 SOCKET 裡面拿 */}
            <div className="d-flex align-items-center">
              <h5 className="text-gray-darker m-0">線上成員</h5>
              <div className="chat_amount fs-6 fw-bold ms-2 p-1 bg-dark rounded-circle text-white d-flex justify-content-center align-items-center">
                22
              </div>
            </div>
            <hr />

            {/* TODO: 用來顯示目前連線的使用者 */}
            <ListGroup className="d-flex gap-3 rounded-0">
              {/* {data?.map((room) => {
                return (
                  <ListGroup.Item
                    key={room.id}
                    className="d-flex align-items-center justify-content-between border-0 "
                    action
                    href={`#${room.id}`}
                    onClick={() => {
                      joinRoom(room)
                    }}
                  >
                    <img
                      className="chat_avatar rounded-2"
                      src={room.img_url}
                      alt="room pic"
                    />
                    <div>{room.room_title}</div>
                    <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                  </ListGroup.Item>
                )
              })} */}
            </ListGroup>
          </div>
        </Col>
        <Col
          className="chat_wrapper bg-skin-bright position-absolute position-md-relative"
          lg={9}
        >
          <RoomBody data={currentChat} />

          <Form>
            <Form.Group className="m-2 d-flex align-items-center">
              <InputGroup>
                <Form.Control
                  as="textarea"
                  required
                  value={message}
                  className="rounded-start"
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  style={{ height: '20px', resize: 'none' }}
                />
                <FontAwesomeIcon
                  onClick={handleShowPicker}
                  className="position-absolute top-50 start-98 translate-middle"
                  icon="fa-regular fa-face-smile"
                />
                {showPicker && <EmojiPicker />}
              </InputGroup>{' '}
              <DropdownButton
                id={`dropdown-button-drop-up`}
                drop="up"
                variant="skin-brighter border-0"
              >
                <Dropdown.Item
                  className="d-flex justify-content-around align-items-center"
                  eventKey="1"
                >
                  上傳圖片
                  <FontAwesomeIcon icon="fa-solid fa-plus" />
                </Dropdown.Item>
                <Dropdown.Item
                  className="d-flex justify-content-around align-items-center"
                  eventKey="1"
                >
                  個人資訊
                  <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                </Dropdown.Item>
              </DropdownButton>
              <Button
                onClick={handleSendMsg}
                disabled={isLoading}
                className="bg-skin-brighter border-0 border-start  rounded-end"
                type="submit"
              >
                <FontAwesomeIcon icon="fa-regular fa-paper-plane" />
              </Button>
            </Form.Group>
          </Form>
        </Col>{' '}
      </Row>{' '}
    </Container>
  )
}

export default Chat
