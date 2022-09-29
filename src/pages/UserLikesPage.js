import React from 'react'
import { Col, Container } from 'react-bootstrap'
import UserLikes from '../components/User/UserLikes'

export const UserLikesPage = () => {
  return (
    <>
      <Container className="user_likes_mdFrom">
        <Col>
          <div className="user_likes_form user_scroll m-8">
            <UserLikes />
          </div>
        </Col>
      </Container>
    </>
  )
}
export default UserLikesPage
