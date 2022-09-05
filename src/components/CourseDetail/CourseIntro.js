import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './CourseDetail.scss'

function CourseIntro() {


  return (
    <>
      <Row className="d-flex flex-column fw-bold detail_RWD">
        {/* ========== */}
        <Col className="d-flex detail_top">
          <Col sm={12} lg={8}>
            <p className="detail_store">Round Round 陶藝工作室</p>
            <h2 className="detail_name">石丸波佐見燒 - 森之歌陶杯</h2>
            <h4 className="detail_price">NT.880</h4>
          </Col>
          <Col className="d-flex detail_score mt-6 ms-lg-12 col-sm-12 me-sm-0">
            <FontAwesomeIcon
              icon="fa-solid fa-star"
              size="sm"
              className="detail_score_star"
            />
            <p className="detail_score_title mt-2 mx-2">總評分</p>
            <h2 className="detail_score_number">4.8</h2>
          </Col>
        </Col>
        {/* ========== */}

        <Col className="d-flex detail_amount py-4">
          <div className="detail_amount_title">數量</div>
          <Button className="detail_amount_minus  detail_button">-</Button>
          <h5 className="detail_amount_number">1</h5>
          <Button className="detail_amount_plus  detail_button">+</Button>
          <Button className="detail_button detail_cart">加入購物車</Button>
          <Button className="detail_button detail_heart">
            <FontAwesomeIcon icon={'far fa-heart'} />
          </Button>
        </Col>
      
      </Row>
    </>
  )
}
export default CourseIntro
