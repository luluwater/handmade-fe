import React, { useState } from 'react'

import { Row, Col } from 'react-bootstrap'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './CourseDetail.scss'

function CoursePic({ id, category, store, img }) {
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
                <Row key={id}>
                  <SwiperSlide>
                    <Col>
                      <img
                        src={require(`../../assets/course/course_${category}_${id}/${item}`)}
                        alt=""
                        className="detail_swiperL_pic"
                      />
                    </Col>
                  </SwiperSlide>
                </Row>
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
                <div key={id}>
                  <SwiperSlide>
                    <img
                      src={require(`../../assets/course/course_${category}_${id}/${item}`)}
                      alt=""
                      className="detail_swiperR_pic"
                    />
                  </SwiperSlide>
                </div>
              )
            })}
          </Swiper>
        </Col>
        {/* ========== 右側大照片 ========== */}
      </Row>
    </>
  )
}
export default CoursePic
