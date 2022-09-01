import NewsCardImg4 from '../../../assets/news/News_pic4.jpg'
import NewsCardImg4_2 from '../../../assets/news/News_pic4_2.jpg'
import NewsCardImg4_3 from '../../../assets/news/News_pic4_3.jpg'
import NewsCardImg5 from '../../../assets/news/News_pic5.jpg'
import NewsCardImg5_2 from '../../../assets/news/News_pic5_2.jpg'
import NewsCardImg5_3 from '../../../assets/news/News_pic5_3.jpg'
import NewsCardImg6 from '../../../assets/news/News_pic6.jpg'
import NewsCardImg6_2 from '../../../assets/news/News_pic6_2.jpg'
import NewsCardImg6_3 from '../../../assets/news/News_pic6_3.jpg'
import NewsCardImg7 from '../../../assets/news/News_pic7.jpg'
import NewsCardImg7_2 from '../../../assets/news/News_pic7_2.jpg'
import NewsCardImg7_3 from '../../../assets/news/News_pic7_3.jpg'
import cart from '../../../assets/cart.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col, Container } from 'react-bootstrap'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import '../News.scss'

// 資料
const NewsCard = () => {
  return (
    <>
      <h4 className="mb-5 news_card_title text-center mt-8 fw-bold">
        限定課程推薦
      </h4>
      <Container className="news_card mb-12">
        <Row>
          <Col md={3} xs={6} className="news_card_m">
            <Swiper
              modules={[Navigation]}
              navigation
              effect={'slide'}
              speed={800}
              slidesPerView={1}
              loop
              className="news_card_swiper rounded shadow"
            >
              <SwiperSlide>
                <img
                  className="swiper-slide news_card_img"
                  src={NewsCardImg4}
                  alt="products"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="swiper-slide news_card_img"
                  src={NewsCardImg4_2}
                  alt="products"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="swiper-slide news_card_img"
                  src={NewsCardImg4_3}
                  alt="products"
                />
              </SwiperSlide>
            </Swiper>
            <div className="d-flex justify-content-between">
              <div>
                <p className="news_card_store m-2 text-truncate">
                  <small>| 浪花 |</small>
                </p>
                <h6 className="news_card_text m-1 fw-bold">粉橘高架花籃</h6>
                <h6 className="news_card_text text-primary fw-bold m-1">
                  $ 3600
                </h6>
              </div>
              <div className="d-flex align-items-center me-2">
                <button className="bg-primary news_card_favorite me-2">
                  <FontAwesomeIcon
                    icon="fa-solid fa-heart"
                    size="lg"
                    // icon={isFavorite ? 'fa-solid fa-heart' : 'far fa-heart'}
                    inverse
                  />
                </button>
                <button className="bg-secondary news_card_favorite border-0 rounded-circle">
                  <img src={cart} alt="" className="news_card_cart" />
                </button>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6} className="news_card_m">
            <Swiper
              modules={[Navigation]}
              navigation
              effect={'slide'}
              speed={800}
              slidesPerView={1}
              loop
              className="news_card_swiper rounded shadow"
            >
              <SwiperSlide>
                <img
                  className="swiper-slide news_card_img"
                  src={NewsCardImg5}
                  alt="products"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="swiper-slide news_card_img"
                  src={NewsCardImg5_2}
                  alt="products"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="swiper-slide news_card_img"
                  src={NewsCardImg5_3}
                  alt="products"
                />
              </SwiperSlide>
            </Swiper>
            <div className="d-flex justify-content-between">
              <div>
                <p className="news_card_store m-2 text-truncate">
                  <small>| Round Round |</small>
                </p>
                <h6 className="news_card_text m-1 fw-bold">理容院開張</h6>
                <h6 className="news_card_text text-primary fw-bold m-1">
                  $ 1000
                </h6>
              </div>
              <div className="d-flex align-items-center me-2">
                <button className="bg-primary news_card_favorite me-2">
                  <FontAwesomeIcon
                    icon="fa-solid fa-heart"
                    size="lg"
                    // icon={isFavorite ? 'fa-solid fa-heart' : 'far fa-heart'}
                    inverse
                  />
                </button>
                <button className="bg-secondary news_card_favorite border-0 rounded-circle">
                  <img src={cart} alt="" className="news_card_cart" />
                </button>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6} className="news_card_m">
            <Swiper
              modules={[Navigation]}
              navigation
              effect={'slide'}
              speed={800}
              slidesPerView={1}
              loop
              className="news_card_swiper rounded shadow"
            >
              <SwiperSlide>
                <img
                  className="swiper-slide news_card_img"
                  src={NewsCardImg6}
                  alt="products"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="swiper-slide news_card_img"
                  src={NewsCardImg6_2}
                  alt="products"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="swiper-slide news_card_img"
                  src={NewsCardImg6_3}
                  alt="products"
                />
              </SwiperSlide>
            </Swiper>
            <div className="d-flex justify-content-between">
              <div>
                <p className="news_card_store m-2 text-truncate">
                  <small>| HU A HU 呼啊呼 |</small>
                </p>
                <h6 className="news_card_text m-1 fw-bold">簇絨滿版抱枕</h6>
                <h6 className="news_card_text text-primary fw-bold m-1">
                  $ 2300
                </h6>
              </div>
              <div className="d-flex align-items-center me-2">
                <button className="bg-primary news_card_favorite me-2">
                  <FontAwesomeIcon
                    icon="fa-solid fa-heart"
                    size="lg"
                    // icon={isFavorite ? 'fa-solid fa-heart' : 'far fa-heart'}
                    inverse
                  />
                </button>
                <button className="bg-secondary news_card_favorite border-0 rounded-circle">
                  <img src={cart} alt="" className="news_card_cart" />
                </button>
              </div>
            </div>
          </Col>
          <Col md={3} xs={6} className="news_card_m">
            <Swiper
              modules={[Navigation]}
              navigation
              effect={'slide'}
              speed={800}
              slidesPerView={1}
              loop
              className="news_card_swiper rounded shadow"
            >
              <SwiperSlide>
                <img
                  className="swiper-slide news_card_img"
                  src={NewsCardImg7}
                  alt="products"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="swiper-slide news_card_img"
                  src={NewsCardImg7_2}
                  alt="products"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="swiper-slide news_card_img"
                  src={NewsCardImg7_3}
                  alt="products"
                />
              </SwiperSlide>
            </Swiper>
            <div className="d-flex justify-content-between">
              <div>
                <p className="news_card_store m-2 text-truncate">
                  <small>| Minifeast |</small>
                </p>
                <h6 className="news_card_text m-1 fw-bold">白鑽純銀項鍊</h6>
                <h6 className="news_card_text text-primary fw-bold m-1">
                  $ 4580
                </h6>
              </div>
              <div className="d-flex align-items-center me-2">
                <button className="bg-primary news_card_favorite me-2">
                  <FontAwesomeIcon
                    icon="fa-solid fa-heart"
                    size="lg"
                    // icon={isFavorite ? 'fa-solid fa-heart' : 'far fa-heart'}
                    inverse
                  />
                </button>
                <button className="bg-secondary news_card_favorite border-0 rounded-circle">
                  <img src={cart} alt="" className="news_card_cart" />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default NewsCard
