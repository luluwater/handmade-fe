import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ChatRoom.scss'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Tab from 'react-bootstrap/Tab'
import { Button, Form, InputGroup } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment/moment'
import EmojiPicker from 'emoji-picker-react'

import RoomNav from './RoomNav'
import io from 'socket.io-client'
import { BASE_URL } from '../../utils/config'

const ChatRoom = () => {
  const [open, setOpen] = useState(false)
  // TODO:EMOJI
  const [showPicker, setShowPicker] = useState(false)

  const socket = io(BASE_URL)

  const [text, setText] = useState('')

  socket.on('messageToClient', (msg) => {
    console.log('msg', msg)
  })

  //TODO:把訊息傳出去
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleShowPicker = () => {
    setShowPicker((prev) => !prev)
  }

  // const handleJoinRoom = (roomData) => {
  //   console.log(roomData)
  // }

  const [roomList, setRoomList] = useState([])
  const [chatBody, setChatBody] = useState([])

  // 3. 從後端拿到 rooms 的資料
  useEffect(() => {
    socket.on('rooms', (roomData) => {
      setRoomList(
        roomData?.map((room) => {
          return (
            <ListGroup.Item
              key={room.id}
              className="d-flex align-items-center justify-content-between border-0 "
              action
              onClick={() => {
                socket.emit('joinRoom', room)
              }}
              href={`#${room.endpoint}`}
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
        })
      )
      setChatBody(
        roomData?.map((room) => {
          return (
            <Tab.Pane key={room.id} eventKey={`#${room.endpoint}`}>
              {/* header */}
              <div className="position-relative text-center mt-3 ">
                {/* TODO:大廳畫面要漲怎樣?? */}
                <Link
                  to="#"
                  className="position-absolute bottom-0 start-0 fs-1 d-md-none"
                >
                  <FontAwesomeIcon icon="fa-solid fa-angle-left" />
                </Link>
                <h5>{room.room_title}</h5>
                {/* TODO: 從 SOCKET 裡面拿 */}
                <div>xx人在線上</div>
                <Link
                  to="#"
                  className="position-absolute bottom-0 end-0 d-none d-md-block"
                >
                  <FontAwesomeIcon icon="fa-solid fa-door-open" />
                  {/* TODO:大廳畫面要漲怎樣?? */}
                  <spna className="ms-md-2">離開</spna>
                </Link>
              </div>
              <hr />

              <ListGroup className="chat_body d-flex flex-column gap-3 my-5">
                {room.msg.map((m) => {
                  return (
                    <div key={m.id}>
                      <div className="d-flex align-items-start gap-3">
                        <img
                          className="chat_avatar"
                          src={require('../../assets/user/profile_2.png')}
                          alt="user avatar"
                        />
                        <ListGroup.Item className="chat_body_text-others w-25 rounded-2 ">
                          {m.content}
                        </ListGroup.Item>
                        <div className="text-muted fs-7 text-center align-self-end">
                          {moment(m.created_at).format('LT')}
                        </div>
                      </div>
                      {/* TODO: SELF SIDE style 判斷訊息使用者的 ID 是否與 SESSION 一致，上下的區分 */}
                      <div className="d-flex align-items-start gap-3 justify-content-end">
                        <div className="text-muted fs-7 text-center align-self-end">
                          {moment(m.created_at).format('LT')}
                        </div>
                        <ListGroup.Item className="chat_body_text-self w-25 rounded-2">
                          Cras justo o Cras justo o Cras justo o
                        </ListGroup.Item>{' '}
                        <img
                          className="chat_avatar"
                          src={require('../../assets/user/profile_2.png')}
                          alt="user avatar"
                        />
                      </div>
                    </div>
                  )
                })}
              </ListGroup>
            </Tab.Pane>
          )
        })
      )
    })
  }, [])

  return (
    <>
      <Container className="my-md-8 my-4">
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#1">
          <Row>
            <Col className="bg-skin-dark" lg={3}>
              <div className="d-flex align-items-center gap-3 p-1 m-3 bg-skin-brighter">
                <img
                  className="chat_avatar"
                  src={require('../../assets/user/profile_2.png')}
                  alt="user avatar"
                />
                {/* TODO:改成 CURRENT USER local 裡面拿*/}
                <span>黑色小花貓</span>
              </div>
              <div className="p-1 m-3">
                <div className="d-flex align-items-center">
                  <h5 className="text-gray-darker m-0">聊天室</h5>
                  <div className="chat_amount fs-6 fw-bold ms-2 p-1 bg-dark rounded-circle text-white d-flex justify-content-center align-items-center">
                    {roomList.length}
                  </div>
                </div>
                <hr />

                <ListGroup className="d-flex gap-3 rounded-0">
                  {roomList}
                </ListGroup>
              </div>
            </Col>
            <Col
              className="chat_wrapper bg-skin-bright position-absolute position-md-relative"
              lg={9}
            >
              <Tab.Content>{chatBody}</Tab.Content>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="m-2 d-flex align-items-center">
                  <InputGroup>
                    <Form.Control
                      as="textarea"
                      required
                      value={text}
                      className="rounded-start"
                      onChange={(e) => setText(e.target.value)}
                      style={{ height: '20px', resize: 'none' }}
                    />
                    <></>
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
                    className="bg-skin-brighter border-0 border-start  rounded-end"
                    type="submit"
                  >
                    <FontAwesomeIcon icon="fa-regular fa-paper-plane" />
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  )
}

export default ChatRoom
