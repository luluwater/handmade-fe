import { useEffect } from 'react'
import { Navigation } from 'swiper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from 'react-bootstrap/Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  addProductCart,
  getProductTotal,
} from '../../../slices/productCart-slice'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import './ProductCard.scss'
import {
  useAddUserFavoriteProductMutation,
  useRemoveUserFavoriteProductMutation,
} from '../../../services/productApi'

import cart from '../../../assets/cart.svg'
import { Link, useNavigate } from 'react-router-dom'
import {
  useAddUserFavoriteCourseMutation,
  useRemoveUserFavoriteCourseMutation,
} from '../../../services/courseApi'
import { scrollToTop } from '../../Filter/Paginate'
import { motion } from 'framer-motion'

//取得圖片路徑
function getImgsRouter(imgsName, category, productId, type) {
  const baseRouter = `assets/${type}/${type}`
  const router = `${baseRouter}_${category}_${productId}/`
  const routers = imgsName?.map((v) => {
    return router + v
  })
  return routers
}

function ProductCard({
  type,
  productId,
  storeId,
  categoryId,
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
  const navigate = useNavigate()

  const addToProductCart = () => {
    dispatch(addProductCart({ productId, name, imgs, price, category, amount }))
  }

  const ProductItem = useSelector(
    (state) => state.productCartReducer.productCartItem
  )
 

  useEffect(() => {
    dispatch(getProductTotal())
  }, [ProductItem, dispatch])

  // console.log(isFavorite)
  const [addUserFavoriteCourse] = useAddUserFavoriteCourseMutation()
  const [removeUserFavoriteCourse] = useRemoveUserFavoriteCourseMutation()

  const userId = JSON.parse(localStorage.getItem('user'))?.user.id


  return (
    <Card
      className="product_card border-0 bg-transparent mx-1 p-0 text-gray-dark"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-once="true"
    >
      <Swiper
        modules={[Navigation]}
        navigation
        effect={'slide'}
        speed={800}
        slidesPerView={1}
        loop
        className="card_swiper rounded shadow"
        onClick={() => {
          // console.log('click')
          navigate(`/${type}/detail/${productId}`)
        }}
        role="button"
      >
        {getImgsRouter(imgs, category, productId, type)?.map((v, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={require(`../../../${v}`)} alt={name} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Row className="justify-content-between align-items-center ">
        <Col xs={6} className="mt-2">
          <Link to={`/${type}/detail/${productId}`}>
            <p className="mb-1  text-truncate">
              <small>| {storeName} |</small>
            </p>
            <h6 className="mb-1 text-truncate">{name}</h6>
            <p className="text-primary fw-bold">${price}</p>
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
                  ? addUserFavoriteProduct({ productId, storeId, categoryId })
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

          {type === 'product' ? (
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
  )
}
export default ProductCard
