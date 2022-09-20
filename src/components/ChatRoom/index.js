import React from 'react'
import './ChatRoom.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useGetRoomsQuery } from '../../services/chatApi'

import FilterPage from '../User/FilterPage'
import RoomCard from './RoomCard'
import UserCard from '../User/UserCard'
import useSocket from '../../hooks/socketConnect'

import { useSelector, useDispatch } from 'react-redux'

const ChatRoom = () => {
  const { data } = useGetRoomsQuery('all')
  // const sliceAuth = useSelector((state) => state.authReducers)
  // const dispatch = useDispatch()
  // const userData = JSON.parse(localStorage.getItem('user'))?.user

  // useSocket(userData || sliceAuth?.user, dispatch)

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
              {data?.map((room) => {
                return (
                  <Col key={room.id} className="mt-0 mb-5" md={4}>
                    <RoomCard
                      endpoint={room.endpoint}
                      roomName={room.room_title}
                      roomImg={room.img_url}
                    />
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ChatRoom
