import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductHeader from '../components/ProductDetail/ProductHeader'
import ProductComment from '../components/ProductDetail/ProductComment'
import ProductCard from '../components/ProductDetail/ProductCard'

import '../styles/_custom_variables.scss'

const ProductDetailPage = () => {
  return (
    <>
      <Row className="w-100">
        <ProductHeader />
      </Row>
      <Container>
        <ProductComment />
        <ProductCard />
      </Container>
    </>
  )
}

export default ProductDetailPage
