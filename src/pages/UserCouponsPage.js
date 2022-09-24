import React from 'react'
import UserCoupons from '../components/User/UserCoupons'
import { Col, Container } from 'react-bootstrap'

const UserCouponsPage = () => {
  return (
    <>
      <Container className="user_coupon_md">
        <div className="user_coupon_form user_scroll m-8">
          <UserCoupons />
        </div>
      </Container>
    </>
  )
}

export default UserCouponsPage
