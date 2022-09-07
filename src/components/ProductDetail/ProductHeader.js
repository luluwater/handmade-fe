import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductPic from './ProductPic'
import ProductIntro from './ProductIntro'
import './ProductDetail.scss'

const ProductDetailPage = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Row style={{ width: '1560px' }} className="py-5 borderButtom">
          <Col lg={6} sm={12}>
            <ProductPic />
          </Col>
          <Col lg={6} sm={12}>
            <ProductIntro />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default ProductDetailPage
