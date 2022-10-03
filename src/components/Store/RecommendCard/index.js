import { useEffect } from 'react'
import cart from '../../../assets/cart.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col, Card } from 'react-bootstrap'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import './recommendCard.scss'
import { motion } from 'framer-motion'

import {
  addProductCart,
  getProductTotal,
} from '../../../slices/productCart-slice'

import {
  useAddUserFavoriteProductMutation,
  useRemoveUserFavoriteProductMutation,
} from '../../../services/productApi'

import {
  useAddUserFavoriteCourseMutation,
  useRemoveUserFavoriteCourseMutation,
} from '../../../services/courseApi'

import { scrollToTop } from '../../Filter/Paginate'

// 資料
const RecommendCard = ({
  type,
  cartIcon,
  productId,
  store,
  name,
  price,
  img,
  category,
  isFavorite,
  storeId,
  categoryId,
  amount,
}) => {
  const userId = JSON.parse(localStorage.getItem('user'))?.user.id
  const [addUserFavoriteCourse] = useAddUserFavoriteCourseMutation()
  const [removeUserFavoriteCourse] = useRemoveUserFavoriteCourseMutation()
  const [addUserFavoriteProduct] = useAddUserFavoriteProductMutation()
  const [removeUserFavoriteProduct] = useRemoveUserFavoriteProductMutation()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const addToProductCart = () => {
    dispatch(
      addProductCart({
        productId,
        name,
        imgs: img,
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
      <Card className="recommendCard border-0 bg-transparent mx-1 p-0 text-gray-darker">
        <Swiper
          modules={[Navigation]}
          navigation
          effect={'slide'}
          speed={600}
          slidesPerView={1}
          loop
          className="card_swiper shadow recommendCard_Link"
          onClick={() => {
            scrollToTop()
            navigate(`/${type}/detail/${productId}`)
          }}
        >
          {img?.map((item) => {
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
            <Link to={`/${type}/detail/${productId}`}>
              <p className="mb-1 text-truncate recommendCard_storeName ">
                <p className="m-0">| {store} |</p>
              </p>
              <h6 className="mb-1 text-truncate ps-1">{name}</h6>
              <p className="text-primary fw-bold ps-1">${price}</p>
            </Link>
          </Col>
          <Col className="text-end d-flex justify-content-end">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-primary card_favorite border-0  rounded-circle me-2"
              onClick={() => {
                if (!userId) return (window.location.href = '/login')
                if (isFavorite) {
                  type === 'product'
                    ? removeUserFavoriteProduct({
                        productId,
                        storeId,
                        categoryId,
                      })
                    : removeUserFavoriteCourse({
                        courseId: productId,
                        storeId,
                        categoryId,
                      })
                } else {
                  type === 'product'
                    ? addUserFavoriteProduct({
                        productId,
                        storeId,
                        categoryId,
                      })
                    : addUserFavoriteCourse({
                        courseId: productId,
                        storeId,
                        categoryId,
                      })
                }
              }}
            >
              <FontAwesomeIcon
                icon={isFavorite ? 'fa-solid fa-heart' : 'far fa-heart'}
                inverse
                size="lg"
              />
            </motion.button>

            {cartIcon ? (
              <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
                className="bg-secondary card_favorite border-0  rounded-circle d-flex align-items-center justify-content-center"
                onClick={addToProductCart}
              >
                <img src={cart} alt="" className="cart" />
              </motion.button>
            ) : (
              ''
            )}
          </Col>
        </Row>
      </Card>
    </>
  )
}
export default RecommendCard
