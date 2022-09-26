import React from 'react'
import Logo from '../../../assets/HANDMADE_LOGO.png'
import '../CourseCartInfo/CourseCartInfo.scss'
import './Checkout.scss'
import { Link, useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useGetCourseOrderDetailQuery } from '../../../services/courseOrderApi'
import moment from 'moment'
import { Toast } from '../../UI/SwalStyle'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAddToScheduleMutation } from '../../../services/googleApi'

const CourseCheckout = () => {
  const { orderId } = useParams()
  const { data } = useGetCourseOrderDetailQuery(orderId)

  const [addToSchedule] = useAddToScheduleMutation()
  const calendarHandler = async (v) => {
    try {
      await addToSchedule(v)
      Toast.fire({
        icon: 'success',
        title: '已成功將行程加入Google行事曆',
      })
    } catch (e) {
      console.error(e)
    }
  }

  console.log('data', data)
  return (
    <>
      <Container fluid className="CheckoutPage">
        {data?.map((item) => {
          let date = moment(item.create_time).format('YYYY-MM-DD')
          let couponDiscount = Math.round(item.coupon_discount * 100) / 10
          return (
            <Row>
              <Col xs={12} md={9} className="CheckoutPage_leftSide">
                <header className="CourseCartInfo_logoBox">
                  <Link to="/">
                    <img src={Logo} alt="HANDMADE_LOGO" />
                  </Link>
                </header>
                <Row>
                  <Col xs={12} md={2}></Col>
                  <Col xs={12} md={10} className="CheckoutPage_leftBox">
                    <p className="fs-4 CheckoutPage_title">
                      您的訂單已完成，感謝您的訂購
                    </p>
                    <p>您的訂單編號為 {item.order_number}</p>
                    <p>課程報到確認信已寄至{item.email}</p>
                    <div className="d-flex align-items-center CheckoutPage_noteBox">
                      <p className="CheckoutPage_note">
                        期待您與我們一起共享悠閒的手作時光
                        <br />
                        體驗課程當日注意事項：請放下手上的忙碌生活，將煩惱拋諸腦後
                        <br />
                        準備好跳脫城市喧囂，專注且享受於手作的時光。
                      </p>
                      <a href="/" className="CheckoutPage_BTN fs-5 text-center">
                        返回首頁
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col xs={12} md={3} className="CheckoutPage_rightSide">
                <p className="fs-4 CheckoutPage_title mb-3">購買細項</p>
                <div className="CheckoutPage_detailTitle"></div>

                <div className="d-flex justify-content-between fs-5">
                  <p>訂單編號</p>
                  <p className="pe-4">{item.order_number}</p>
                </div>
                <div className="d-flex justify-content-between fs-5">
                  <p>訂購日期</p>
                  <p className="pe-4">{date}</p>
                </div>
                <div className="d-flex justify-content-between fs-5">
                  <p>付款方式</p>
                  <p className="pe-4">{item.payment_name}</p>
                </div>

                <div className="CheckoutPage_detailHr me-4 my-4"></div>

                <h6 className="fs-5 text-center ">購買項目</h6>

                {item.orderDetail?.map((v) => {
                  let courseDate = moment(v.date).format('YYYY-MM-DD')
                  const newItem = { ...v, date: courseDate }
                  return (
                    <div className="mt-4 d-flex justify-content-between CheckoutPage_Item">
                      <p className="fs-5">
                        {v.name} <br />
                        <span className="fs-6">{newItem.date}</span>
                      </p>
                      <p className="fs-5 text-center ">
                        ${v.price} x{v.amount}
                        <Button
                          className="CheckoutPage_calendar"
                          onClick={(e) => {
                            e.preventDefault()
                            calendarHandler(newItem)
                            console.log('newItem', newItem)
                          }}
                        >
                          <FontAwesomeIcon
                            icon="fa-regular fa-calendar"
                            size="lg"
                          />
                        </Button>
                      </p>
                    </div>
                  )
                })}

                <div className="CheckoutPage_coupon d-flex justify-content-between">
                  <p className="fs-5">折扣券折扣：</p>
                  {item.discount_type_id == 1 ? (
                    <p className="fs-5">{couponDiscount}折</p>
                  ) : (
                    <p className="fs-5">-{item.coupon_discount}</p>
                  )}
                </div>
                <div className="CheckoutPage_total d-flex justify-content-between">
                  <strong className="fs-5">實付金額</strong>
                  <strong className="fs-5">${item.total_amount}</strong>
                </div>
                <div className="d-flex">
                  <a
                    href={'/user/orders/courses/' + item.order_number}
                    className="CheckoutPage_orderDetailBTN fs-5 text-center"
                  >
                    查看訂單細項
                  </a>
                </div>
              </Col>
              <Col xs={12} md={0} className="CheckoutPage_mobileBTNBox">
                <a
                  href={'/user/orders/courses/' + item.order_number}
                  className="CheckoutPage_mobileBTN fs-5 text-center"
                >
                  查看訂單細項
                </a>
                <a href="/" className="CheckoutPage_mobileBTN fs-5 text-center">
                  返回首頁
                </a>
              </Col>
            </Row>
          )
        })}
      </Container>
    </>
  )
}

export default CourseCheckout
