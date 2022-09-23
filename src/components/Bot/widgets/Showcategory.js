import React from 'react'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'
import { useGetcategoryListQuery } from '../../../services/categoryApi'
import { Container, Row, Col } from 'react-bootstrap'

const ShowCategory = () => {
  const { data } = useGetcategoryListQuery()
  console.log(data)

  return (
    <Container>
      <Row>
        {data?.map((item) => {
          return (
            <Col className="mb-2 text-center fs-4" md={4}>
              <Badge bg="gray-light text-dark">{item.category_name}</Badge>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default ShowCategory
