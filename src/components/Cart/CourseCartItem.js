import React from 'react'
import './Cart.scss'
import { Row, Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useDispatch } from 'react-redux'
import {
  addCourseCart,
  removeCourseItem,
  deleteCourseItem,
} from '../../slices/courseCart-slice'

const CourseCartItem = ({ item }) => {
  const {
    id,
    stockId,
    name,
    img,
    price,
    category,
    date,
    time,
    quantity,
    totalPrice,
    stocks,
    stockWarning,
  } = item

  const dispatch = useDispatch()
  const incrementProduct = () => {
    dispatch(
      addCourseCart({
        id,
        stockId,
        name,
        img,
        price,
        category,
        quantity,
        date,
        time,
        stocks,
      })
    )
  }
  const decreaseCourse = () => {
    dispatch(removeCourseItem({ stockId }))
  }

  const deleteCourse = () => {
    dispatch(deleteCourseItem({ stockId }))
  }

  return (
    <>
      <Row className="text-center Cart_DetailTitle Cart_DetailTitleItemPc">
        <Col className="cart_imgBox d-flex align-items-center p-0" sm={3}>
          <img
            className="cart_img"
            src={require(`../../assets/course/course_${category}_${id}/${img}`)}
            alt={name}
          />
          <p className="ps-2">{name}</p>
        </Col>
        <Col sm={3} className="d-flex flex-column justify-content-center">
          <p className="mb-0"> {date} </p>
          <p className="mb-0">{time}</p>
        </Col>
        <Col
          sm={3}
          className="d-flex justify-content-center align-items-center Cart_amountBox"
        >
          <div className="d-flex justify-content-center align-items-center">
            <Button
              className="detail_amount_minus  detail_button"
              onClick={decreaseCourse}
            >
              -
            </Button>
            <h5 className="detail_amount_number">{quantity}</h5>
            <Button
              className="detail_amount_plus  detail_button"
              onClick={incrementProduct}
            >
              +
            </Button>
          </div>
          {stockWarning === '' ? (
            ''
          ) : (
            <div className="text-primary">{stockWarning}</div>
          )}
        </Col>
        <Col
          sm={2}
          className="d-flex justify-content-center align-items-center"
        >
          ${totalPrice}
        </Col>
        <Col
          sm={1}
          className="d-flex justify-content-center align-items-center"
        >
          <FontAwesomeIcon
            icon="fa-solid fa-trash"
            className="CartItem_trash"
            onClick={deleteCourse}
          />
        </Col>
      </Row>

      {/* ================================================= */}

      <Row className="text-center Cart_DetailTitle Cart_DetailTitleItemMobile">
        <Col className="cart_imgBox d-flex p-0 align-items-center" sm={4}>
          <img
            className="cart_img"
            src={require(`../../assets/course/course_${category}_${id}/${img}`)}
            alt={name}
          />
        </Col>
        <Col sm={7} className="d-flex flex-column align-items-start">
          <p className="mb-1 fs-5">{name}</p>
          <p className="mb-1 fs-5">
            {date} {time}
          </p>
          <p className="mb-1 fs-5">${totalPrice}</p>
          <div className="d-flex justify-content-center align-items-center Cart_amountBox">
            <div className="d-flex justify-content-center align-items-center">
              <Button
                className="detail_amount_minus  detail_button me-3"
                onClick={decreaseCourse}
              >
                -
              </Button>
              <h5 className="detail_amount_number">{quantity}</h5>
              <Button
                className="detail_amount_plus  detail_button ms-3"
                onClick={incrementProduct}
              >
                +
              </Button>
            </div>
            {stockWarning === '' ? (
              ''
            ) : (
              <div className="text-primary">{stockWarning}</div>
            )}
          </div>
        </Col>

        <Col sm={1} className="d-flex justify-content-end align-items-center">
          <FontAwesomeIcon
            icon="fa-solid fa-trash"
            size="xl"
            className="CartItem_trash"
            onClick={deleteCourse}
          />
        </Col>
      </Row>
    </>
  )
}

export default CourseCartItem
