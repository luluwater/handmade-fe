import React from 'react'
import UserCoupons from '../components/User/UserCoupons'
import { Col } from 'react-bootstrap'

const UserCouponsPage = () => {
  return (
    <>
      <Col>
        <div className="user_coupon_form m-8">
          <UserCoupons />
        </div>
      </Col>
    </>
  )
}

export default UserCouponsPage
