import cart from '../../../assets/cart.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col, Card } from 'react-bootstrap'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import './recommendCard.scss'
import NewsCardImg4 from '../../../assets/store/store_bakery_21/烘焙_花貓_kv_1.jpg'

// 資料
const RecommendCard = () => {
  return (
    <>
      <Card className="recommendCard border-0 bg-transparent mx-1 p-0 text-gray-darker">
        <Swiper
          modules={[Navigation]}
          navigation
          effect={'slide'}
          speed={800}
          slidesPerView={1}
          loop
          className="card_swiper shadow"
        >
          <SwiperSlide>
            <img src={NewsCardImg4} alt="" />
          </SwiperSlide>
        </Swiper>

        <Row className="justify-content-between align-items-center ">
          <Col xs={6} className="mt-2">
            <p className="mb-1  text-truncate recommendCard_storeName">
              <p className='m-0'>| 璐室 |</p>
            </p>
            <h6 className="mb-1 text-truncate ps-1">璐室</h6>
            <p className="text-primary fw-bold ps-1">$1200</p>
          </Col>
          <Col className="text-end d-flex">
            <button className="bg-primary card_favorite border-0  rounded-circle me-2">
              <FontAwesomeIcon icon="fa-solid fa-heart" inverse size="lg" />
            </button>
            <button className="bg-secondary card_favorite border-0  rounded-circle d-flex align-items-center justify-content-center">
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
    </>
  )
}
export default RecommendCard
