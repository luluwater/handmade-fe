import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../../styles/_custom_style.scss'

import { Row, Col, Nav, Tab, Form, InputGroup, Button } from 'react-bootstrap'
import CourseCartItem from './CourseCartItem'
import ProductCartItem from './ProductCartItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { cartToggle, cartClose } from '../../slices/cart-ui-slice'
import {
  getProductTotal,
  clearCart,
  getCoupon,
  ProductCartToggle,
  ProductCartClose,
  getDiscount,
  getActuallyPrice,
} from '../../slices/productCart-slice'

import {
  getCourseTotal,
  clearCourseCart,
  CourseCartClose,
  CourseCartToggle,
} from '../../slices/courseCart-slice'

import { useGetUserCouponsQuery } from '../../services/userApi'
import { useGetCouponQuery } from '../../services/couponApi'
import UserLikeCourse from './CourseCartRecommend/UserLikeCourse'
import YouWillLikeCourse from './CourseCartRecommend/YouWillLikeCourse'
import UserLikeProduct from './CourseCartRecommend/UserLikeProduct'
import YouWillLikeProduct from './CourseCartRecommend/YouWillLikeProduct'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // =========登入狀態=========
  const authReducers = useSelector((state) => state.authReducers)
  const userId = JSON.parse(localStorage.getItem('user'))?.user.id

  // =========拿取user Coupon=======
  const { data } = useGetUserCouponsQuery(userId)

  const couponId = useSelector((state) => state.productCartReducer.coupon)
  const userCoupon = data?.map((item) => ({
    ...item,
    end_date: moment(item.end_date).format('YYYY-MM-DD'),
    start_date: moment(item.start_date).format('YYYY-MM-DD'),
  }))

  const today = moment(new Date()).format('YYYY-MM-DD')
  const useableCoupon = userCoupon?.filter(
    (item) =>
      item.state === 1 && item.start_date <= today && item.end_date > today
  )

  const takeCoupon = (value) => {
    dispatch(getCoupon(value))
  }

  const [couponDiscount, setCouponDiscount] = useState('0')

  const [userSelectCoupon, setUserSelectCoupon] = useState([
    {
      coupon_id: '28',
      state: '1',
      discount_type_id: '2',
      coupon_discount: 0,
    },
  ])

  useEffect(() => {
    if (couponId == 28) {
      setUserSelectCoupon([
        {
          coupon_id: '28',
          state: '1',
          discount_type_id: '2',
          coupon_discount: 0,
        },
      ])
    } else {
      setUserSelectCoupon(data?.filter((item) => item.coupon_id == couponId))
    }
  }, [couponId, dispatch])

  useEffect(() => {
    setCouponDiscount(
      userSelectCoupon?.map((item) => {
        return item.discount_type_id == 1
          ? `${Math.round(item.coupon_discount * 100) / 10} 折`
          : -item.coupon_discount
      })
    )
    dispatch(
      getDiscount(
        userSelectCoupon?.map((item) => {
          return item.discount_type_id == 1
            ? `${Math.round(item.coupon_discount * 100) / 10} 折`
            : -item.coupon_discount
        })
      )
    )
    dispatch(
      getActuallyPrice(
        userSelectCoupon?.map((item) => {
          return item.discount_type_id == 1
            ? Math.round(ProductCartTotal * item.coupon_discount)
            : Number(ProductCartTotal - item.coupon_discount)
        })
      )
    )
  }, [userSelectCoupon])

  const toggleCart = () => {
    dispatch(cartToggle())
    dispatch(ProductCartToggle())
    dispatch(CourseCartToggle())
  }
  const closeCart = () => {
    dispatch(cartClose(false))
    dispatch(ProductCartClose(false))
    dispatch(CourseCartClose(false))
  }

  // ========課程購物車slice========
  const CourseItem = useSelector(
    (state) => state.courseCartReducer.courseCartItem
  )

  const CourseCartTotal = useSelector(
    (state) => state.courseCartReducer.totalAmount
  )

  const clearCourseItems = () => {
    dispatch(clearCourseCart())
  }

  // =======商品購物車slice============
  const ProductItem = useSelector(
    (state) => state.productCartReducer.productCartItem
  )

  const ProductCartTotal = useSelector(
    (state) => state.productCartReducer.totalAmount
  )

  const clearProductCart = () => {
    dispatch(clearCart())
    dispatch(getDiscount(0))
    dispatch(getActuallyPrice(0))
  }

  const ProuductContinue = (e) => {
    e.preventDefault()
    if (userId && ProductItem.length > 0) {
      navigate(`/product_cart`)
    } else if (ProductItem.length <= 0) {
      Swal.fire({
        title: '請先選購商品',
        confirmButtonColor: '#779cb2',
        color: '#5f5c51',
        background: '#e2dad2',
        customClass: 'CartSwal',
      })
    } else if (!userId) {
      Swal.fire({
        title: '請先登入後再繼續結帳',
        showDenyButton: true,
        confirmButtonText: '登入',
        denyButtonText: `取消`,
        confirmButtonColor: '#779cb2',
        denyButtonColor: '#e77656',
        background: '#e2dad2',
        color: '#5f5c51',
        customClass: 'CartSwal',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(`/Login`)
          closeCart()
        }
      })
    }
  }

  useEffect(() => {
    dispatch(getProductTotal())
  }, [ProductItem, dispatch])

  useEffect(() => {
    dispatch(getCourseTotal())
  }, [CourseItem, dispatch])

  return (
    <div className="Cart" onClick={toggleCart}>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row
          className="justify-content-end Cart_main "
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <Col className="pe-0 Cart_tabChooseBox" sm={12}>
            <Nav variant="pills" className="flex-column Cart_tabChoose">
              <Nav.Item className="">
                <Nav.Link
                  className="Cart_NavLink text-center fs-5 "
                  eventKey="first"
                >
                  課程購物車
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mt-2">
                <Nav.Link
                  className="Cart_NavLink text-center fs-5"
                  eventKey="second"
                >
                  商品購物車
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col className="ps-0">
            <Tab.Content className="Cart_tabContent">
              {/* =============課程購物車============== */}
              <Tab.Pane eventKey="first">
                <Row>
                  <Col xs={12} md={9} className="Cart_mainContent">
                    <div
                      className="mt-5 Cart_backToStore fs-5"
                      onClick={toggleCart}
                    >
                      <FontAwesomeIcon
                        icon="fa-solid fa-chevron-left"
                        className="Cart_arrow"
                      />
                      回到商店
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <p className="fs-4 Cart_CourseTitle">課程購物車</p>
                      <button
                        className="btn Cart_emptyCart me-2"
                        onClick={clearCourseItems}
                      >
                        清空購物車
                      </button>
                    </div>

                    {CourseItem.length === 0 ? (
                      <p className="Cart_empty fs-4 my-10">
                        您的課程購物車空空的QQ
                      </p>
                    ) : (
                      <>
                        <Row className="text-center Cart_DetailTitle">
                          <Col sm={3}>課程名稱</Col>
                          <Col sm={3}>課程時間</Col>
                          <Col sm={3}>人數</Col>
                          <Col sm={2}>小計</Col>
                          <Col sm={1}>刪除</Col>
                        </Row>
                        <div>
                          {CourseItem?.map((item) => (
                            <>
                              <CourseCartItem item={item} key={uuidv4()} />
                            </>
                          ))}
                        </div>
                        <Row className="Cart_couponBox d-flex align-items-center">
                          <Col xs={3} className="Cart_couponSelect">
                            <Form.Select aria-label="Default select example">
                              <option>使用折價券</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Col>

                          <Col xs="2" className="Cart_or text-center">
                            或
                          </Col>

                          <Col
                            xs={4}
                            className="Cart_couponInputBox text-center"
                          >
                            <InputGroup className="Cart_couponInput">
                              <Form.Control
                                placeholder="輸入折價券代碼..."
                                aria-label="CouponInput"
                                aria-describedby="basic-addon2"
                              />
                              <Button
                                variant="outline-gray-darker"
                                id="button-addon2"
                              >
                                使用
                              </Button>
                            </InputGroup>
                          </Col>
                        </Row>
                      </>
                    )}

                    {userId ? (
                      <Row className="Cart_userLikeBox">
                        <p className="fs-5 text-center">您的課程收藏清單</p>
                        <Row className="mb-5">
                          <Col className="d-flex justify-content-center Cart_userLike">
                            <UserLikeCourse />
                          </Col>
                        </Row>
                      </Row>
                    ) : (
                      ''
                    )}

                    <Row className="Cart_youMightLikeBox">
                      <p className="fs-5 text-center">您可能會喜歡</p>
                      <Row className="mb-5">
                        <Col className="d-flex justify-content-center Cart_userLike">
                          <YouWillLikeCourse />
                        </Col>
                      </Row>
                    </Row>
                  </Col>

                  {/* ===========課程購物車 右側========== */}
                  <Col xs={12} md={3} className="Cart_courseRightSide ">
                    <div className="mt-5 text-end Cart_backToStore_x fs-5">
                      <FontAwesomeIcon
                        icon="fa-solid fa-xmark"
                        onClick={toggleCart}
                      />
                    </div>
                    <p className="fs-4 Cart_TotalTitle">總計</p>
                    <div className="d-flex justify-content-between">
                      <p>總金額：</p>
                      <p>{CourseCartTotal}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>折價券折扣：</p>
                      <p>0</p>
                    </div>
                    <div className="d-flex justify-content-between Cart_TotalPrice">
                      <strong className="fs-5">實付金額</strong>
                      <strong className="fs-5">{CourseCartTotal}</strong>
                    </div>
                    <Button
                      variant="primary"
                      className="Cart_nextBTN fs-5 mt-6 mb-10 text-center"
                    >
                      繼續
                    </Button>
                  </Col>
                </Row>
              </Tab.Pane>

              {/* =============商品購物車============== */}
              <Tab.Pane eventKey="second">
                <Row>
                  <Col xs={12} md={9} className="Cart_mainContent">
                    <div
                      className="mt-5 Cart_backToStore fs-5"
                      onClick={toggleCart}
                    >
                      <FontAwesomeIcon
                        icon="fa-solid fa-chevron-left"
                        className="Cart_arrow"
                      />
                      回到商店
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="fs-4 Cart_CourseTitle">商品購物車</p>
                      <button
                        className="btn Cart_emptyCart me-2"
                        onClick={clearProductCart}
                      >
                        清空購物車
                      </button>
                    </div>

                    {ProductItem.length === 0 ? (
                      <p className="Cart_empty fs-4 my-10">
                        您的商品購物車空空的QQ
                      </p>
                    ) : (
                      <>
                        <Row className="text-center Cart_DetailTitle">
                          <Col sm={5}>課程名稱</Col>
                          <Col sm={3}>數量</Col>
                          <Col sm={2}>小計</Col>
                          <Col sm={2}>刪除</Col>
                        </Row>
                        <div>
                          {ProductItem?.map((item) => (
                            <>
                              <ProductCartItem item={item} key={uuidv4()} />
                            </>
                          ))}
                        </div>
                        <Row className="Cart_couponBox d-flex align-items-center">
                          <Col xs={3} className="Cart_couponSelect">
                            <Form.Select
                              value={couponId}
                              aria-label="userCoupon"
                              onChange={(e) => {
                                takeCoupon(e.target.value)
                              }}
                            >
                              <option value="28">使用折價券</option>
                              {userId ? (
                                <>
                                  {useableCoupon?.map((item) => {
                                    return (
                                      <option value={item.coupon_id}>
                                        {item.coupon_name}
                                      </option>
                                    )
                                  })}
                                </>
                              ) : (
                                ''
                              )}
                            </Form.Select>
                          </Col>

                          {/* <Col xs="2" className="Cart_or text-center">
                            或
                          </Col> */}

                          {/* <Col
                            xs={4}
                            className="Cart_couponInputBox text-center"
                          >
                            <InputGroup className="Cart_couponInput">
                              <Form.Control
                                placeholder="輸入折價券代碼..."
                                aria-label="CouponInput"
                                aria-describedby="basic-addon2"
                              />
                              <Button
                                variant="outline-gray-darker"
                                id="button-addon2"
                              >
                                使用
                              </Button>
                            </InputGroup>
                          </Col> */}
                        </Row>
                      </>
                    )}

                    {/* <div>
                      <ProductCartItem />
                      <ProductCartItem />
                    </div> */}

                    {userId ? (
                      <Row className="Cart_userLikeBox">
                        <p className="fs-5 text-center">您的商品收藏清單</p>
                        <Row className="mb-5">
                          <Col className="d-flex justify-content-center Cart_userLike">
                            <UserLikeProduct userId={userId} />
                          </Col>
                        </Row>
                      </Row>
                    ) : (
                      ''
                    )}

                    <Row className="Cart_youMightLikeBox">
                      <p className="fs-5 text-center">您可能會喜歡</p>
                      <Row className="mb-5">
                        <Col className="d-flex justify-content-center Cart_userLike">
                          <YouWillLikeProduct />
                        </Col>
                      </Row>
                    </Row>
                  </Col>

                  {/* ========商品購物車  右側========== */}
                  <Col xs={12} md={3} className="Cart_courseRightSide">
                    <div className="mt-5 text-end Cart_backToStore_x fs-5">
                      <FontAwesomeIcon
                        icon="fa-solid fa-xmark"
                        onClick={toggleCart}
                      />
                    </div>
                    <p className="fs-4 Cart_TotalTitle">總計</p>
                    <div className="d-flex justify-content-between">
                      <p>總金額：</p>
                      <p>{ProductCartTotal}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>折價券折扣：</p>

                      <p>{couponDiscount}</p>

                      {/* {userSelectCoupon?.map((item) => {
                        return (
                          <p>
                            {item.discount_type_id == 1
                              ? `${
                                  Math.round(item.coupon_discount * 100) / 10
                                } 折`
                              : -item.coupon_discount}
                          </p>
                        )
                      })} */}
                    </div>
                    <div className="d-flex justify-content-between Cart_TotalPrice">
                      <strong className="fs-5">實付金額</strong>

                      {userSelectCoupon?.map((item) => {
                        return (
                          <strong className="fs-5">
                            {item.discount_type_id == 1
                              ? Math.round(
                                  ProductCartTotal * item.coupon_discount
                                )
                              : Number(ProductCartTotal - item.coupon_discount)}
                          </strong>
                        )
                      })}
                    </div>
                    <Button
                      onClick={ProuductContinue}
                      variant="primary"
                      className="Cart_nextBTN fs-5 mt-6 mb-10 text-center d-flex align-items-center justify-content-center"
                    >
                      繼續
                    </Button>
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}

export default Cart
