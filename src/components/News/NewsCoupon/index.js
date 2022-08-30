// import '../About.scss'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Coupon from '../../../assets/news/coupon_logo.png'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';

const NewsCoupon = () => {
  return (
    <>
      <Container className="mt-12">
        <Row>
          <div className="news_Coupon_text d-flex justify-content-center">
            【 Yes, Girls！Let's 創造美好生活 】
            <br />
            專屬於女孩們的好康活動千萬別錯過！
          </div>
        </Row>
        <Row className="justify-content-center align-items-center">
          <img
            className="news_Coupon_img img-fluid"
            src={Coupon}
            alt="Coupon"
          />
          <Button className="news_Coupon_btn fw-bold " type="submit">
            領取折價券
          </Button>
        </Row>
      </Container>
    </>
  )
}
export default NewsCoupon
