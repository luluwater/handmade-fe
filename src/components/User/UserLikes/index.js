import React from 'react'
import { Row, Form, Container } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import { useState } from 'react'
import UserLikesCourses from './UserLikesCourses'
import UserLikesProducts from './UserLikesProducts'
// import UserLikesBlogs from './UserLikesBlogs'
import StickyBox from 'react-sticky-box'

export const UserLikes = () => {
  const [showUserLikesCourses, setUserLikesCourses] = useState(true)
  const [showUserLikesProducts, setUserLikesProducts] = useState(false)
  // const [showUserLikesBlogs, setUserLikesBlogs] = useState(false)
  return (
    <>
      <StickyBox>
        <Form.Group>
          <Row className="user_likes_sticky">
            <div className="user_likes_sticky my-5 ms-7 d-flex justify-content-start ">
              <button
                className="user_orders_btn fw-bold me-5"
                onClick={() => {
                  setUserLikesCourses(true)
                  setUserLikesProducts(false)
                  // setUserLikesBlogs(false)
                }}
              >
                課程收藏
              </button>
              <button
                className="user_orders_btn fw-bold me-5"
                onClick={() => {
                  setUserLikesCourses(false)
                  setUserLikesProducts(true)
                  // setUserLikesBlogs(false)
                }}
              >
                商品收藏
              </button>
              {/* <button
                className="user_orders_btn fw-bold me-5"
                onClick={() => {
                  setUserLikesCourses(false)
                  setUserLikesProducts(false)
                  setUserLikesBlogs(true)
                }}
              >
                文章收藏
              </button> */}
            </div>
          </Row>
        </Form.Group>
      </StickyBox>
      <div className="user_likes_bottom">
        {showUserLikesCourses && (
          <UserLikesCourses closeUserLikesCourses={setUserLikesCourses} />
        )}
        {showUserLikesProducts && (
          <UserLikesProducts closeUserLikesCourses={setUserLikesProducts} />
        )}
        {/* {showUserLikesBlogs && (
          <UserLikesBlogs closeUserLikesCourses={setUserLikesBlogs} />
        )} */}
      </div>
    </>
  )
}
export default UserLikes
