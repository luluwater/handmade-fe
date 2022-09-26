import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

import { Container } from 'react-bootstrap'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RoomBody from '../RoomBody'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {
  useGetRoomsQuery,
  useSendMessageMutation,
} from '../../../services/chatApi'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import ChatToast from '../../UI/ChatToast'
import { addMesssage } from '../../../slices/chat-slice'
import useSocket from '../../../hooks/socketConnect'
// import { scrollToTop } from '../../Filter/Paginate'

const Chat = () => {
  // scrollToTop()
  const { chatId } = useParams()
  const [message, setMessage] = useState('')
  const [sendMessage, { isLoading }] = useSendMessageMutation()

  const dispatch = useDispatch()
  const { data } = useGetRoomsQuery('all')

  const currentChat = data?.filter((room) => {
    return room.endpoint === `/${chatId}`
  })

  //兩個 user
  const sliceAuth = useSelector((state) => state.authReducers)
  const userData = JSON.parse(localStorage.getItem('user'))?.user
  useSocket(userData || sliceAuth?.user, dispatch)
  const chatReducer = useSelector((state) => state.chatReducer)
  const welcomeMsg = chatReducer.welcomeMsg

  return (
    <>
      <ChatToast text={welcomeMsg} />
      <Container data-aos="zoom-in-up" data-aos-duration="600" className="my-8">
        <Row>
          <Col className="bg-skin-dark" lg={3}>
            <div className="d-flex align-items-center gap-3 p-1 m-3 bg-skin-brighter">
              <img
                className="chat_avatar rounded-circle"
                src={
                  userData.avatar
                    ? userData.avatar
                    : require('../../../assets/user/profile_2.png')
                }
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

              {/* TODO: socket 裡拿用來顯示目前連線的使用者 */}
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
            className="chat_wrapper bg-skin-bright position-absolute position-md-relative py-3"
            lg={9}
          >
            <RoomBody data={currentChat} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Chat
