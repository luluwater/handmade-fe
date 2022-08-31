// import '../About.scss'
import React from 'react'
import Coupon from '../../../assets/news/coupon_logo.png'
import Button from 'react-bootstrap/Button'
import { Row, Container } from 'react-bootstrap'

const NewsCoupon = () => {
  return (
    <>
      <Container className="mt-12">
        <Row>
          <div className="news_coupon_text d-flex justify-content-center">
            【 Yes, Girls！Let's 創造美好生活 】
            <br />
            專屬於女孩們的好康活動千萬別錯過！
          </div>
        </Row>
        <Row className="justify-content-center align-items-center m-12">
          <img
            className="news_coupon_img img-fluid"
            src={Coupon}
            alt="Coupon"
          />
          <Button className="mt-8 news_coupon_btn fw-bold" type="submit">
            領取折價券
          </Button>
        </Row>
      </Container>
    </>
  )
}
export default NewsCoupon
