import React from 'react'
import images from '../../image'
// import Carousel from 'react-bootstrap/Carousel'
// import { motion } from 'framer-motion'
import './Blog.scss'
import { Link, Outlet } from 'react-router-dom'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useSwiper } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/autoplay'

const BlogLayout = () => {
  const swiper = useSwiper()

  console.log('hook swiper', swiper)

  return (
    <>
      <Swiper
        className="mb-12"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <div className="banner">123</div>
        {/* {images.map((img) => (
          <SwiperSlide className="banner" key={img}>
            <img className="banner-img" src={img} alt="" />
          </SwiperSlide>
        ))} */}
      </Swiper>
      <button className="btn btn-primary" onClick={() => swiper.slideNext()}>
        Slide to the next slide
      </button>

      <nav className="nav-bar text-center">
        <ul className="text-center list-unstyled">
          <li className="">
            <Link className="text-black btn btn-primary mb-2" to="/">
              go HOME
            </Link>
          </li>
          <li>
            <Link className="text-black btn btn-primary  mb-2" to="1234">
              BLOG DETAIL
            </Link>
          </li>
          <li>
            <Link className="text-black btn btn-primary  mb-2" to="edit">
              BLOg editor
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default BlogLayout
