import React from 'react'
import '../styles/style.scss'
import StoreBanner from '../components/Store/StoreBanner'
import StoreCard from '../components/Store/StoreCard'
import { Row, Col, Container } from 'react-bootstrap'

const Store = () => {
  return (
    <>
      <StoreBanner />
      <Container fluid className="mt-10 px-10 min-vw-50">
        <Row>
          <Col md={3} className='storeList_leftSide'>這裡是左Bar</Col>
          <Col xs={12} md={9}>
            <Row className="mx-2 mb-5">
              <Col xs={6} md={3} className='mb-5'>
                <StoreCard />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Store
