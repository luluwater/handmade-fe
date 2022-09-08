import React from 'react'
import './CourseCartInfo.scss'
import Logo from '../../../assets/HANDMADE_LOGO.png'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                <p className="fs-4">訂購人資訊</p>
                <div className='CourseCartInfo_input'>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                  />
                  <label
                    className="form-check-label ps-1"
                    for="flexCheckDefault"
                  >
                    同會員資料
                  </label>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={3} className="CourseCartInfo_rightSide">
            1 of 1
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CourseCartInfo
