import React, { useState } from 'react'
import Image1 from '../../assets/store/store_metalwork＿2/金工_轉角金工_kv2.jpg'
import Image2 from '../../assets/store/store_pottery_7/陶藝_Round-Round_kv_3.jpg'
import Image3 from '../../assets/store/store_floral_14/花藝＿草地學花＿KV＿1.jpg'
import Image4 from '../../assets/store/store_leather_16/store_leather_HsuDaughter_kv3.jpg'
import Image5 from '../../assets/store/store_bakery_21/烘焙_花貓_kv_4.jpg'
import Image6 from '../../assets/store/store_tufting_28/tufting_Nu-Studio_kv_4.jpg'

import { Row, Col } from 'react-bootstrap'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './ProductDetail.scss'

function ProductPic() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const Pics = [
    { id: 1, img: Image1 },
    { id: 2, img: Image2 },
    { id: 3, img: Image3 },
    { id: 4, img: Image4 },
    { id: 5, img: Image5 },
    { id: 6, img: Image6 },
  ]
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
            {Pics.map((v, i) => {
              return (
                <SwiperSlide>
                  <Row>
                    <Col key={v.id}>
                      <img src={v.img} alt="" className="detail_swiperL_pic" />
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
            {Pics.map((v, i) => {
              return (
                <SwiperSlide>
                  <div key={v.id}>
                    <img src={v.img} alt="" className="detail_swiperR_pic" />
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
