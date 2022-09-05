import Image1_1 from '../../assets/product/product_pottery_39/陶藝_商品_歡樂陶一家_造型把手杯_1.jpg'
import Image1_2 from '../../assets/product/product_pottery_39/陶藝_商品_歡樂陶一家_造型把手杯_2.jpg'
import Image1_3 from '../../assets/product/product_pottery_39/陶藝_商品_歡樂陶一家_造型把手杯_4.jpg'
import Image2_1 from '../../assets/product/product_pottery_49/陶藝_商品_純Object_夜_1.jpg'
import Image2_2 from '../../assets/product/product_pottery_49/陶藝_商品_純Object_夜_2.jpg'
import Image2_3 from '../../assets/product/product_pottery_49/陶藝_商品_純Object_夜_3.jpg'
import Image3_1 from '../../assets/product/product_bakery_106/商品_Welcome_bake來約會吧_阿爾薩斯蘋果塔_1.jpg'
import Image3_2 from '../../assets/product/product_bakery_106/商品_Welcome_bake來約會吧_阿爾薩斯蘋果塔_3.jpg'
import Image3_3 from '../../assets/product/product_bakery_106/商品_Welcome_bake來約會吧_阿爾薩斯蘋果塔_5.jpg'
import Image4_1 from '../../assets/product/product_floral_69/花藝＿商品＿草地學花＿乾燥花玻璃盒＿1.jpg'
import Image4_2 from '../../assets/product/product_floral_69/花藝＿商品＿草地學花＿乾燥花玻璃盒＿4.jpg'
import Image4_3 from '../../assets/product/product_floral_69/花藝＿商品＿草地學花＿乾燥花玻璃盒＿2.jpg'
import cart from '../../assets/cart.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container } from 'react-bootstrap'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import './ProductCard.scss'

function ProductCard() {
  const Info = [
    {
      img: [Image1_1, Image1_2, Image1_3],
      store: '歡樂陶一家',
      name: '造型把手杯',
      price: '$ 1500',
    },
    {
      img: [Image2_1, Image2_2, Image2_3],
      store: '純 Object',
      name: '夜 - 手作陶盤器',
      price: '$ 1750',
    },
    {
      img: [Image3_1, Image3_2, Image3_3],
      store: 'Welcome_Bake',
      name: '阿爾薩斯蘋果塔',
      price: '$ 780',
    },
    {
      img: [Image4_1, Image4_2, Image4_3],
      store: '草地學花',
      name: '乾燥花玻璃盒',
      price: '$ 1400',
    },
  ]

  return (
    <>
      <h4 className="mb-5 news_card_title text-center mt-10 mb-8  fw-bold">
        商品推薦
      </h4>

      <Container className="news_card mb-12 w-100 d-flex">
        {Info.map((v, i) => {
          return (
            <Col md={3} xs={6} className="news_card_m px-3" key={v.img}>
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
                  <h6 className="news_card_text m-1 fw-bold">{v.name}</h6>
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

export default ProductCard
