import React from 'react'
import './ChatRoom.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useGetRoomsQuery } from '../../services/chatApi'

import FilterPage from '../User/FilterPage'
import RoomCard from './RoomCard'
import UserCard from '../User/UserCard'

const ChatRoom = () => {
  const { data } = useGetRoomsQuery('all')

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
                  <Col className="mt-0 mb-5" md={4}>
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
