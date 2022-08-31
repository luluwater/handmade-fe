import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faLine,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <ul className="list-unstyled d-flex justify-content-center align-items-center py-10 footer_icon_ul">
          <li>
            <FontAwesomeIcon
              icon={faFacebookF}
              size="2xl"
              className="footer_awesomeIcon"
              fixedWidth
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faYoutube}
              size="2xl"
              className="footer_awesomeIcon"
              fixedWidth
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faInstagram}
              size="2xl"
              className="footer_awesomeIcon"
              fixedWidth
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faLine}
              size="2xl"
              className="footer_awesomeIcon"
              fixedWidth
            />
          </li>
        </ul>

        <Row className="d-flex justify-content-center align-items-center footer_row1">
          <Col className="footer_cursor p-0">會員制度</Col>
          <Col className="footer_cursor p-0">服務條款</Col>
          <Col className="footer_cursor p-0">訂閱電子報</Col>
          <Col className="footer_cursor p-0" md={1}>
            品牌招募
          </Col>
        </Row>

        <Row className="d-flex justify-content-start align-items-center footer_row1 mt-9">
          <Col className="footer_shopping_note px-0" md={7}>
            <p className="">購物須知</p>

            <div className="d-flex mt-3 ">
              <p className="me-5 mb-2 footer_cursor">退換貨說明</p>
              <p className="me-5 mb-2 footer_cursor">常見問題</p>
              <p className="me-5 mb-2 footer_cursor">網站使用條款</p>
            </div>
            <div className="d-flex ">
              <p className="me-5 footer_cursor">隱私權政策</p>
              <p className="me-5 footer_cursor">物流配送</p>
              <p className="me-5 footer_cursor">付款說明</p>
            </div>
          </Col>
          <Col className="footer_shopping_note" md="auto">
            <p className="">聯絡我們</p>
            <div className="mt-3">
              <p className="me-5 mb-2">service@handmade.com</p>
            </div>
            <div>
              <p className="me-5">( 03 ) - 4567899</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Footer
