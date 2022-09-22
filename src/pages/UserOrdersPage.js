import React from 'react'
import UserProductsOrders from '../components/User/UserProductsOrders'
import UserCourseOrders from '../components/User/UserCourseOrders'
import { Row, Col, Form, Container } from 'react-bootstrap'
import { product } from '../slices/userProductDetails-slice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const UserOrdersPage = () => {
  const showUserProductOrders = useSelector(
    (state) => state.userProductDetailsReducer.setShowUserProductOrders
  )
  const dispatch = useDispatch()
  const productPage = () => {
    dispatch(product(true))
  }
  const orderPage = () => {
    dispatch(product(false))
  }
  return (
    <>
      <Container className="user_orders_mdForm">
        <div className="user_orders_form mx-8 mt-8 user_scroll">
          <Form.Group>
            <Row className="m-0">
              <Col className="my-5 ms-7 d-flex justify-content-start user_orders_mdBtn">
                <button
                  className="user_orders_btn fw-bold me-5"
                  onClick={() => {
                    orderPage()
                  }}
                >
                  預約課程
                </button>
                <button
                  className="user_orders_btn fw-bold me-5"
                  onClick={() => {
                    productPage()
                  }}
                >
                  商品訂單
                </button>
              </Col>
            </Row>
          </Form.Group>
          {showUserProductOrders ? (
            <UserProductsOrders />
          ) : (
            <UserCourseOrders />
          )}
        </div>
      </Container>
    </>
  )
}

export default UserOrdersPage
