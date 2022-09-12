import React from 'react'
import './Cart.scss'
import { Row, Col } from 'react-bootstrap'
import productImg from '../../assets/product/product_pottery_26/陶藝_商品_璐室_旭語_盤器_1.jpg'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductCartItem = () => {
  return (
    <Row className="text-center Cart_DetailTitle">
      <Col className="cart_imgBox d-flex align-items-center p-0" sm={5}>
        <img className="cart_img" src={productImg} alt="" />
        <p className="ps-3">旭語</p>
      </Col>

      <Col
        sm={3}
        className="d-flex justify-content-center align-items-center Cart_amountBox"
      >
        <Button className="detail_amount_minus  detail_button">-</Button>
        <h5 className="detail_amount_number">1</h5>
        <Button className="detail_amount_plus  detail_button">+</Button>
      </Col>
      <Col sm={2} className="d-flex justify-content-center align-items-center">
        $1200
      </Col>
      <Col sm={2} className="d-flex justify-content-center align-items-center">
        <FontAwesomeIcon icon="fa-solid fa-trash" />
      </Col>
    </Row>
  )
}

export default ProductCartItem
