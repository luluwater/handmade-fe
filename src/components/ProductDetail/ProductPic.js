import React, { useState } from 'react'

import { Row, Col } from 'react-bootstrap'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './ProductDetail.scss'

const ProductPic = ({ id, category, store, img }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <>
      <Row>
        {/* ========== 左側所有照片 ========== */}
        <Col lg={3} className="detail_swiperL p-0">
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={3}
            modules={[Thumbs]}
            className="mySwiper"
            direction={'vertical'}
          >
            {img?.map((item) => {
              return (
                <SwiperSlide>
                  <Row key={id}>
                    <Col>
                      <img
                        src={require(`../../assets/product/product_${category}_${id}/${item}`)}
                        alt=""
                        className="detail_swiperL_pic"
                      />
                    </Col>
                  </Row>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Col>
        {/* ========== 左側所有照片 ========== */}

        {/* ========== 右側大照片 ========== */}
        <Col lg={8} sm={12} className="detail_swiperR p-0">
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Navigation, Thumbs]}
            className="mySwiper2"
          >
            {img?.map((item) => {
              return (
                <SwiperSlide>
                  <div key={id}>
                    <img
                      src={require(`../../assets/product/product_${category}_${id}/${item}`)}
                      alt=""
                      className="detail_swiperR_pic"
                    />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Col>
        {/* ========== 右側大照片 ========== */}
      </Row>
    </>
  )
}
export default ProductPic
