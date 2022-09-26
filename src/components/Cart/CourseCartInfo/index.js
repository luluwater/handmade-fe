import React, { useState, useEffect } from 'react'
import './CourseCartInfo.scss'
import '../ProductCartInfo/ProductCartInfo.scss'
import Logo from '../../../assets/HANDMADE_LOGO.png'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import moment from 'moment'

import { useSelector, useDispatch } from 'react-redux'
import {
  getCourseTotal,
  clearCourseCart,
  getCourseActuallyPrice,
  getCourseDiscount,
} from '../../../slices/courseCart-slice'

import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'

import { useCreateCourseOrderMutation } from '../../../services/courseOrderApi'
import { useCreateCourseOrderDetailMutation } from '../../../services/courseOrderDetailApi'

import { useGetUserQuery } from '../../../services/userApi'
import { useDeleteUserCouponMutation } from '../../../services/couponApi'

const CourseCartInfo = () => {
  // ==========登入狀態============
  const userId = JSON.parse(localStorage.getItem('user'))?.user.id
  const { data } = useGetUserQuery(userId)

  // ============= 資料同會員中心 ==========

  const [userFromDb, setUserFromDb] = useState(false)

  useEffect(() => {
    if (userFromDb) {
      data?.map((item) => setOrderName(item.name))
      data?.map((item) => setOrderPhone(item.phone))
      data?.map((item) => setEmail(item.email))
    } else {
      setOrderName('')
      setOrderPhone('')
      setEmail('')
    }
  }, [userFromDb])

  // ===========input===========
  const [orderName, setOrderName] = useState('')
  const [orderPhone, setOrderPhone] = useState('')
  const [email, setEmail] = useState('')
  const [note, setNote] = useState('')
  const [payment, setPayment] = useState('')
  const [paymentState, setPaymentState] = useState('')

  // // ===========api==============
  const { userCouponId } = useParams()
  if (userCouponId === undefined) userCouponId = '28'
  const [createCourseOrder] = useCreateCourseOrderMutation()
  const [createCourseOrderDetail] = useCreateCourseOrderDetailMutation()
  const [deleteUserCoupon] = useDeleteUserCouponMutation()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  //==========course slice===========
  const CourseItem = useSelector(
    (state) => state.courseCartReducer.courseCartItem
  )

  const OrderDiscount = useSelector(
    (state) => state.courseCartReducer.courseCouponDiscount
  )

  const ActuallyPrice = useSelector(
    (state) => state.courseCartReducer.courseActuallyPrice
  )

  const couponId = useSelector((state) => state.courseCartReducer.coupon)

  const clearCourseItem = () => {
    dispatch(clearCourseCart())
    dispatch(getCourseDiscount(0))
    dispatch(getCourseActuallyPrice(0))
  }

  useEffect(() => {
    dispatch(getCourseTotal())
  }, [])

  const courseOrderId = Math.floor(Math.random() * 10000)

  useEffect(() => {
    console.log('CourseOrder', CourseOrder)
  }, [orderName, orderPhone, email, note, payment, paymentState])

  const CourseOrder = {
    id: courseOrderId,
    orderNumber: Date.now(),
    user_id: userId,
    coupon_id: couponId,
    create_time: moment(new Date()).format('YYYY-MM-DD'),
    payment_id: payment,
    total_amount: ActuallyPrice,
    order_state_id: '1',
    name: orderName,
    phone: orderPhone,
    email: email,
    note: note,
    order_detail: [...CourseItem],
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    if (!orderName || !orderPhone || !email || !payment) {
      Swal.fire({
        title: '請填寫完整的收件資訊',
        confirmButtonColor: '#e77656',
        customClass: 'cartInfoSwal',
        heightAuto: 'false',
      })
      return
    }
    try {
      await createCourseOrder(CourseOrder)
      await createCourseOrderDetail(CourseOrder)
      await deleteUserCoupon({ userCouponId })
      await clearCourseItem()
      await getCourseTotal()
      navigate(`/course_checkout/${courseOrderId}`)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <Container fluid className="CourseCartInfo">
        <Row>
          <Col xs={12} md={9} className="CourseCartInfo_leftSide">
            <header className="CourseCartInfo_logoBox">
              <Link to="/">
                <img src={Logo} alt="HANDMADE_LOGO" />
              </Link>
            </header>
            <Row>
              <Col xs={12} md={2} className="CourseCartInfo_previous_page">
                <Button
                  onClick={() => {
                    navigate(-1)
                  }}
                >
                  <FontAwesomeIcon
                    icon="fa-solid fa-chevron-left"
                    className="CourseCartInfo_arrow"
                  />
                  修改購物車
                </Button>
              </Col>
              <Col xs={12} md={10} className="CourseCartInfo_inputBox">
                <p className="fs-4 CourseCartInfo_inputTitle">訂購人資訊</p>
                <div className="CourseCartInfo_input">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value={userFromDb}
                    id="CourseCartInfoCheckBox"
                    onChange={() => {
                      setUserFromDb(!userFromDb)
                    }}
                  />
                  <label
                    className="form-check-label ps-1"
                    for="CourseCartInfoCheckBox"
                  >
                    同會員資料
                  </label>
                </div>
                <form
                  action="
                "
                >
                  <div className="CourseCartInfo_input mt-3">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="姓名"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder=" "
                        value={orderName}
                        onChange={(e) => {
                          setOrderName(e.target.value)
                        }}
                      />
                    </FloatingLabel>
                  </div>

                  <div className="CourseCartInfo_input">
                    <FloatingLabel controlId="floatingPassword" label="電話">
                      <Form.Control
                        type="tel"
                        placeholder=" "
                        value={orderPhone}
                        onChange={(e) => {
                          setOrderPhone(e.target.value)
                        }}
                      />
                    </FloatingLabel>
                  </div>

                  <div className="CourseCartInfo_input">
                    <FloatingLabel controlId="floatingPassword" label="E-mail">
                      <Form.Control
                        type="email"
                        placeholder=" "
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                        }}
                      />
                    </FloatingLabel>
                    <p className="CourseCartInfo_inputNotic pt-2">
                      課程購買成功後，將會寄送報到確認信，請填寫正確信箱
                      <br />
                      若未收到信件請確認收件匣是否被歸類為垃圾郵件
                    </p>
                  </div>
                  <div className="CourseCartInfo_textArea mt-5">
                    <FloatingLabel controlId="floatingTextarea2" label="備註">
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '120px' }}
                        onChange={(e) => setNote(e.target.value)}
                      />
                    </FloatingLabel>
                  </div>
                  <p className="fs-4 CourseCartInfo_inputTitle">付款方式</p>
                  <label
                    className="d-flex align-items-center CourseCartInfo_input"
                    for="CourseCartATM"
                  >
                    <input
                      type="radio"
                      className="form-check-input ProductCartInfo_radioStyle
                      "
                      value="3"
                      name="payment"
                      id="CourseCartATM"
                      onChange={(e) => {
                        setPayment(e.target.value)
                        setPaymentState('2')
                      }}
                    />
                    <label
                      className="form-check-label ps-1 ProductCartInfo_radioStyleLabel"
                      for="CourseCartATM"
                    ></label>
                    ATM匯款轉帳
                  </label>
                  <label className="CourseCartInfo_input my-3 d-flex align-items-center">
                    <input
                      type="radio"
                      className="form-check-input ProductCartInfo_radioStyle"
                      value="2"
                      name="payment"
                      id="CourseCartCard"
                      onChange={(e) => {
                        setPayment(e.target.value)
                        setPaymentState('1')
                      }}
                    />
                    <label
                      className="form-check-label ps-1 ProductCartInfo_radioStyleLabel"
                      for="CourseCartCard"
                    ></label>
                    信用卡支付（綠界金流）
                  </label>
                  <Button
                    variant="primary"
                    className="CourseCartInfo_BTN fs-5 mt-6 mb-10 text-center"
                    type="submit"
                    onClick={submitHandler}
                  >
                    結帳
                  </Button>
                </form>
              </Col>
            </Row>
          </Col>

          {/*==========右側細項========= */}

          <Col xs={12} md={3} className="CourseCartInfo_rightSide">
            <p className="fs-4 CourseCartInfo_inputTitle mb-6 ">購買細項</p>
            <div className="CourseCartInfo_detailTitle"></div>

            {CourseItem?.map((item, i) => {
              return (
                <div
                  className="CourseCartInfo_shoppingDetail mt-4 d-flex justify-content-between"
                  key={'CourseCartInfo' + i}
                >
                  <p className="fs-5">
                    {item.name} <br />
                    <span className="fs-6">
                      {item.date} {item.time}
                    </span>
                  </p>
                  <p className="fs-5 text-center ">
                    ${item.price} x{item.quantity}
                  </p>
                </div>
              )
            })}

            <div className="CourseCartInfo_shoppingDetail CourseCartInfo_coupon d-flex justify-content-between">
              <p className="fs-5">折扣券折扣：</p>
              <p className="fs-5">
                {OrderDiscount < 1 && OrderDiscount > 0
                  ? `${OrderDiscount * 10}折`
                  : `-${OrderDiscount}`}
              </p>
            </div>
            <div className="CourseCartInfo_shoppingDetail CourseCartInfo_total d-flex justify-content-between">
              <strong className="fs-5">實付金額</strong>
              <strong className="fs-5">{ActuallyPrice}</strong>
            </div>
          </Col>
          <Col xs={12} md={0} className="CourseCartInfo_mobileBTNBox px-6">
            <Button
              variant="primary"
              className="CourseCartInfo_mobilePrvBTN fs-5 "
              type="submit"
              onClick={() => {
                navigate(-1)
              }}
            >
              修改購物車
            </Button>
            <Button
              variant="primary"
              className="CourseCartInfo_mobileBTN fs-5 text-center"
              type="submit"
              onClick={submitHandler}
            >
              結帳
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CourseCartInfo
