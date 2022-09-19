import React, { useState } from 'react'
import './ChatRoom.scss'
import { v4 as uuidv4 } from 'uuid'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Tab from 'react-bootstrap/Tab'
import { Button, Form, InputGroup } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EmojiPicker from 'emoji-picker-react'

import io from 'socket.io-client'
import { BASE_URL } from '../../utils/config'
import {
  useGetRoomsQuery,
  useSendMessageMutation,
} from '../../services/chatApi'
import RoomBody from './RoomBody'
import FilterPage from '../User/FilterPage'
import RoomCard from './RoomCard'
import UserCard from '../User/UserCard'

const ChatRoom = () => {
  const { data } = useGetRoomsQuery()
  const [sendMessage, { isLoading }] = useSendMessageMutation()

  // TODO:EMOJI
  const [showPicker, setShowPicker] = useState(false)

  const [message, setMessage] = useState('')
  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  let msg = {
    id: uuidv4(),
    content: message,
    user_id: '2',
    created_at: Date.now(),
    room_id: '1',
  }

  //TODO: JOIN ROOM 後再該 ROOM 裡面EMIT
  const handleSubmit = (e) => {
    e.preventDefault()

    socket.emit('chatMsg', msg)

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
  // const handleJoinRoom = (roomData) => {
  //   console.log(roomData)
  // }
  // const [data, setData] = useState([])
  const socket = io(BASE_URL, {
    withCredentials: true,
  })
  console.log(BASE_URL)

  //TODO: 用 redux 來拿到這些資料，並渲染到葉面上
  const joinRoom = (room) => {
    socket.emit('joinRoom', room)

    //加入房間的 msg
    socket.on('join-room-message', (msg) => {
      console.log('join-room-message', msg)
    })
    //歡迎加入房間的 msg 顯示是哪個使用者加入
    socket.on('room-broadcast', (msg) => {
      console.log('broadcast msg', msg)
    })
    //使用者在打字的 msg 搭配 input focus 來用
    socket.on('typing', (msg) => {
      console.log('typing', msg)
    })
  }

  return (
    <>
      <FilterPage />
      <Container className="mb-8">
        <Row>
          <Col md={3}>
            <UserCard />
          </Col>
          <Col md={9}>
            <Row className="gap-4 gap-md-0 gap-bottom-4 mt-8">
              <Col className="mt-0 mb-5" md={4}>
                <RoomCard roomName="金工人聚起來" />
              </Col>
              <Col className="mt-0 mb-5" md={4}>
                <RoomCard roomName="做泥玩陶藝" />
              </Col>
              <Col className="mt-0 mb-5" md={4}>
                <RoomCard roomName="溫馨花花世界" />
              </Col>
              <Col className="mt-0 mb-5" md={4}>
                <RoomCard roomName="溫馨花花世界" />
              </Col>
              <Col className="mt-0 mb-5" md={4}>
                <RoomCard roomName="引領潮流 tufting" />
              </Col>
              <Col className="mt-0 mb-5" md={4}>
                <RoomCard roomName="我要成為甜點師傅" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ChatRoom

// <Tab.Container id="list-group-tabs-example" defaultActiveKey="chat/1">
//         <Row>
//           <Col className="bg-skin-dark" lg={3}>
//             <div classNam  e="d-flex align-items-center gap-3 p-1 m-3 bg-skin-brighter">
//               <img
//                 className="chat_avatar"
//                 src={require('../../assets/user/profile_2.png')}
//                 alt="user avatar"
//               />
//               {/* TODO:改成 CURRENT USER local 裡面拿*/}
//               <span>黑色小花貓</span>
//             </div>
//             <div className="p-1 m-3">
//               <div className="d-flex align-items-center">
//                 <h5 className="text-gray-darker m-0">聊天室</h5>
//                 <div className="chat_amount fs-6 fw-bold ms-2 p-1 bg-dark rounded-circle text-white d-flex justify-content-center align-items-center">
//                   {data?.length}
//                 </div>
//               </div>
//               <hr />

//               <ListGroup className="d-flex gap-3 rounded-0">
//                 {data?.map((room) => {
//                   return (
//                     <ListGroup.Item
//                       key={room.id}
//                       className="d-flex align-items-center justify-content-between border-0 "
//                       action
//                       href={`#${room.id}`}
//                       onClick={() => {
//                         joinRoom(room)
//                       }}
//                     >
//                       <img
//                         className="chat_avatar rounded-2"
//                         src={room.img_url}
//                         alt="room pic"
//                       />
//                       <div>{room.room_title}</div>
//                       <FontAwesomeIcon icon="fa-solid fa-angle-right" />
//                     </ListGroup.Item>
//                   )
//                 })}
//               </ListGroup>
//             </div>
//           </Col>
//           <Col
//             className="chat_wrapper bg-skin-bright position-absolute position-md-relative"
//             lg={9}
//           >
//             <Tab.Content>
//               <RoomBody data={data} />
//             </Tab.Content>

//             <Form onSubmit={handleSubmit}>
//               <Form.Group className="m-2 d-flex align-items-center">
//                 <InputGroup>
//                   <Form.Control
//                     as="textarea"
//                     required
//                     value={message}
//                     className="rounded-start"
//                     onChange={handleChange}
//                     style={{ height: '20px', resize: 'none' }}
//                   />
//                   <FontAwesomeIcon
//                     onClick={handleShowPicker}
//                     className="position-absolute top-50 start-98 translate-middle"
//                     icon="fa-regular fa-face-smile"
//                   />
//                   {showPicker && <EmojiPicker />}
//                 </InputGroup>{' '}
//                 <DropdownButton
//                   id={`dropdown-button-drop-up`}
//                   drop="up"
//                   variant="skin-brighter border-0"
//                 >
//                   <Dropdown.Item
//                     className="d-flex justify-content-around align-items-center"
//                     eventKey="1"
//                   >
//                     上傳圖片
//                     <FontAwesomeIcon icon="fa-solid fa-plus" />
//                   </Dropdown.Item>
//                   <Dropdown.Item
//                     className="d-flex justify-content-around align-items-center"
//                     eventKey="1"
//                   >
//                     個人資訊
//                     <FontAwesomeIcon icon="fa-solid fa-circle-info" />
//                   </Dropdown.Item>
//                 </DropdownButton>
//                 <Button
//                   disabled={isLoading}
//                   className="bg-skin-brighter border-0 border-start  rounded-end"
//                   type="submit"
//                 >
//                   <FontAwesomeIcon icon="fa-regular fa-paper-plane" />
//                 </Button>
//               </Form.Group>
//             </Form>
//           </Col>
//         </Row>
//       </Tab.Container>
