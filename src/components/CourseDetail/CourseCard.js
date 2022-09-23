import Image1_1 from '../../assets/course/course_bakery_41/課程_花貓_基礎海綿蛋糕研修班_1.jpg'
import Image1_2 from '../../assets/course/course_bakery_41/課程_花貓_基礎海綿蛋糕研修班_3.png'
import Image1_3 from '../../assets/course/course_bakery_41/課程_花貓_基礎海綿蛋糕研修班_2.jpg'
import Image2_1 from '../../assets/course/course_floral_29/花藝＿課程＿花曜日＿藤編花籃＿1.jpg'
import Image2_2 from '../../assets/course/course_floral_29/花藝＿課程＿花曜日＿藤編花籃＿2.jpg'
import Image2_3 from '../../assets/course/course_floral_29/花藝＿課程＿花曜日＿藤編花籃＿3.jpg'
import Image3_1 from '../../assets/course/course_pottery_11/陶藝_課程_璐室_陶藝手捏體驗_1.jpg'
import Image3_2 from '../../assets/course/course_pottery_11/陶藝_課程_璐室_陶藝手捏體驗_2.jpg'
import Image3_3 from '../../assets/course/course_pottery_11/陶藝_課程_璐室_陶藝手捏體驗_3.jpg'
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

import {
  useAddUserFavoriteCourseMutation,
  useRemoveUserFavoriteCourseMutation,
  useGetCourseListQuery,
} from '../../services/courseApi'
export function scrollToTop() {
  window.scrollTo(0, 0)
}

function CourseCard() {
  const { data } = useGetCourseListQuery()
  const getData = data?.map((item) => {
    return item.isFavorite
  })
  const Info = [
    {
      courseId: '41',
      storeId: '21',
      categoryId: '5',
      img: [Image1_1, Image1_2, Image1_3],
      store: '花貓蛋糕實驗室',
      name: '基礎海綿蛋糕研修班',
      price: '2200',
      link: '/course/detail/41',
      storeLink: '/store/21',
      isFavorite: getData?.[40],
    },
    {
      courseId: '29',
      storeId: '15',
      categoryId: '3',
      img: [Image2_1, Image2_2, Image2_3],
      store: '花曜日 FlowerDays',
      name: '藤編花籃',
      price: '2080',
      link: '/course/detail/29',
      storeLink: '/store/15',
      isFavorite: getData?.[28],
    },
    {
      courseId: '11',
      storeId: '6',
      categoryId: '2',
      img: [Image3_1, Image3_2, Image3_3],
      store: '璐室 Lucid Dream',
      name: '陶藝手捏體驗',
      price: '1200',
      link: '/course/detail/11',
      storeLink: '/store/6',
      isFavorite: getData?.[10],
    },
    {
      courseId: '53',
      storeId: '27',
      categoryId: '6',
      img: [Image4_1, Image4_2, Image4_3],
      store: '小紅花',
      name: '常規-手作地毯課',
      price: '3300',
      link: '/course/detail/53',
      storeLink: '/store/27',
      isFavorite: getData?.[52],
    },
  ]
  ////////// isFavorite //////////
  const [aaddUserFavoriteCourse] = useAddUserFavoriteCourseMutation()
  const [removeUserFavoriteCourse] = useRemoveUserFavoriteCourseMutation()
  const userId = JSON.parse(localStorage.getItem('user'))?.user.id

  return (
    <>
      <h4 className="mb-5 course_detail_card_title text-center mt-10 mb-8 fw-bold">
        課程推薦
      </h4>

      <Container className="course_detail_card mb-12 w-100 d-flex">
        {Info.map((v, i) => {
          return (
            <Col
              lg={3}
              sm={6}
              className="course_detail_card_m px-3"
              key={v.courseId}
            >
              {/* ========== 商品照片 ========== */}
              <a href={v.link} onClick={scrollToTop}>
                <Swiper
                  modules={[Navigation]}
                  navigation
                  effect={'slide'}
                  speed={800}
                  slidesPerView={1}
                  loop={true}
                  className="course_detail_card_swiper rounded shadow"
                >
                  {v.img.map((v2, i2) => {
                    return (
                      <SwiperSlide key={v2}>
                        <img
                          className="swiper-slide course_detail_card_img"
                          src={v2}
                          alt="products"
                        />
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </a>

              {/* ========== 商品照片 ========== */}
              <div className="d-flex justify-content-between">
                <div>
                  {/* <Link to={v.storeLink}> */}
                  <p className="course_detail_card_store m-2 text-truncate">
                    <small>| {v.store} |</small>
                  </p>
                  {/* </Link> */}
                  <a href={v.link} onClick={scrollToTop}>
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
                          courseId: v.courseId,
                          storeId: v.storeId,
                          categoryId: v.categoryId,
                        })
                      } else {
                        aaddUserFavoriteCourse({
                          courseId: v.courseId,
                          storeId: v.storeId,
                          categoryId: v.categoryId,
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
