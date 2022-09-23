import React from 'react'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'
import { useGetcategoryListQuery } from '../../../services/categoryApi'
import { Container, Row, Col } from 'react-bootstrap'
import { useGetStoreQuery } from '../../../services/storeApi'
import Card from 'react-bootstrap/Card'

const ShowCategory = () => {
  const { data } = useGetStoreQuery()

  let sliceData = data?.slice(7, 8)

  return (
    <Container>
      <Row>
        {sliceData?.map((item) => {
          return (
            <Card key={item.id} className="mb-2 w-75 mx-auto p-0">
              <Card.Header className="p-0">
                <img src={item.img_url} alt="new blog" />
              </Card.Header>

              <Card.Body className="text-dark">
                <Card.Title className="text-cut-1 fs-4 fw-bold">
                  {item.name}
                </Card.Title>
                <Card.Text className="text-cut fs-6">{item.slogan}</Card.Text>
              </Card.Body>
            </Card>
          )
        })}
      </Row>
    </Container>
  )
}

export default ShowCategory
