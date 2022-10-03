import React from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Row, Col, Card } from 'react-bootstrap'
import { useUserLikesCourseQuery } from '../../../../services/userApi'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import '../../User.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRemoveUserPageFavoriteCourseMutation } from '../../../../services/userApi'
import { motion } from 'framer-motion'

function dataImgRouter(img_name, category_en_name, course_id) {
  const baseRouter = 'assets/course/course'
  const router = `${baseRouter}_${category_en_name}_${course_id}/`
  const routers = img_name.map((v) => {
    return router + v
  })
  // console.log(routers)
  return routers
}

export const UserLikesCourses = () => {
  const userDataId = JSON.parse(localStorage.getItem('user'))?.user.id
  const { data } = useUserLikesCourseQuery(userDataId)
  const [removeUserFavoriteCourse] = useRemoveUserPageFavoriteCourseMutation()
  // console.log(data)
  return (
    <>
      {data === 0 ? (
        <div className="user_like_text user_like_none justify-content-center align-items-center d-flex py-3">
          目前沒有收藏的課程
        </div>
      ) : (
        <div className="user_like_md">
          <Col>
            <div className="d-flex justify-content-start ms-6 mt-3">
              <Row className="user_like gap-3 m-0">
                {data?.map((item) => {
                  return (
                    <Card
                      key={item.course_id}
                      className="user_like_card border-0 bg-transparent mx-1 p-0 text-gray-dark"
                    >
                      <Link to={`/course/detail/${item.course_id}`}>
                        <Swiper
                          modules={[Navigation]}
                          navigation
                          effect={'slide'}
                          speed={800}
                          slidesPerView={1}
                          loop
                          className="user_like_card_swiper rounded shadow"
                        >
                          {dataImgRouter(
                            item.img_name,
                            item.category_en_name,
                            item.course_id
                          ).map((v, i) => {
                            return (
                              <SwiperSlide key={uuidv4()}>
                                <img src={require(`../../../../${v}`)} alt="" />
                              </SwiperSlide>
                            )
                          })}
                        </Swiper>
                      </Link>
                      <Row className="justify-content-between align-items-center">
                        <Col xs={8} className="mt-2">
                          <p className="mb-1 text-truncate">
                            <small>| {item.store_name} |</small>
                          </p>
                          <Link to={`/course/detail/${item.course_id}`}>
                            <h6 className="mb-1 text-truncate">
                              {item.course_name}
                            </h6>
                          </Link>
                          <p className="text-primary fw-bold">${item.price}</p>
                        </Col>
                        <Col xs={4} className="d-flex align-items-end">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-primary user_like_course_card_favorite border-0 rounded-circle"
                            onClick={() => {
                              removeUserFavoriteCourse({
                                courseId: item.course_id,
                              })
                            }}
                          >
                            <FontAwesomeIcon
                              icon="fa-solid fa-heart"
                              inverse
                              size="sm"
                            />
                          </motion.button>
                        </Col>
                      </Row>
                    </Card>
                  )
                })}
              </Row>
            </div>
          </Col>
        </div>
      )}
    </>
  )
}
export default UserLikesCourses
