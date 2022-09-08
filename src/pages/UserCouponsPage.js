import React from 'react'
import UserCoupons from '../components/User/UserCoupons'
import { Col } from 'react-bootstrap'

const UserCouponsPage = () => {
  return (
    <>
      <Col>
        <div className="user_orders_form mt-8">
          <UserCoupons />
        </div>
      </Col>
    </>
  )
}

export default UserCouponsPage
