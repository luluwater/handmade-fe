import React from 'react'
import { Row, Col } from 'react-bootstrap'
import RecommendCard from '../index'
import { useGetStoreCourseQuery } from '../../../../services/storeApi'

const CourseRecommend = (storeId) => {
  const { data, error, isLoading } = useGetStoreCourseQuery(storeId)
  console.log(data)
  return (
    <>
      <Row className="mb-5">
        <Col xs={6} className="d-flex justify-content-center">
          <RecommendCard />
        </Col>
        <Col xs={6} className="d-flex justify-content-center">
          <RecommendCard />
        </Col>
      </Row>
    </>
  )
}

export default CourseRecommend
