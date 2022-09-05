import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { EffectCoverflow, Pagination, Navigation } from 'swiper'
import './StoreSwiperKV.scss'
import Store_kv_1 from '../../../../src/assets/store/store_pottery_6/陶藝_璐室_KV-1.jpg'
import Store_kv_2 from '../../../../src/assets/store/store_pottery_6/陶藝_璐室_KV-2.jpg'
import Store_kv_3 from '../../../../src/assets/store/store_pottery_6/陶藝_璐室_KV-3.jpg'
import Store_kv_4 from '../../../../src/assets/store/store_pottery_6/陶藝_璐室_KV-4.jpg'
import Store_kv_5 from '../../../../src/assets/store/store_pottery_6/陶藝_璐室_KV-5.jpg'

const StoreSwiperKV = () => {
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
            <SwiperSlide>
              <img src={Store_kv_1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Store_kv_2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Store_kv_3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Store_kv_4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Store_kv_5} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default StoreSwiperKV
