import React from 'react'
import { Col } from 'react-bootstrap'
import UserLikes from '../components/User/UserLikes'

export const UserLikesPage = () => {
  return (
    <>
      <Col>
        <div className="user_likes_form user_scroll m-8">
          <UserLikes />
        </div>
      </Col>
    </>
  )
}
export default UserLikesPage
