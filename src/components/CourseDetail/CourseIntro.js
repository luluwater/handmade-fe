import { React, useState, useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGetCourseCommentQuery } from '../../services/courseApi'
import { useParams } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, maxStocks } from '../../slices/counter-slice'
import { addCourseCart, getCourseTotal } from '../../slices/courseCart-slice'

import {
  useAddUserFavoriteCourseMutation,
  useRemoveUserFavoriteCourseMutation,
} from '../../services/courseApi'

import moment from 'moment'

import './CourseDetail.scss'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const CourseIntro = ({
  id,
  store,
  name,
  price,
  storeId,
  img,
  category,
  stock,
  isFavorite,
  categoryId,
}) => {
  ////////// DATE //////////
  const [startDate, setStartDate] = useState(new Date())
  const [startTime, setStartTime] = useState('')

  ////////// GetDate //////////
  function handleOnChange(date) {
    setStartDate(date)
  }

  const newStockDate = stock?.map((item) => {
    return new Date(item.date)
  })

  ////////// Filter Date //////////
  const formatStockDate = stock?.map((item) => {
    const StockDate = item.date
    return moment(StockDate).format('YYYY-MM-DD')
  })
  const formatStartDate = moment(startDate).format('YYYY-MM-DD')
  // console.log('處理過的資料庫時段', formatStockDate)
  // console.log('處理過的選擇時段', formatStartDate)

  const filterResult = stock.filter((value) => {
    return moment(value.date).format('YYYY-MM-DD') === formatStartDate
  })
  // console.log('filterResult', filterResult)

  const { courseId } = useParams()
  const { data } = useGetCourseCommentQuery(courseId)

  ////////// SCORE //////////
  let totalSum = 0
  let score = data?.map((v) => {
    return Number(v.score)
  })

  const sumWithInitial = score?.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    totalSum
  )

  const length = score?.length
  let average = sumWithInitial / length
  ////////// SCORE //////////

  ////////// COUNTER //////////
  const dispatch = useDispatch()
  const quantity = useSelector((state) => state.counterReducer.value)
  const stockWarning = useSelector((state) => state.counterReducer.stockWarning)
  ////////// COUNTER //////////

  const shopUrl = `/store/${storeId}`

  const [stockId] = filterResult.map((value) => {
    return value.id
  })
  const [stocks] = filterResult.map((value) => {
    return value.stock
  })
  const date = formatStartDate
  const time = startTime
  ////////// 加入購物車 //////////
  const addToCourseCart = () => {
    dispatch(
      addCourseCart({
        id,
        store,
        stockId,
        name,
        img,
        price,
        category,
        date,
        time,
        quantity,
        stocks,
      })
    )
  }
  const CourseItem = useSelector(
    (state) => state.courseCartReducer.courseCartItem
  )
  useEffect(() => {
    dispatch(getCourseTotal())
  }, [CourseItem, dispatch])

  ////////// isFavorite //////////
  const [aaddUserFavoriteCourse] = useAddUserFavoriteCourseMutation()
  const [removeUserFavoriteCourse] = useRemoveUserFavoriteCourseMutation()

  return (
    <>
      <Row className="d-flex flex-column fw-bold detail_RWD align-items-center m-0">
        {/* ========== */}
        <Col className="d-flex detail_top">
          <Col sm={12} lg={8}>
            <a href={shopUrl}>
              <p className="detail_store">{store}</p>
            </a>
            <h2 className="detail_name">{name}</h2>
            <h4 className="detail_price">NT.{price}</h4>
          </Col>
          <Col className="d-flex detail_score mt-6 ms-lg-12 col-sm-12 me-sm-0">
            <FontAwesomeIcon
              icon="fa-solid fa-star"
              size="sm"
              className="detail_score_star"
            />
            <p className="detail_score_title mt-2 mx-2">總評分</p>
            <h2 className="detail_score_number">{average.toFixed(1)}</h2>
          </Col>
        </Col>
        {/* ========== */}
        <Row className="d-flex">
          <Col className="d-flex flex-column mt-5 course_date col-lg-4 col-sm-12 align-items-center">
            <h6 className="course_order_title mt-1 mb-3">預約日期與時段</h6>
            <DatePicker
              selected={startDate}
              onChange={handleOnChange}
              includeDates={newStockDate}
              inline
            />
          </Col>
          <Col className="d-flex flex-column detail_amount py-4 col-lg-7 align-items-center col-sm-12">
            <Col className="course_time_button">
              {filterResult.length > 0 ? (
                <Col className="mt-lg-6 ms-lg-5 my-lg-2 mb-sm-2">
                  {filterResult?.map((item) => {
                    return (
                      <Button
                        className="col-3 me-3 mb-3 course_time_btn"
                        onClick={() => {
                          setStartTime(item.time_start)
                          dispatch(maxStocks(item.stock))
                        }}
                      >
                        {item.time_start}
                      </Button>
                    )
                  })}
                </Col>
              ) : (
                <Col className="mt-lg-6 ms-lg-5 my-lg-2">
                  <Button className="col-3 me-3 mb-3 course_time_btn" disabled>
                    10:00
                  </Button>
                  <Button className="col-3 me-3 mb-3 course_time_btn" disabled>
                    11:00
                  </Button>
                  <Button className="col-3 me-3 mb-3 course_time_btn" disabled>
                    13:00
                  </Button>
                  <Button className="col-3 me-3 mb-3 course_time_btn" disabled>
                    15:00
                  </Button>
                  <Button className="col-3 me-3 mb-3 course_time_btn" disabled>
                    17:00
                  </Button>
                  <Button className="col-3 me-3 mb-3 course_time_btn" disabled>
                    19:00
                  </Button>
                </Col>
              )}
            </Col>
            <Col className="d-flex mb-2 ms-3">
              <div className="detail_amount_title">人數</div>
              <Button
                onClick={() => dispatch(decrement(1))}
                className="detail_amount_minus detail_button"
              >
                -
              </Button>
              <h5 className="detail_amount_number">{quantity}</h5>
              <Button
                onClick={() => dispatch(increment(1))}
                className="detail_amount_plus detail_button"
              >
                +
              </Button>
            </Col>
            {stockWarning === '' ? (
              ''
            ) : (
              <div className="text-primary course_detail_stockWarning">
                {stockWarning}
              </div>
            )}
            <Col className="d-flex course-total align-items-center my-2">
              <h5 className="ms-11 mt-2 col-3 course-total-title">總金額</h5>
              <h5 className=" mt-2 col-3 course-total-number">
                $ {quantity * price}
              </h5>
            </Col>
            <Col className="mt-1">
              {time !== '' ? (
                <Button
                  className="detail_button detail_cart ms-0"
                  onClick={addToCourseCart}
                >
                  加入購物車
                </Button>
              ) : (
                <Button className="detail_button detail_cart ms-0" disabled>
                  請選擇時段
                </Button>
              )}

              <Button
                onClick={() => {
                  if (isFavorite) {
                    removeUserFavoriteCourse({
                      courseId: id,
                      storeId,
                      categoryId,
                    })
                  } else {
                    aaddUserFavoriteCourse({
                      courseId: id,
                      storeId,
                      categoryId,
                    })
                  }
                }}
                className="detail_button detail_heart"
              >
                <FontAwesomeIcon
                  icon={isFavorite ? 'fa-solid fa-heart' : 'far fa-heart'}
                  inverse
                />
              </Button>
            </Col>
          </Col>
        </Row>
      </Row>
    </>
  )
}
export default CourseIntro
