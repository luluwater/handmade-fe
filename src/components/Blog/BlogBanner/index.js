import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/autoplay'
import 'swiper/scss/effect-fade'
import '../Blog.scss'

import images from '../../../image'

const BlogBanner = () => {
  SwiperCore.use([Autoplay])
  return (
    <>
      <Swiper
        className=" h-100 mb-12"
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        loop={true}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: false }}
        onSlideChange={() => console.log('slide change')}
      >
        {images.map((img) => (
          <SwiperSlide key={img}>
            <div className=" position-relative d-flex justify-content-center align-items-center">
              <h1 className="blog_banner_text position-absolute text-white text-center">
                LATEST <br /> NEWS
              </h1>
              <img
                className="blog_banner_img img-fluid w-100 h-100 "
                src={img}
                alt="blog"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
export default BlogBanner
