import Image1_1 from '../../assets/course/course_bakery_41/課程_花貓_基礎海綿蛋糕研修班_1.jpg'
import Image1_2 from '../../assets/course/course_bakery_41/課程_花貓_基礎海綿蛋糕研修班_3.png'
import Image1_3 from '../../assets/course/course_bakery_41/課程_花貓_基礎海綿蛋糕研修班_2.jpg'
import Image2_1 from '../../assets/course/course_floral_29/花藝＿課程＿花曜日＿藤編花籃＿1.jpg'
import Image2_2 from '../../assets/course/course_floral_29/花藝＿課程＿花曜日＿藤編花籃＿2.jpg'
import Image2_3 from '../../assets/course/course_floral_29/花藝＿課程＿花曜日＿藤編花籃＿3.jpg'
import Image3_1 from '../../assets/course/course_pottery_11/陶藝_課程_璐室_陶藝手捏體驗_1.jpg'
import Image3_2 from '../../assets/course/course_pottery_11/陶藝_課程_璐室_陶藝手捏體驗_2.jpg'
import Image3_3 from '../../assets/course/course_pottery_11/陶藝_課程_璐室_陶藝手捏體驗_2.jpg'
import Image4_1 from '../../assets/course/course_tufting_53/tufting_課程_小紅花Little Red Fafa_常規_kv_3.jpg'
import Image4_2 from '../../assets/course/course_tufting_53/tufting_課程_小紅花Little Red Fafa_常規_kv_1.jpg'
import Image4_3 from '../../assets/course/course_tufting_53/tufting_課程_小紅花Little Red Fafa_常規_kv_2.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container } from 'react-bootstrap'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import './CourseCard.scss'

function CourseCard() {
  const Info = [
    {
      img: [Image1_1, Image1_2, Image1_3],
      store: '花貓蛋糕實驗室',
      name: '基礎海綿蛋糕研修班',
      price: '$ 2200',
    },
    {
      img: [Image2_1, Image2_2, Image2_3],
      store: '花曜日 FlowerDays',
      name: '藤編花籃',
      price: '$ 2080',
    },
    {
      img: [Image3_1, Image3_2, Image3_3],
      store: '璐室 Lucid Dream',
      name: '陶藝手捏體驗',
      price: '$ 1200',
    },
    {
      img: [Image4_1, Image4_2, Image4_3],
      store: '小紅花',
      name: '常規-手作地毯課',
      price: '$ 3300',
    },
  ]

  return (
    <>
      <h4 className="mb-5 news_card_title text-center mt-10 mb-8 fw-bold">
        課程推薦
      </h4>

      <Container className="news_card mb-12 w-100 d-flex">
        {Info.map((v, i) => {
          return (
            <Col lg={3} sm={6} className="news_card_m px-3" key={v.img}>
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

export default CourseCard
