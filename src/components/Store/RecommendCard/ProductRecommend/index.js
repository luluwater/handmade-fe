import React from 'react'
import { Row, Col } from 'react-bootstrap'
import RecommendCard from '../index'

const ProductRecommend = () => {
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
export default ProductRecommend
