import { Navigation } from 'swiper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from 'react-bootstrap/Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Row, Col } from 'react-bootstrap'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import './ProductCard.scss'
import {
  useAddUserFavoriteProductMutation,
  useRemoveUserFavoriteProductMutation,
} from '../../../services/productApi'

import cart from '../../../assets/cart.svg'
import { Link } from 'react-router-dom'
import {
  useAddUserFavoriteCourseMutation,
  useRemoveUserFavoriteCourseMutation,
} from '../../../services/courseApi'

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
}) {
  const [addUserFavoriteProduct] = useAddUserFavoriteProductMutation()
  const [removeUserFavoriteProduct] = useRemoveUserFavoriteProductMutation()
  const [addUserFavoriteCourse] = useAddUserFavoriteCourseMutation()
  const [removeUserFavoriteCourse] = useRemoveUserFavoriteCourseMutation()

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
          <Link to={`/product/detail/${productId}`}>
            <p className="mb-1  text-truncate">
              <small>| {storeName} |</small>
            </p>
            <h6 className="mb-1 text-truncate">{name}</h6>
            <p className="text-primary fw-bold">${price}</p>
          </Link>
        </Col>
        <Col className="text-end d-flex justify-content-end">
          <button
            className="bg-primary card_favorite border-0  rounded-circle me-2"
            onClick={() => {
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
          </button>
          {type === 'product' ? (
            <button className="bg-secondary card_favorite border-0  rounded-circle d-flex align-items-center justify-content-center">
              <img src={cart} alt="" className="cart" />
            </button>
          ) : (
            ''
          )}
        </Col>
      </Row>
    </Card>
  )
}
export default ProductCard
