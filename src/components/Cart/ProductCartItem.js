import React from 'react'
import './Cart.scss'
import { useDispatch } from 'react-redux'
import {
  addProductCart,
  removeProductItem,
  deleteProductItem,
} from '../../slices/productCart-slice'
import { Row, Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductCartItem = ({ item }) => {
  const {
    productId,
    name,
    imgs,
    price,
    quantity,
    totalPrice,
    category,
    amount,
    stockWarning,
  } = item

  const dispatch = useDispatch()
  const incrementProduct = () => {
    dispatch(addProductCart({ productId, name, imgs, price, category, amount }))
  }
  const decreaseProduct = () => {
    dispatch(removeProductItem({ productId }))
  }
  const deleteProduct = () => {
    dispatch(deleteProductItem({ productId }))
  }

  return (
    <>
      <Row className="text-center Cart_DetailTitle Cart_DetailTitleItemPc">
        <Col className="cart_imgBox d-flex align-items-center p-0" sm={5}>
          <img
            className="cart_img"
            src={require(`../../assets/product/product_${category}_${productId}/${imgs}`)}
            alt={name}
          />
          <p className="ps-3">{name}</p>
        </Col>

        <Col
          sm={3}
          className="d-flex flex-column justify-content-center align-items-center Cart_amountBox"
        >
          <div className="d-flex justify-content-center align-items-center">
            <Button
              className="detail_amount_minus  detail_button"
              onClick={decreaseProduct}
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
          sm={2}
          className="d-flex justify-content-center align-items-center"
        >
          <FontAwesomeIcon
            icon="fa-solid fa-trash"
            className="CartItem_trash"
            onClick={deleteProduct}
          />
        </Col>
      </Row>

      {/* ================================================= */}

      <Row className="text-center Cart_DetailTitle Cart_DetailTitleItemMobile">
        <Col className="cart_imgBox d-flex align-items-center p-0" sm={3}>
          <img
            className="cart_img"
            src={require(`../../assets/product/product_${category}_${productId}/${imgs}`)}
            alt={name}
          />
        </Col>

        <Col
          className="cart_imgBox d-flex flex-column p-0 align-items-start justify-content-center"
          sm={4}
        >
          <p className="ps-2 fs-5">{name}</p>
          <p className="ps-2 fs-5">${totalPrice}</p>
        </Col>

        <Col
          sm={4}
          className="d-flex flex-column justify-content-center align-items-center Cart_amountBox"
        >
          <div className="d-flex justify-content-center align-items-center">
            <Button
              className="detail_amount_minus  detail_button me-3"
              onClick={decreaseProduct}
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
        </Col>

        <Col
          sm={1}
          className="d-flex justify-content-center align-items-center"
        >
          <FontAwesomeIcon
            icon="fa-solid fa-trash"
            size="xl"
            className="CartItem_trash"
            onClick={deleteProduct}
          />
        </Col>
      </Row>
    </>
  )
}

export default ProductCartItem
