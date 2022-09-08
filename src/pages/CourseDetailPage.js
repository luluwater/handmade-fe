import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CourseHeader from '../components/CourseDetail/CourseHeader'
import CourseComment from '../components/CourseDetail/CourseComment'
import CourseCard from '../components/CourseDetail/CourseCard'
import CourseBlog from '../components/CourseDetail/CourseBlog'
import CourseText from '../components/CourseDetail/CourseText'

import '../styles/_custom_variables.scss'

const CourseDetailPage = () => {
  return (
    <>
      <Row>
        <CourseHeader />
      </Row>
      <Container>
        <CourseText />
        <CourseComment />
        <CourseCard />
        <CourseBlog />
      </Container>
    </>
  )
}

export default CourseDetailPage
