import React from 'react'
import { Container, Col } from 'react-bootstrap'
import UserBlogs from '../components/User/UserBlogs'

const UserBlogsPage = () => {
  return (
    <>
      <Container className="user_blogs_form user_scroll my-8">
        <Col>
          <UserBlogs />
        </Col>
      </Container>
    </>
  )
}

export default UserBlogsPage
