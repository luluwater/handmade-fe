import React from 'react'
import Logo from '../../../assets/HANDMADE_LOGO.png'
import '../CourseCartInfo/CourseCartInfo.scss'
import './Checkout.scss'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const Checkout = () => {
  return (
    <>
      <Container fluid className="CheckoutPage">
        <Row>
          <Col xs={12} md={9} className="CheckoutPage_leftSide">
            <header className="CourseCartInfo_logoBox">
              <Link to="/">
                <img src={Logo} alt="HANDMADE_LOGO" />
              </Link>
            </header>
            <Row>
              <Col xs={12} md={2}></Col>
              <Col xs={12} md={10} className="CheckoutPage_leftBox">
                <p className="fs-4 CheckoutPage_title">
                  您的訂單已完成，感謝您的訂購
                </p>
                <p>您的訂單編號為 #123456</p>
                <p>課程報到確認信已寄至test@gmail.com</p>
                <div className="d-flex align-items-center CheckoutPage_noteBox">
                  <p className="CheckoutPage_note">
                    期待您與我們一起共享悠閒的手作時光
                    <br />
                    體驗課程當日注意事項：請放下手上的忙碌生活，將煩惱拋諸腦後
                    <br />
                    準備好跳脫城市喧囂，專注且享受於手作的時光。
                  </p>
                  <a href="/" className="CheckoutPage_BTN fs-5 text-center">
                    返回首頁
                  </a>
                </div>
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={3} className="CheckoutPage_rightSide">
            <p className="fs-4 CheckoutPage_title mb-3">購買細項</p>
            <div className="d-flex justify-content-between fs-5">
              <p>訂單編號</p>
              <p className="pe-4">123456</p>
            </div>
            <div className="d-flex justify-content-between fs-5">
              <p>訂購日期</p>
              <p className="pe-4">2022.02.02</p>
            </div>
            <div className="d-flex justify-content-between fs-5">
              <p>付款方式</p>
              <p className="pe-4">信用卡</p>
            </div>

            <div className="CheckoutPage_detailHr me-4 my-4"></div>

            <div className="fs-5 text-center">購買項目</div>

            <div className="mt-4 d-flex justify-content-between">
              <p className="fs-5">
                陶藝手捏體驗 <br />
                <span className="fs-6">2022/07/15 13:00</span>
              </p>
              <p className="fs-5 text-center ">x1</p>
              <p className="fs-5 text-center pe-4">$1200</p>
            </div>

            <div className="CheckoutPage_coupon d-flex justify-content-between">
              <p className="fs-5">折扣券折扣：</p>
              <p className="fs-5">0</p>
            </div>
            <div className="CheckoutPage_total d-flex justify-content-between">
              <strong className="fs-5">實付金額</strong>
              <strong className="fs-5">$2600</strong>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Checkout
