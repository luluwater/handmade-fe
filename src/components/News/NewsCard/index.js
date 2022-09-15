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
import { Col, Container } from 'react-bootstrap'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import '../News.scss'

//TODO: link & userlike & cart
function NewsCard() {
  const Info = [
    {
      img: [NewsCardImg4, NewsCardImg4_2, NewsCardImg4_3],
      store: '浪花',
      name: '粉橘高架花籃',
      price: '$ 3600',
    },
    {
      img: [NewsCardImg5, NewsCardImg5_2, NewsCardImg5_3],
      store: 'Round Round',
      name: '理容院開張',
      price: '$ 1000',
    },
    {
      img: [NewsCardImg6, NewsCardImg6_2, NewsCardImg6_3],
      store: 'HU A HU 呼啊呼',
      name: '簇絨滿版抱枕',
      price: '$ 2300',
    },
    {
      img: [NewsCardImg7, NewsCardImg7_2, NewsCardImg7_3],
      store: 'Minifeast',
      name: '白鑽純銀項鍊',
      price: '$ 4580',
    },
  ]
  return (
    <>
      <h4 className="mb-5 news_card_title text-center mt-8 fw-bold">
        限定課程推薦
      </h4>
      <Container className="news_card mb-12 w-100 d-flex">
        {Info.map((v, i) => {
          return (
            <Col md={3} xs={6} className="news_card_m px-3" key={v.name}>
              {/* ========== 商品照片 ========== */}

              <Swiper
                modules={[Navigation]}
                navigation
                effect={'slide'}
                speed={800}
                slidesPerView={1}
                loop={true}
                className="news_card_swiper rounded shadow"
              >
                {v.img.map((v2, i2) => {
                  return (
                    <SwiperSlide>
                      <img
                        key={v2[0]}
                        className="swiper-slide news_card_img"
                        src={v2}
                        alt="products"
                      />
                    </SwiperSlide>
                  )
                })}
              </Swiper>

              {/* ========== 商品照片 ========== */}
              <div className="d-flex justify-content-between">
                <div>
                  <p className="news_card_store m-2 text-truncate">
                    <small>| {v.store} |</small>
                  </p>
                  <a href="#/">
                    <h6 className="news_card_text m-1 fw-bold">{v.name}</h6>
                  </a>
                  <h6 className="news_card_text text-primary fw-bold m-1">
                    {v.price}
                  </h6>
                </div>

                {/* ========== 收藏 & 購物車 ========== */}

                <div className="d-flex align-items-center me-2">
                  <button className="bg-primary news_card_favorite me-2">
                    <FontAwesomeIcon
                      icon="far fa-heart"
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
              {/* ========== 收藏 & 購物車 ========== */}
            </Col>
          )
        })}
      </Container>
    </>
  )
}

export default NewsCard
