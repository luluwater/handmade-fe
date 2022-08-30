import HomeNewStore from '../components/Home/HomeNewStore'
import HomeNewActive from '../components/Home/HomeNewActive'
import HomeHotCard from '../components/Home/HomeHotCard'
import { Row, Col } from 'react-bootstrap'

import React from 'react'

const Home = () => {
  return (
    <>
      <Row>
        <Col>
          <HomeNewStore />
        </Col>
        <Col>
          <HomeNewActive />
        </Col>
      </Row>
      <Row>
        <Col>
          <HomeHotCard />
        </Col>
      </Row>
    </>
  )
}

export default Home
