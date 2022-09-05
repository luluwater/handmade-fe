import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CoursePic from './CoursePic'
import CourseIntro from './CourseIntro'
import './CourseDetail.scss'

const CourseDetailPage = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Row style={{ width: '1560px' }} className="py-5 borderButtom">
          <Col lg={6} sm={12}>
            <CoursePic />
          </Col>
          <Col lg={6} sm={12}>
            <CourseIntro />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default CourseDetailPage
