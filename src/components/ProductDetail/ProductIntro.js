import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGetProductCommentQuery } from '../../services/productApi'
import { useParams } from 'react-router-dom'

import './ProductDetail.scss'

const ProductIntro = ({ id, store, name, price, intro }) => {
  const { productId } = useParams()
  const { data } = useGetProductCommentQuery(productId)

  let totalSum = 0
  // console.log('data', data)

  let score = data?.map((v) => {
    return Number(v.score)
  })

  const sumWithInitial = score?.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    totalSum
  )

  // 改用 score.length , 如果用 data.length 會一直跟後端要資料 -> 時間差問題 -> undefind
  const length = score?.length

  let average = sumWithInitial / length

  // console.log('score.length', length)
  // console.log('average', average)

  return (
    <>
      <Row className="d-flex flex-column fw-bold detail_RWD">
        <Col className="d-flex detail_top">
          <Col sm={12} lg={8}>
            <p className="detail_store">{store}</p>
            <h2 className="detail_name">{name}</h2>
            <h4 className="detail_price">NT.{price}</h4>
          </Col>
          <Col className="d-flex detail_score mt-6 ms-lg-12 col-sm-12 me-sm-0">
            <FontAwesomeIcon
              icon="fa-solid fa-star"
              size="sm"
              className="detail_score_star"
            />
            <p className="detail_score_title mt-2 mx-2">總評分</p>
            <h2 className="detail_score_number">{average.toFixed(1)}</h2>
          </Col>
        </Col>

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

        <Col className="detail_intro">
          <div style={{ whiteSpace: 'pre-wrap' }}>{intro}</div>
        </Col>
      </Row>
    </>
  )
}

export default ProductIntro
