import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductPic from './ProductPic'
import ProductIntro from './ProductIntro'

const ProductDetailPage = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Row style={{ width: '1600px' }}>
          <Col className="col-5">
            <ProductPic />
          </Col>
          <Col className="col-7">
            <ProductIntro />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default ProductDetailPage
