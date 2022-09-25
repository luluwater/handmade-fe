import React, { useEffect } from 'react'
import './ChatRoom.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useGetRoomsQuery } from '../../services/chatApi'
import RoomCard from './RoomCard'
import useSocket from '../../hooks/socketConnect'
import { scrollToTop } from '../Filter/Paginate'

import { useSelector, useDispatch } from 'react-redux'

const ChatRoom = () => {
  scrollToTop()
  const sliceAuth = useSelector((state) => state.authReducers)
  const dispatch = useDispatch()
  const userData = JSON.parse(localStorage.getItem('user'))?.user
  useSocket(userData || sliceAuth?.user, dispatch)
  const chatReducer = useSelector((state) => state.chatReducer)
  const rooms = chatReducer.chatRooms
  const { data } = useGetRoomsQuery('all')

  return (
    <>
      <Container className="mb-8">
        <Row className="gap-4 gap-md-0 gap-bottom-4 mt-8">
          {data?.map((room) => {
            return (
              <Col key={room.id} className="mt-0 mb-md-5 mb-2" md={4}>
                <RoomCard
                  room={room}
                  endpoint={room.endpoint}
                  roomName={room.room_title}
                  roomImg={room.img_url}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default ChatRoom
