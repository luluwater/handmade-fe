import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import { useState } from 'react'
import UserLikesCourses from '../components/User/UserLikesCourses'
import UserLikesProducts from '../components/User/UserLikesProducts'
import UserLikesBlogs from '../components/User/UserLikesBlogs'

export const UserLikesPage = () => {
  const [showUserLikesCourses, setUserLikesCourses] = useState(true)
  const [showUserLikesProducts, setUserLikesProducts] = useState(false)
  const [showUserLikesBlogs, setUserLikesBlogs] = useState(false)
  return (
    <>
      <Col>
        <div className="user_orders_form mt-8">
          <Form.Group>
            <Row>
              <div className="my-5 ms-7 d-flex justify-content-start">
                <button
                  className="user_orders_btn fw-bold me-5"
                  onClick={() => {
                    setUserLikesCourses(true)
                    setUserLikesProducts(false)
                    setUserLikesBlogs(false)
                  }}
                >
                  課程收藏
                </button>
                <button
                  className="user_orders_btn fw-bold me-5"
                  onClick={() => {
                    setUserLikesCourses(false)
                    setUserLikesProducts(true)
                    setUserLikesBlogs(false)

                  }}
                >
                  商品收藏
                </button>
                <button
                  className="user_orders_btn fw-bold me-5"
                  onClick={() => {
                    setUserLikesCourses(false)
                    setUserLikesProducts(false)
                    setUserLikesBlogs(true)
                  }}
                >
                  文章收藏
                </button>
              </div>
            </Row>
          </Form.Group>
          {showUserLikesCourses && (
            <UserLikesCourses closeUserLikesCourses={setUserLikesCourses} />
          )}
          {showUserLikesProducts && (
            <UserLikesProducts closeUserLikesCourses={setUserLikesProducts} />
          )}
          {showUserLikesBlogs && (
            <UserLikesBlogs closeUserLikesCourses={setUserLikesBlogs} />
          )}
        </div>
      </Col>
    </>
  )
}
export default UserLikesPage
