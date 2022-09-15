import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CoursePic from './CoursePic'
import CourseIntro from './CourseIntro'
import './CourseDetail.scss'
import { useGetCourseDetailQuery } from '../../services/courseApi'
import { useParams } from 'react-router-dom'

const CourseDetailPage = () => {
  const { courseId } = useParams()
  const { data } = useGetCourseDetailQuery(courseId)
  return (
    <>
      <div className="d-flex justify-content-center">
        <Row style={{ width: '1560px' }} className="py-5 borderButtom">
          {data?.map((item) => {
            return (
              <Col lg={6} sm={12} key={item.id}>
                <CoursePic
                  id={item.id}
                  category={item.category_en_name}
                  img={item.img_name}
                />
              </Col>
            )
          })}
          {data?.map((item) => {
            return (
              <Col lg={6} sm={12} key={item.id}>
                <CourseIntro
                  id={item.id}
                  store={item.store_name}
                  name={item.name}
                  price={item.price}
                />
              </Col>
            )
          })}
        </Row>
      </div>
    </>
  )
}

export default CourseDetailPage
