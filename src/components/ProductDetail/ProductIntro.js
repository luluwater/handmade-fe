import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGetProductDetailQuery } from '../../services/productApi'
import { useParams } from 'react-router-dom'

import './ProductDetail.scss'

const ProductIntro = () => {
  const { productId } = useParams()
  const { data } = useGetProductDetailQuery(productId)

  return (
    <>
      <Row className="d-flex flex-column fw-bold detail_RWD">
        {data?.map((item) => {
          return (
            <Col className="d-flex detail_top" key={item.id}>
              <Col sm={12} lg={8}>
                <p className="detail_store">{item.store_name}</p>
                <h2 className="detail_name">{item.name}</h2>
                <h4 className="detail_price">NT.{item.price}</h4>
              </Col>
              <Col className="d-flex detail_score mt-6 ms-lg-12 col-sm-12 me-sm-0">
                <FontAwesomeIcon
                  icon="fa-solid fa-star"
                  size="sm"
                  className="detail_score_star"
                />
                <p className="detail_score_title mt-2 mx-2">總評分</p>
                <h2 className="detail_score_number">{item.score}</h2>
              </Col>
            </Col>
          )
        })}

        <Col className="d-flex detail_amount py-4">
          <div className="detail_amount_title">數量</div>
          <Button className="detail_amount_minus  detail_button">-</Button>
          <h5 className="detail_amount_number">1</h5>
          <Button className="detail_amount_plus  detail_button">+</Button>
          <Button className="detail_button detail_cart">加入購物車</Button>
          <Button className="detail_button detail_heart">
            <FontAwesomeIcon icon={'far fa-heart'} />
          </Button>
        </Col>
        {data?.map((item) => {
          return (
            <Col className="detail_intro" key={item.id}>
              <div style={{ whiteSpace: 'pre-wrap' }}>{item.intro}</div>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default ProductIntro
