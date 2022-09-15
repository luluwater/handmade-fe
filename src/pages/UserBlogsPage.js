import React from 'react'
import UserBlogs from '../components/User/UserBlogs'
// import { Row, Col, Form } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import UserPagination from '../components/User/UserPagination'

const UserBlogsPage = () => {
  return (
    <>
      <div className="user_blogs_form mt-8">
        <UserBlogs />
      </div>
    </>
  )
}

export default UserBlogsPage
