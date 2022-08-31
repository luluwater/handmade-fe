import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import HomeNewStore from '../components/Home/HomeNewStore'
import HomeNewActive from '../components/Home/HomeNewActive'
import HomeHotCourse from '../components/Home/HomeHotCourse'
import HomeHotProduct from '../components/Home/HomeHotProduct'
import HomeCategory from '../components/Home/HomeCategory'

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
        <Row>
          <HomeCategory />
        </Row>
      </Container>
    </>
  )
}

export default Home
