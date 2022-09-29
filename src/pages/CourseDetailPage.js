import { React, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import CourseHeader from '../components/CourseDetail/CourseHeader'
import CourseComment from '../components/CourseDetail/CourseComment'
import CourseCard from '../components/CourseDetail/CourseCard'
import CourseBlog from '../components/CourseDetail/CourseBlog'
import CourseText from '../components/CourseDetail/CourseText'

import '../styles/_custom_variables.scss'

const CourseDetailPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Row className="w-100">
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
