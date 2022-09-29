import React from 'react'
import { Row, Col } from 'react-bootstrap'

import './CourseDetail.scss'
import { useGetCourseDetailQuery } from '../../services/courseApi'
import { useParams } from 'react-router-dom'

const CourseText = () => {
  const { courseId } = useParams()
  const { data } = useGetCourseDetailQuery(courseId)
  return (
    <>
      {data?.map((item) => {
        return (
          <Row key={item.id} className="mt-4">
            <Col className="d-flex align-items-baseline detail_info my-1">
              <h4 className="col-lg-2 col-sm-3">課程介紹</h4>
              <div
                className="detail_intro_C"
                style={{ whiteSpace: 'pre-wrap' }}
              >
                {item.intro}
              </div>
            </Col>
            <Col className="d-flex align-items-baseline detail_info my-1">
              <h4 className="col-lg-2 col-sm-3">課程時間</h4>
              <div
                className="detail_intro_C"
                style={{ whiteSpace: 'pre-wrap' }}
              >
                {item.course_time} 小時
              </div>
            </Col>
            <Col className="d-flex align-items-baseline detail_info my-1">
              <h4 className="col-lg-2 col-sm-3">上課地點</h4>
              <div
                className="detail_intro_C"
                style={{ whiteSpace: 'pre-wrap' }}
              >
                {item.address}
              </div>
            </Col>
            <Col className="d-flex align-items-baseline detail_info my-1">
              <h4 className="col-lg-2 col-sm-3">交通方式</h4>
              <div
                className="detail_intro_C"
                style={{ whiteSpace: 'pre-wrap' }}
              >
                {item.route}
              </div>
            </Col>
            <Col className="d-flex align-items-baseline detail_info my-1">
              <h4 className="col-lg-2 col-sm-3">注意事項</h4>
              <div
                className="detail_intro_C"
                style={{ whiteSpace: 'pre-wrap' }}
              >
                {item.note}
              </div>
            </Col>
          </Row>
        )
      })}
    </>
  )
}
export default CourseText
