import React, { useState, useEffect } from 'react'
import { Row, Col, Nav, Tab, Form, InputGroup, Button } from 'react-bootstrap'
import CourseCartItem from './CourseCartItem'
import ProductCartItem from './ProductCartItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { cartToggle } from '../../slices/cart-ui-slice'
import { getProductTotal } from '../../slices/productCart-slice'

const Cart = () => {
  const dispatch = useDispatch()
  const toggleCart = () => {
    dispatch(cartToggle())
  }
  const ProductItem = useSelector(
    (state) => state.productCartReducer.productCartItem
  )

  const ProductCartTotal = useSelector(
    (state) => state.productCartReducer.totalAmount
  )



  useEffect(() => {
    dispatch(getProductTotal())
  }, [ProductItem, dispatch])

  console.log('ProductItem', ProductItem)
  return (
    <div className="Cart">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="justify-content-end ">
          <Col sm={1} className="pe-0">
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="d-flex justify-content-end">
                <Nav.Link
                  className="Cart_NavLink text-center fs-5"
                  eventKey="first"
                >
                  課程購物車
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="d-flex justify-content-end mt-2">
                <Nav.Link
                  className="Cart_NavLink text-center fs-5"
                  eventKey="second"
                >
                  商品購物車
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col sm={10} className="ps-0">
            <Tab.Content className="Cart_tabContent">
              <Tab.Pane eventKey="first">
                <Row>
                  <Col xs={12} md={8}>
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
                    <p className="fs-4 Cart_CourseTitle">課程購物車</p>
                    <Row className="text-center Cart_DetailTitle">
                      <Col sm={3}>課程名稱</Col>
                      <Col sm={3}>課程時間</Col>
                      <Col sm={3}>人數</Col>
                      <Col sm={2}>小計</Col>
                      <Col sm={1}>刪除</Col>
                    </Row>
                    <div>
                      <CourseCartItem />
                      <CourseCartItem />
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

                      <Col xs={4} className="Cart_couponInputBox text-center">
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
                    <Row className="">
                      <p className="fs-5 text-center">您的收藏清單</p>
                    </Row>
                  </Col>

                  {/* ===========課程購物車 右側========== */}
                  <Col xs={12} md={4} className="Cart_courseRightSide ">
                    <div className="mt-5 text-end Cart_backToStore_x fs-5">
                      <FontAwesomeIcon
                        icon="fa-solid fa-xmark"
                        onClick={toggleCart}
                      />
                    </div>
                    <p className="fs-4 Cart_TotalTitle">總計</p>
                    <div className="d-flex justify-content-between">
                      <p>總金額：</p>
                      <p>$2600</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>折價券折扣：</p>
                      <p>0</p>
                    </div>
                    <div className="d-flex justify-content-between Cart_TotalPrice">
                      <strong className="fs-5">實付金額</strong>
                      <strong className="fs-5">$2600</strong>
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
                  <Col xs={12} md={8} className="Cart_mainContent">
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
                    <p className="fs-4 Cart_CourseTitle">商品購物車</p>

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
                              <ProductCartItem
                                item={item}
                                key={item.productId}
                              />
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

                    {/* <div>
                      <ProductCartItem />
                      <ProductCartItem />
                    </div> */}

                    <Row className="">
                      <p className="fs-5 text-center">您的收藏清單</p>
                    </Row>
                  </Col>

                  {/* ========商品購物車  右側========== */}
                  <Col xs={12} md={4} className="Cart_courseRightSide">
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
                      <p>0</p>
                    </div>
                    <div className="d-flex justify-content-between Cart_TotalPrice">
                      <strong className="fs-5">實付金額</strong>
                      <strong className="fs-5">{ProductCartTotal}</strong>
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
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}

export default Cart
