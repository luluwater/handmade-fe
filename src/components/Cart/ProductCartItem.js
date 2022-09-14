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
  const { productId, name, imgs, price, quantity, totalPrice, category } = item

  const dispatch = useDispatch()
  const incrementProduct = () => {
    dispatch(addProductCart({ productId, name, imgs, price, category }))
  }
  const decreaseProduct = () => {
    dispatch(removeProductItem({ productId }))
  }
  const deleteProduct = () => {
    dispatch(deleteProductItem({ productId }))
  }

  return (
    <Row className="text-center Cart_DetailTitle">
      <Col className="cart_imgBox d-flex align-items-center p-0" sm={5}>
        <img
          className="cart_img"
          src={require(`../../assets/product/product_${category}_${productId}/${imgs}`)}
          alt=""
        />
        <p className="ps-3">{name}</p>
      </Col>

      <Col
        sm={3}
        className="d-flex justify-content-center align-items-center Cart_amountBox"
      >
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
      </Col>
      <Col sm={2} className="d-flex justify-content-center align-items-center">
        ${totalPrice}
      </Col>
      <Col sm={2} className="d-flex justify-content-center align-items-center">
        <FontAwesomeIcon
          icon="fa-solid fa-trash"
          className="CartItem_trash"
          onClick={deleteProduct}
        />
      </Col>
    </Row>
  )
}

export default ProductCartItem
