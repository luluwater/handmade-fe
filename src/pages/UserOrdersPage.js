import React from 'react'
import UserProductsOrders from '../components/User/UserProductsOrders'
import UserCourseOrders from '../components/User/UserCourseOrders'
import { Row, Col, Form } from 'react-bootstrap'
import { useState } from 'react'
import { useGetUserProductOrdersQuery } from '../services/userApi'
// import UserPagination from '../components/User/UserPagination'

const UserOrdersPage = () => {
  const { data, error, isLoading } = useGetUserProductOrdersQuery()
  console.log('dataProductOrders', data)
  const [showUserProductOrders, setShowUserProductOrders] = useState(false)
  return (
    <>
      <Col>
        <div className="user_orders_form mt-8">
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
