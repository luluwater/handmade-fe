import React, { useState, useEffect, useRef } from 'react'
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
import { scrollToTop } from '../../Filter/Paginate'

import { useSelector, useDispatch } from 'react-redux'
import {
  getCourseTotal,
  clearCourseCart,
  getCourseActuallyPrice,
  getCourseDiscount,
} from '../../../slices/courseCart-slice'

import Swal from 'sweetalert2'

import { useCreateCourseOrderMutation } from '../../../services/courseOrderApi'
import { useCreateCourseOrderDetailMutation } from '../../../services/courseOrderDetailApi'
import { useSendOrderDetailMutation } from '../../../services/googleApi'

import { useGetUserQuery } from '../../../services/userApi'
import { useDeleteUserCouponMutation } from '../../../services/couponApi'

import card from '../../../assets/credit-card-solid.png'
import LoadingAnimation from '../../LoadingAnimation'

const CourseCartInfo = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    scrollToTop()
  }, [isLoading])

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
  const [sendOrderToGmail] = useSendOrderDetailMutation()

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

  // ================TapPay Data=================

  let CourseName = ''
  CourseItem?.map((item) => (CourseName = `${CourseName} ${item.name}、`))
  let TapPayCourseName = CourseName.slice(0, -1)

  // ================TapPay Data=================

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
    details: TapPayCourseName,
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
    await setIsLoading((pre) => !pre)
    let resultWithPrime = {}
    if (payment === '2') {
      const tappayStatus = TPDirect.card.getTappayFieldsStatus()
      if (tappayStatus.canGetPrime === false) {
        Swal.fire({
          title: '請填寫正確信用卡資訊',
          confirmButtonColor: '#e77656',
          customClass: 'cartInfoSwal',
          heightAuto: 'false',
        })
        return
      }

      TPDirect.card.getPrime((result) => {
        if (result.status !== 0) {
          //get prime error
          console.log('getPrime line163', result.msg)
          Swal.fire({
            title: '信用卡交易失敗',
            confirmButtonColor: '#e77656',
            customClass: 'cartInfoSwal',
            heightAuto: 'false',
          })
          return
        }
        let prime = result.card.prime
        resultWithPrime = { ...CourseOrder, prime } //給TapPay這個資料!!
        console.log('resultWithPrime1733333333333333333', resultWithPrime)
        // alert('get prime 成功，prime: ' + result.card.prime)
      })
    } else {
      resultWithPrime = { ...CourseOrder }
    }

    try {
      setTimeout(async () => {
        await createCourseOrder(resultWithPrime)
        await createCourseOrderDetail(CourseOrder)
        await deleteUserCoupon({ userCouponId })
        await sendOrderToGmail(CourseOrder)
        await clearCourseItem()
        await getCourseTotal()
        await setIsLoading((pre) => !pre)
        navigate(`/course_checkout/${courseOrderId}`)
      }, 2000)
    } catch (e) {
      console.error(e)
      Swal.fire({
        title: '結帳失敗',
        confirmButtonColor: '#e77656',
        customClass: 'cartInfoSwal',
        heightAuto: 'false',
      })
    }
  }

  // ===================TapPay===========================================
  const [btnDisabled, setBtnDisabled] = useState(true)

  const number = useRef(null)
  const date = useRef(null)
  const ccv = useRef(null)

  useEffect(() => {
    TPDirect.setupSDK(
      11327,
      'app_whdEWBH8e8Lzy4N6BysVRRMILYORF6UxXbiOFsICkz0J9j1C0JUlCHv1tVJC',
      'sandbox'
    )
    let fields = {
      number: {
        element: '#number',
        placeholder: '**** **** **** ****',
      },
      expirationDate: {
        element: '#date',
        placeholder: 'MM/YY',
      },
      ccv: {
        element: '#ccv',
        placeholder: '3位數確認碼',
      },
    }
    TPDirect.card.setup({
      fields: fields,
      styles: {
        input: {
          color: '#5f5c51',
          'font-size': '16px',
        },
        'input.cvc': {
          'font-size': '24px',
        },
        'input.expiration-date': {
          // 'font-size': '24px'
        },
        'input.card-number': {
          // 'font-size': '24px'
        },

        ':focus': {
          // 'color': 'black'
        },
        '.valid': {
          color: '#779cb2',
        },
        '.invalid': {
          color: 'red',
        },

        '@media screen and (max-width: 400px)': {
          input: {
            color: 'orange',
          },
        },
      },
    })
  }, [payment])

  TPDirect.card.onUpdate((update) => {
    if (update.canGetPrime) {
      setBtnDisabled(false)
    } else {
      setBtnDisabled(true)
    }

    if (update.status.number === 2) {
      setNumberFormGroupToError(number)
    } else if (update.status.number === 0) {
      setNumberFormGroupToSuccess(number)
    } else {
      setNumberFormGroupToNormal(number)
    }

    if (update.status.expiry === 2) {
      setNumberFormGroupToError(date)
    } else if (update.status.expiry === 0) {
      setNumberFormGroupToSuccess(date)
    } else {
      setNumberFormGroupToNormal(date)
    }

    if (update.status.ccv === 2) {
      setNumberFormGroupToError(ccv)
    } else if (update.status.ccv === 0) {
      setNumberFormGroupToSuccess(ccv)
    } else {
      setNumberFormGroupToNormal(ccv)
    }
  })

  function setNumberFormGroupToError(v) {
    v.current.classList.add('has-error')
    v.current.classList.remove('has-success')
  }

  function setNumberFormGroupToSuccess(v) {
    v.current.classList.add('has-success')
    v.current.classList.remove('has-error')
  }

  function setNumberFormGroupToNormal(v) {
    v.current.classList.remove('has-error')
    v.current.classList.remove('has-success')
  }

  // ===================TapPay===========================================

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

              {isLoading && (
                <LoadingAnimation hintWord="信用卡結帳授權中，請勿離開畫面" />
              )}

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
                        setBtnDisabled(false)
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
                        setBtnDisabled(true)
                      }}
                    />
                    <label
                      className="form-check-label ps-1 ProductCartInfo_radioStyleLabel"
                      for="CourseCartCard"
                    ></label>
                    信用卡支付（TapPay）
                  </label>

                  {payment === '2' && (
                    <div className="creditCard_box">
                      <p className="fs-5 creditCard_payOnce">信用卡一次付清</p>
                      <hr />
                      <Form className="mt-2">
                        <Form.Group
                          className="mb-3 d-flex align-items-center mt-3 creditCard_group"
                          controlId="number"
                        >
                          <Form.Label for="number" className="me-3 ">
                            信用卡卡號
                          </Form.Label>
                          {/* 可填4242 4242 4242 4242 */}
                          <div
                            id="number"
                            ref={number}
                            className="tpfield"
                          ></div>
                          {/* 可填入： 4242 4242 4242 4242 */}
                          <FontAwesomeIcon
                            icon="fa-brands fa-cc-visa"
                            size="2x"
                            className="ms-3 credit_cardLogo"
                          />
                          <FontAwesomeIcon
                            icon="fa-brands fa-cc-mastercard"
                            size="2x"
                            className="ms-3 credit_cardLogo"
                          />
                          <FontAwesomeIcon
                            icon="fa-brands fa-cc-jcb"
                            size="2x"
                            className="ms-3 credit_cardLogo"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3 d-flex align-items-center creditCard_group"
                          controlId="cardExpirationDate"
                        >
                          <Form.Label for="cardExpirationDate" className="me-3">
                            卡片到期日
                          </Form.Label>
                          <div id="date" ref={date} className="tpfield"></div>
                        </Form.Group>

                        <Form.Group
                          className="mb-3 d-flex align-items-center creditCard_group"
                          controlId="cardCcv"
                        >
                          <Form.Label for="cardCcv" className="me-4">
                            ccv確認碼
                          </Form.Label>
                          <div id="ccv" ref={ccv} className="tpfield"></div>
                          <img src={card} className="ms-3 ccvCard" alt="ccv" />
                        </Form.Group>
                      </Form>
                      <p className="creditCard_notic">
                        本公司採用喬睿科技TapPay
                        SSL交易系統，通過PCI-DSS國際信用卡組織Visa、MasterCard等產業資料安全Level
                        1等級，周全保護您的信用卡資料安全。
                      </p>
                    </div>
                  )}

                  <div className="CourseCartInfo_inputAgree">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="checkoutInput"
                      checked
                    />
                    <label
                      className="form-check-label ps-1 "
                      for="checkoutInput"
                    >
                      我已閱讀並同意「
                      <span className="Chekout_AgreeWord">
                        手手HANDMADE電子商務約定條款
                      </span>
                      」
                    </label>
                  </div>

                  <Button
                    variant="primary"
                    className="CourseCartInfo_BTN fs-5 mt-6 mb-10 text-center"
                    type="submit"
                    onClick={submitHandler}
                    disabled={btnDisabled}
                    // ref={submitBTN}
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
          <div className="CourseCartInfo_inputAgreeMobile">
            <input
              type="radio"
              className="form-check-input"
              id="checkoutInput"
              checked
            />
            <label className="form-check-label ps-1 " for="checkoutInput">
              我已閱讀並同意「
              <span className="Chekout_AgreeWord">
                手手HANDMADE電子商務約定條款
              </span>
              」
            </label>
          </div>
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
