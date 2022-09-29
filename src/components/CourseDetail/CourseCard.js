import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container } from 'react-bootstrap'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { React, useEffect, useState } from 'react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import './CourseCard.scss'

import {
  useAddUserFavoriteCourseMutation,
  useRemoveUserFavoriteCourseMutation,
  useGetCourseListQuery,
} from '../../services/courseApi'

function getImgsRouter(imgName, category_en_name, id) {
  const baseRouter = `assets/course/course`
  const router = `${baseRouter}_${category_en_name}_${id}/`
  const routers = imgName?.map((v) => {
    return router + v
  })
  return routers
}

function CourseCard() {
  ////////// isFavorite //////////
  const [aaddUserFavoriteCourse] = useAddUserFavoriteCourseMutation()
  const [removeUserFavoriteCourse] = useRemoveUserFavoriteCourseMutation()
  const userId = JSON.parse(localStorage.getItem('user'))?.user.id

  const [card, setCard] = useState([])
  const { data } = useGetCourseListQuery()

  useEffect(() => {
    if (data) {
      if (card.length === 0) {
        let newData = [...data]?.sort(() => 0.5 - Math.random()).slice(0, 4)
        setCard(newData)
      } else {
        let newData = card.map((c) => {
          return data.find((product) => {
            return product.id === c.id
          })
        })
        setCard([...newData])
      }
    }
  }, [data])

  return (
    <>
      <h4 className="mb-5 course_detail_card_title text-center mt-10 mb-8 fw-bold">
        課程推薦
      </h4>

      <Container className="course_detail_card mb-12 w-100 d-flex">
        {card.map((v, i) => {
          return (
            <Col lg={3} sm={6} className="course_detail_card_m px-3" key={v.id}>
              {/* ========== 商品照片 ========== */}
              <a href={`/course/detail/${v.id}`}>
                <Swiper
                  modules={[Navigation]}
                  navigation
                  effect={'slide'}
                  speed={800}
                  slidesPerView={1}
                  loop={true}
                  className="course_detail_card_swiper rounded shadow"
                >
                  {getImgsRouter(v.imgName, v.category_en_name, v.id)?.map(
                    (v2, i2) => {
                      return (
                        <SwiperSlide key={v2}>
                          <img
                            className="swiper-slide course_detail_card_img"
                            src={require(`../../` + v2)}
                            alt="course"
                          />
                        </SwiperSlide>
                      )
                    }
                  )}
                </Swiper>
              </a>

              {/* ========== 商品照片 ========== */}
              <div className="d-flex justify-content-between">
                <div>
                  {/* <Link to={v.storeLink}> */}
                  <p className="course_detail_card_store m-2 text-truncate">
                    <small>| {v.store_name} |</small>
                  </p>
                  {/* </Link> */}
                  <a href={`/course/detail/${v.id}`}>
                    <h6 className="course_detail_card_text m-1 fw-bold">
                      {v.name}
                    </h6>
                  </a>
                  <h6 className="course_detail_card_text text-primary fw-bold m-1">
                    $ {v.price}
                  </h6>
                </div>

                {/* ========== 收藏 & 購物車 ========== */}

                <div className="d-flex align-items-center me-2">
                  <button
                    onClick={() => {
                      if (!userId) return (window.location.href = '/login')
                      if (v.isFavorite) {
                        removeUserFavoriteCourse({
                          courseId: v.id,
                          storeId: v.store_id,
                          categoryId: v.category_id,
                        })
                      } else {
                        aaddUserFavoriteCourse({
                          courseId: v.id,
                          storeId: v.store_id,
                          categoryId: v.category_id,
                        })
                      }
                    }}
                    className="bg-primary course_detail_card_favorite me-2"
                  >
                    <FontAwesomeIcon
                      size="lg"
                      icon={v.isFavorite ? 'fa-solid fa-heart' : 'far fa-heart'}
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
