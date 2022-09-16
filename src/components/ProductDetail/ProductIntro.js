import { React, useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGetProductCommentQuery } from '../../services/productApi'
import { useParams } from 'react-router-dom'
// import Counter from './Counter'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../slices/counter-slice'
import { addProductCart, getProductTotal } from '../../slices/productCart-slice'

import {
  useAddUserFavoriteProductMutation,
  useRemoveUserFavoriteProductMutation,
} from '../../services/productApi'

import './ProductDetail.scss'

const ProductIntro = ({
  store,
  name,
  price,
  intro,
  imgs,
  category,
  amount,
  storeId,
  isFavorite,
  categoryId,
}) => {
  const { productId } = useParams()
  const { data } = useGetProductCommentQuery(productId)

  let totalSum = 0

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

  ////////// COUNTER //////////
  const dispatch = useDispatch()
  const quantity = useSelector((state) => state.counterReducer.value)

  const shopUrl = `/store/${storeId}`

  ////////// 加入購物車 //////////
  const addToProductCart = () => {
    dispatch(
      addProductCart({
        productId,
        name,
        imgs,
        price,
        category,
        quantity,
        amount,
      })
    )
  }
  const ProductItem = useSelector(
    (state) => state.productCartReducer.productCartItem
  )
  useEffect(() => {
    dispatch(getProductTotal())
  }, [ProductItem, dispatch])

////////// isFavorite //////////
  const [addUserFavoriteProduct] = useAddUserFavoriteProductMutation()
  const [removeUserFavoriteProduct] = useRemoveUserFavoriteProductMutation()

  return (
    <>
      <Row className="d-flex flex-column fw-bold detail_RWD">
        <Col className="d-flex detail_top">
          <Col sm={12} lg={8}>
            <a href={shopUrl}>
              <p className="detail_store">{store}</p>
            </a>
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
        {/* <Counter /> */}
        <Col className="d-flex detail_amount py-4">
          <div className="detail_amount_title">數量</div>
          <Button
            className="detail_amount_minus  detail_button"
            onClick={() => dispatch(decrement(1))}
          >
            -
          </Button>
          <h5 className="detail_amount_number">{quantity}</h5>
          <Button
            className="detail_amount_plus  detail_button"
            onClick={() => dispatch(increment(1))}
          >
            +
          </Button>
          <Button
            onClick={addToProductCart}
            className="detail_button detail_cart"
          >
            加入購物車
          </Button>
          <Button
            className="detail_button detail_heart"
            onClick={() => {
              if (isFavorite) {
                removeUserFavoriteProduct({
                  productId: productId,
                })
              } else {
                addUserFavoriteProduct({
                  productId: productId,
                  storeId: storeId,
                  categoryId: categoryId,
                })
              }
            }}
          >
            <FontAwesomeIcon
              icon={isFavorite ? 'fa-solid fa-heart' : 'far fa-heart'}
              inverse
            />
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
