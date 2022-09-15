import React from 'react'
import '../User.scss'
import { Row, Form } from 'react-bootstrap'
import { useState } from 'react'
// import moment from 'moment'
import AllCoupon from './AllCoupon'
import FailedCoupon from './failedCoupon'
import UsableCoupon from './usableCoupon'

export const UserCoupons = () => {
  const [showAllCoupon, setAllCoupon] = useState(true)
  const [showUsableCoupon, setUsableCoupon] = useState(false)
  return (
    <>
      <Form.Group>
        <Row>
          <div className="my-5 ms-7 d-flex justify-content-start">
            <button
              className="user_orders_btn fw-bold me-5"
              onClick={() => {
                setAllCoupon(true)
                setUsableCoupon(false)
              }}
            >
              全部
            </button>
            <button
              className="user_orders_btn fw-bold me-5"
              onClick={() => {
                setAllCoupon(false)
                setUsableCoupon(true)
              }}
            >
              可使用
            </button>
            <button
              className="user_orders_btn fw-bold me-5"
              onClick={() => {
                setAllCoupon(false)
                setUsableCoupon(false)
              }}
            >
              已失效
            </button>
          </div>
        </Row>
      </Form.Group>
      <Row className="user_coupon_row m-auto">
        {showAllCoupon ? (
          <AllCoupon />
        ) : showUsableCoupon ? (
          <UsableCoupon />
        ) : (
          <FailedCoupon />
        )}
      </Row>
    </>
  )
}

export default UserCoupons
