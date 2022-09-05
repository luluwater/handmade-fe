import React from 'react'
import '../styles/style.scss'
import StoreBanner from '../components/Store/StoreBanner'
import StoreCard from '../components/Store/StoreCard'
import { Row, Col, Container } from 'react-bootstrap'
import { useGetStoreQuery } from '../services/storeApi'

const Store = () => {
  const { data, error, isLoading } = useGetStoreQuery('all')
  console.log(data)

  return (
    <>
      <StoreBanner />
      <div  className="mt-10 StorePage_container">
        <Row>
          <Col md={3} className="storeList_leftSide">
            這裡是左Bar
          </Col>
          <Col xs={12} md={9}>
            <Row className="mx-2 mb-5">
              {data?.map((item) => {
                return (
                  <Col xs={6} md={3} className="mb-5" key={item.id}>
                    <StoreCard
                      id={item.id}
                      name={item.name}
                      img={item.img}
                      category_en_name={item.category_en_name}
                    />
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Store
