import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
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
      <Container fluid className="footer">
        <ul className="list-unstyled d-flex justify-content-center align-items-center footer_icon_ul">
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

        <Row className="d-flex footer_row1">
          <Col xs={6} md={3} className="footer_cursor footer_rwd_m">
            會員制度
          </Col>
          <Col xs={6} md={3} className="footer_cursor footer_rwd_m">
            服務條款
          </Col>
          <Col xs={6} md={3} className="footer_cursor footer_rwd_m">
            訂閱電子報
          </Col>
          <Col xs={6} md={1} className="footer_cursor footer_rwd_m">
            品牌招募
          </Col>
          <Col
            xs={6}
            md={6}
            className="footer_detail footer_shoppingNote  footerOrder_1"
          >
            <p>購物須知</p>
          </Col>
          <Col
            xs={6}
            md={4}
            className="footer_detail footer_rwd_m footerOrder_0"
          >
            聯絡我們
          </Col>
          <Col
            xs={6}
            md={6}
            className="footer_cursor d-flex footer_smallWord footer_shoppingNote_detail  footerOrder_2"
          >
            <p className="footer_cursor">退換貨說明</p>
            <p className="footer_cursor">常見問題</p>
            <p className="footer_cursor">網站使用條款</p>
          </Col>
          <Col xs={6} md={4} className="footer_smallWord  footerOrder_0">
            <p className="footerOrder_0">service@handmade.com</p>
          </Col>
          <Col
            xs={6}
            md={6}
            className="footer_cursor d-flex footer_smallWord footer_shoppingNote_detail  footerOrder_3"
          >
            <p className=" footer_cursor">隱私權政策</p>
            <p className=" footer_cursor">物流配送</p>
            <p className=" footer_cursor">付款說明</p>
          </Col>
          <Col xs={6} md={4} className="footer_smallWord ">
            <p className=" footerOrder_0">( 03 ) - 4567899</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer
