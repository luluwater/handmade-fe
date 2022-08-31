import HomeNewStore from '../components/Home/HomeNewStore'
import HomeNewActive from '../components/Home/HomeNewActive'
import HomeHotCourse from '../components/Home/HomeHotCourse'
import { Row, Col, Container } from 'react-bootstrap'
import React from 'react'
import HomeHotProduct from '../components/Home/HomeHotProduct'

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <HomeNewStore />
          </Col>
          <Col>
            <HomeNewActive />
          </Col>
        </Row>
        <Row>
          <HomeHotCourse />
        </Row>
        <Row>
          <HomeHotProduct />
        </Row>
      </Container>
    </>
  )
}

export default Home
