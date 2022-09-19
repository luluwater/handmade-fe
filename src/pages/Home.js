import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import HomeNewStore from '../components/Home/HomeNewStore'
import HomeNewActive from '../components/Home/HomeNewActive'
import HomeHotCourse from '../components/Home/HomeHotCourse'
import HomeHotProduct from '../components/Home/HomeHotProduct'
import HomeCategory from '../components/Home/HomeCategory'
import HomeBlog from '../components/Home/HomeBlog'
import Video from '../components/Home/HomeVideo'

import { StickyContainer, Sticky } from 'react-sticky'
import HomeSticky from '../components/Home/HomeSticky'
import '../components/Home/HomeSticky.scss'

const Home = () => {
  return (
    <>
      <Video />
      <StickyContainer>
        <Sticky>
          {({ style }) => {
            return (
              <div style={style}>
                <HomeSticky />
              </div>
            )
          }}
        </Sticky>
        <Container>
          <Row id="home_news">
            <Col>
              <HomeNewStore />
            </Col>
            <Col>
              <HomeNewActive />
            </Col>
          </Row>
          <Row id="home_hot_course">
            <HomeHotCourse />
          </Row>
          <Row id="home_hot_product">
            <HomeHotProduct />
          </Row>
          <Row>
            <HomeCategory />
          </Row>
          <Row id="home_blog">
            <HomeBlog />
          </Row>
        </Container>
      </StickyContainer>
    </>
  )
}

export default Home
