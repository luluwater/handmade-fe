import { React, useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './CourseDetail.scss'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function CourseIntro() {
  const info = [
    {
      id: 1,
      store: 'Round Round 陶藝工作室',
      name: '石丸波佐見燒 - 森之歌陶杯',
      price: 'NT.880',
      score: '4.8',
    },
  ]
  // const order = [{ date: '', time: [] }]

  const [startDate, setStartDate] = useState(new Date())

  return (
    <>
      <Row className="d-flex flex-column fw-bold detail_RWD">
        {/* ========== */}
        {info.map((v, i) => {
          return (
            <Col className="d-flex detail_top" key={v.id}>
              <Col sm={12} lg={8}>
                <p className="detail_store">{v.store}</p>
                <h2 className="detail_name">{v.name}</h2>
                <h4 className="detail_price">{v.price}</h4>
              </Col>
              <Col className="d-flex detail_score mt-6 ms-lg-12 col-sm-12 me-sm-0">
                <FontAwesomeIcon
                  icon="fa-solid fa-star"
                  size="sm"
                  className="detail_score_star"
                />
                <p className="detail_score_title mt-2 mx-2">總評分</p>
                <h2 className="detail_score_number">{v.score}</h2>
              </Col>
            </Col>
          )
        })}
        {/* ========== */}
        <Row className="d-flex">
          <Col className="d-flex flex-column mt-4 course_date col-lg-4 col-sm-12 align-items-center">
            <h6 className="course_order_title mt-1 mb-3">預約日期與時段</h6>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              inline
            />
          </Col>
          <Col className="d-flex flex-column detail_amount py-4 col-lg-7 align-items-center col-sm-12">
            <Col className="mt-lg-5 ms-lg-5 my-lg-2 ms-sm-9 mb-sm-2">
              <Button className="col-3 m-2 course_time_btn">10:00</Button>
              <Button className="col-3 m-2 course_time_btn">11:00</Button>
              <Button className="col-3 m-2 course_time_btn">13:00</Button>
              <Button className="col-3 m-2 course_time_btn">15:00</Button>
              <Button className="col-3 m-2 course_time_btn">17:00</Button>
              <Button className="col-3 m-2 course_time_btn">19:00</Button>
            </Col>
            <Col className="d-flex mb-2 ms-3">
              <div className="detail_amount_title">人數</div>
              <Button className="detail_amount_minus  detail_button">-</Button>
              <h5 className="detail_amount_number">1</h5>
              <Button className="detail_amount_plus  detail_button">+</Button>
            </Col>
            <Col className="d-flex course-total align-items-center my-2">
              <h5 className="ms-11 mt-2 col-3 course-total-title">總金額</h5>
              <h5 className=" mt-2 col-3 course-total-number">$2400</h5>
            </Col>
            <Col>
              <Button className="detail_button detail_cart ms-0">
                加入購物車
              </Button>
              <Button className="detail_button detail_heart">
                <FontAwesomeIcon icon={'far fa-heart'} />
              </Button>
            </Col>
          </Col>
        </Row>
      </Row>
    </>
  )
}
export default CourseIntro
