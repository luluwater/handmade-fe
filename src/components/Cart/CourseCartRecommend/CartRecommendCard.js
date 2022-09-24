import { useEffect } from 'react'
import cart from '../../../assets/cart.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col, Card } from 'react-bootstrap'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addProductCart,
  getProductTotal,
} from '../../../slices/productCart-slice'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import '../../Store/RecommendCard/recommendCard.scss'
import '../Cart.scss'

// 資料
const CartRecommendCard = ({
  type,
  cartIcon,
  productId,
  store,
  name,
  price,
  imgs,
  category,
  amount,
}) => {
  const dispatch = useDispatch()
  const addToProductCart = () => {
    dispatch(
      addProductCart({
        productId,
        name,
        imgs,
        price,
        category,
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

  return (
    <>
      <Card className="cartRecommend border-0 bg-transparent mx-1 p-0 text-gray-darker">
        <Swiper
          modules={[Navigation]}
          navigation
          effect={'slide'}
          speed={600}
          slidesPerView={1}
          loop
          className="card_swiper shadow"
        >
          {imgs?.map((item) => {
            return (
              <SwiperSlide key={item}>
                <img
                  src={require(`../../../assets/${type}/${type}_${category}_${productId}/${item}`)}
                  alt=""
                />
              </SwiperSlide>
            )
          })}
        </Swiper>

        <Row className="justify-content-between align-items-center ">
          <Col xs={6} className="mt-2">
            <p className="mb-1 text-truncate recommendCard_storeName ">
              <p className="m-0">| {store} |</p>
            </p>
            <h6 className="mb-1 text-truncate ps-1">{name}</h6>
            <p className="text-primary fw-bold ps-1">${price}</p>
          </Col>
          <Col className="text-end d-flex justify-content-end">
            <button className="bg-primary card_favorite border-0  rounded-circle me-2">
              <FontAwesomeIcon icon="far fa-heart" inverse size="lg" />
            </button>

            {cartIcon ? (
              <button
                className="bg-secondary card_favorite border-0  rounded-circle d-flex align-items-center justify-content-center"
                onClick={addToProductCart}
              >
                <img src={cart} alt="" className="cart" />
              </button>
            ) : (
              ''
            )}
          </Col>
        </Row>
      </Card>
    </>
  )
}
export default CartRecommendCard
