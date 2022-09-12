import React from 'react'
import './CourseCartInfo.scss'
import Logo from '../../../assets/HANDMADE_LOGO.png'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'

const CourseCartInfo = () => {
  return (
    <>
      <Container fluid className="CourseCartInfo">
        <Row>
          <Col xs={12} md={9} className="CourseCartInfo_leftSide">
            <header className="CourseCartInfo_logoBox">
              <Link to="/">
                <img src={Logo} alt="HANDMADE_LOGO" />
              </Link>
            </header>
            <Row>
              <Col xs={12} md={2} className="CourseCartInfo_previous_page">
                <a href="/">
                  <FontAwesomeIcon
                    icon="fa-solid fa-chevron-left"
                    className="CourseCartInfo_arrow"
                  />
                  修改購物車
                </a>
              </Col>
              <Col xs={12} md={10} className="CourseCartInfo_inputBox">
                <p className="fs-4 CourseCartInfo_inputTitle">訂購人資訊</p>
                <div className="CourseCartInfo_input">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    id="CourseCartInfoCheckBox"
                  />
                  <label
                    className="form-check-label ps-1"
                    for="CourseCartInfoCheckBox"
                  >
                    同會員資料
                  </label>
                </div>
                <form
                  action="
                "
                >
                  <div className="CourseCartInfo_input mt-3">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="姓名"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="請輸入預約者姓名"
                      />
                    </FloatingLabel>
                  </div>

                  <div className="CourseCartInfo_input">
                    <FloatingLabel controlId="floatingPassword" label="電話">
                      <Form.Control type="tel" placeholder="請輸入電話" />
                    </FloatingLabel>
                  </div>

                  <div className="CourseCartInfo_input">
                    <FloatingLabel controlId="floatingPassword" label="E-mail">
                      <Form.Control type="email" placeholder="請輸入信箱地址" />
                    </FloatingLabel>
                    <p className="CourseCartInfo_inputNotic pt-2">
                      課程購買成功後，將會寄送報到確認信，請填寫正確信箱
                      <br />
                      若未收到信件請確認收件匣是否被歸類為垃圾郵件
                    </p>
                  </div>
                  <div className="CourseCartInfo_textArea mt-5">
                    <FloatingLabel controlId="floatingTextarea2" label="備註">
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '120px' }}
                      />
                    </FloatingLabel>
                  </div>
                  <p className="fs-4 CourseCartInfo_inputTitle">付款方式</p>
                  <div className="CourseCartInfo_input mt-4">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="CourseCartATM"
                    />
                    <label
                      className="form-check-label ps-1"
                      for="CourseCartATM"
                    >
                      ATM匯款轉帳
                    </label>
                  </div>
                  <div className="CourseCartInfo_input my-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="CourseCartCard"
                    />
                    <label
                      className="form-check-label ps-1"
                      for="CourseCartCard"
                    >
                      信用卡支付（綠界金流）
                    </label>
                  </div>
                  <Button
                    variant="primary"
                    className="CourseCartInfo_BTN fs-5 mt-6 mb-10 text-center"
                  >
                    {' '}
                    結帳{' '}
                  </Button>
                </form>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={3} className="CourseCartInfo_rightSide">
            <p className="fs-4 CourseCartInfo_inputTitle mb-6">購買細項</p>
            <div className="CourseCartInfo_shoppingDetail mt-4 d-flex justify-content-between">
              <p className="fs-5">
                陶藝手捏體驗 <br />
                <span className="fs-6">2022/07/15 13:00</span>
              </p>
              <p className="fs-5 text-center ">x1</p>
              <p className="fs-5 text-center pe-4">$1200</p>
            </div>

            <div className="CourseCartInfo_shoppingDetail CourseCartInfo_coupon d-flex justify-content-between">
              <p className="fs-5">折扣券折扣：</p>
              <p className="fs-5">0</p>
            </div>
            <div className="CourseCartInfo_shoppingDetail CourseCartInfo_total d-flex justify-content-between">
              <strong className="fs-5">實付金額</strong>
              <strong className="fs-5">$2600</strong>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CourseCartInfo
