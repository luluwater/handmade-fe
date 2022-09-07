import React from 'react'
// import '../User.scss'
import UserCoupons from '../components/User/UserCoupons'
import { Row, Col, Form } from 'react-bootstrap'
// import UserPagination from '../components/User/UserPagination'

const UserCouponsPage = () => {
  return (
    <>
      <Col>
        <div className="user_orders_form mt-8">
          <Form.Group>
            <Row>
              <div className="my-5 ms-7 d-flex justify-content-start">
                <button className="user_orders_btn fw-bold me-5">全部</button>
                <button className="user_orders_btn fw-bold me-5">可使用</button>
                <button className="user_orders_btn fw-bold me-5">已失效</button>
              </div>
            </Row>
          </Form.Group>
          <UserCoupons />
        </div>
      </Col>
    </>
  )
}

export default UserCouponsPage
