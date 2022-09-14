import { Navigation } from 'swiper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from 'react-bootstrap/Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addProductCart } from '../../../slices/productCart-slice'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import './ProductCard.scss'
import {
  useAddUserFavoriteProductMutation,
  useRemoveUserFavoriteProductMutation,
} from '../../../services/productApi'

import cart from '../../../assets/cart.svg'

function getImgsRouter(imgsName, category, productId) {
  const baseRouter = 'assets/product/product'
  const router = `${baseRouter}_${category}_${productId}/`
  const routers = imgsName.map((v) => {
    return router + v
  })
  // console.log(routers)
  return routers
}

function ProductCard({
  productId,
  imgs,
  category,
  storeName,
  name,
  price,
  isFavorite,
  amount,
}) {
  const [addUserFavoriteProduct] = useAddUserFavoriteProductMutation()
  const [removeUserFavoriteProduct] = useRemoveUserFavoriteProductMutation()
  const dispatch = useDispatch()

  const addToProductCart = () => {
    dispatch(addProductCart({ productId, name, imgs, price, category, amount }))
  }

  // console.log(isFavorite)

  return (
    <Card className="product_card border-0 bg-transparent mx-1 p-0 text-gray-dark">
      <Swiper
        modules={[Navigation]}
        navigation
        effect={'slide'}
        speed={800}
        slidesPerView={1}
        loop
        className="card_swiper rounded shadow"
      >
        {getImgsRouter(imgs, category, productId).map((v, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={require(`../../../${v}`)} alt="" />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Row className="justify-content-between align-items-center ">
        <Col xs={6} className="mt-2">
          <p className="mb-1  text-truncate">
            <small>| {storeName} |</small>
          </p>
          <h6 className="mb-1 text-truncate">{name}</h6>
          <p className="text-primary fw-bold">${price}</p>
        </Col>
        <Col className="text-end d-flex">
          <button
            className="bg-primary card_favorite border-0  rounded-circle me-2"
            onClick={() => {
              if (isFavorite) {
                removeUserFavoriteProduct({ productId })
              } else {
                addUserFavoriteProduct({ productId })
              }
            }}
          >
            <FontAwesomeIcon
              icon={isFavorite ? 'fa-solid fa-heart' : 'far fa-heart'}
              inverse
              size="lg"
            />
          </button>
          <button
            className="bg-secondary card_favorite border-0  rounded-circle d-flex align-items-center justify-content-center"
            onClick={addToProductCart}
          >
            <img src={cart} alt="" className="cart" />
            {/* <FontAwesomeIcon
              icon="fa-solid fa-cart-shopping"
              inverse
              size="lg"
            /> */}
          </button>
        </Col>
      </Row>
    </Card>
  )
}
export default ProductCard
