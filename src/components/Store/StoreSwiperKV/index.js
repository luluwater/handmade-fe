import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { EffectCoverflow, Pagination, Navigation } from 'swiper'
import './StoreSwiperKV.scss'

const StoreSwiperKV = ({ id, category, kvImg }) => {
  return (
    <>
      <div className="d-flex justify-content-center ">
        <div className="StoreDetail_SwiperBox">
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation]}
            navigation={true}
            effect={'coverflow'}
            centeredSlides={true}
            slidesPerView={window.innerWidth < 576 ? 1 : 'auto'}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            className="storeDetail_swiper"
          >
            {kvImg?.map((item) => {
              return (
                <SwiperSlide key={item}>
                  <img
                    src={require(`../../../../src/assets/store/store_${category}_${id}/${item}`)}
                    alt=""
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default StoreSwiperKV
