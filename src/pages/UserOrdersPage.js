import React from 'react'
import UserProductsOrders from '../components/User/UserProductsOrders'
import UserCourseOrders from '../components/User/UserCourseOrders'
import { Row, Col, Form } from 'react-bootstrap'
import { useState } from 'react'

const UserOrdersPage = () => {
  const [showUserProductOrders, setShowUserProductOrders] = useState(false)
  return (
    <>
      <Col>
        <div className="user_orders_form m-8">
          <Form.Group>
            <Row>
              <div className="my-5 ms-7 d-flex justify-content-start">
                {/* <button className="user_orders_btn fw-bold me-5">
                  全部訂單
                </button> */}
                <button
                  className="user_orders_btn fw-bold me-5"
                  onClick={() => {
                    setShowUserProductOrders(false)
                  }}
                >
                  預約課程
                </button>
                <button
                  className="user_orders_btn fw-bold me-5"
                  onClick={() => {
                    setShowUserProductOrders(true)
                  }}
                >
                  商品訂單
                </button>
              </div>
            </Row>
          </Form.Group>
          {showUserProductOrders ? (
            <UserProductsOrders />
          ) : (
            <UserCourseOrders />
          )}
        </div>
      </Col>
    </>
  )
}

export default UserOrdersPage
