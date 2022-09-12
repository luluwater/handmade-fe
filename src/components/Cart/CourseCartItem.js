import React from 'react'
import './Cart.scss'
import { Row, Col } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'
import productImg from '../../assets/course/course_bakery_41/課程_花貓_基礎海綿蛋糕研修班_1.jpg'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CourseCartItem = () => {
  return (
    <Row className="text-center Cart_DetailTitle">
      <Col className="cart_imgBox d-flex align-items-center p-0" sm={3}>
        <img className="cart_img" src={productImg} alt="" />
        <p className="ps-2">陶藝手捏體驗</p>
      </Col>
      <Col sm={3} className="d-flex flex-column justify-content-center">
        <p className="mb-0"> 2022.02.02 </p>
        <p className="mb-0">13:00</p>
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
      <Col sm={1} className="d-flex justify-content-center align-items-center">
        <FontAwesomeIcon icon="fa-solid fa-trash" />
      </Col>
    </Row>
  )
}

export default CourseCartItem
