import React, { useState, useEffect } from 'react'
import './ProductCartInfo.scss'
import Logo from '../../../assets/HANDMADE_LOGO.png'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import { ZipCodeTW } from 'zipcode-tw-react'

import { useSelector, useDispatch } from 'react-redux'
import { getProductTotal } from '../../../slices/productCart-slice'

import { v4 as uuidv4 } from 'uuid'

const ProductCartInfo = () => {
  // ===========delivery==========
  const [sevenBorder, setSevenBorder] = useState('ProductCartInfo_borderGray')
  const [sevenPaidBorder, setSevenPaidBorder] = useState(
    'ProductCartInfo_borderGray'
  )
  const [homeBorder, setHomeBorder] = useState('ProductCartInfo_borderGray')
  const [deliveryInfo, setDeliveryInfo] = useState(true)

  // ===========payment===========
  const [cashOnDelivery, setCashOnDelivery] = useState('')
  const [atmAccount, setAtmAccount] = useState('')
  const [creditCard, setCreditCard] = useState('')

  // ===========payment checked===========
  const [cashchecked, setCashchecked] = useState('')
  const [atmChecked, setAtmChecked] = useState('')
  const [creditCardChecked, setCreditCardChecked] = useState('')

  // ===========input===========
  const [orderName, setOrderName] = useState('')
  const [orderPhone, setOrderPhone] = useState('')
  const [delivery, setDelivery] = useState('')
  const [payment, setPayment] = useState('')
  const [zipCode,setZipCode] = useState('')
  const [address,setAddress] = useState('')
  const [note, setNote] = useState('')


  const dispatch = useDispatch()

  const ProductItem = useSelector(
    (state) => state.productCartReducer.productCartItem
  )

  const ProductCartTotal = useSelector(
    (state) => state.productCartReducer.totalAmount
  )

  useEffect(() => {
    dispatch(getProductTotal())
  }, [])

  // console.log('ProductItem', ProductItem)

  return (
    
    <>
      <Container fluid className="ProductCartInfo">
        <Row>
          <Col xs={12} md={9} className="ProductInfo_leftSide">
            <header className="CourseCartInfo_logoBox">
              <Link to="/">
                <img src={Logo} alt="HANDMADE_LOGO" />
              </Link>
            </header>
            <Row>
              <Col xs={12} md={2} className="CourseCartInfo_previous_page">
                <a href="/">
                  <FontAwesomeIcon
                    icon="fa-solid fa-chevron-left"
                    className="CourseCartInfo_arrow"
                  />
                  修改購物車
                </a>
              </Col>
              <Col xs={12} md={10} className="ProductCartInfo_inputBox">
                <p className="fs-4 ProductCartInfo_inputTitle">訂購人資訊</p>
                <div className="ProductCartInfo_input">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    id="ProductCartInfoCheckBox"
                  />
                  <label
                    className="form-check-label ps-1"
                    for="ProductCartInfoCheckBox"
                  >
                    同會員資料
                  </label>
                </div>
                <form
                  action="
                "
                >
                  <div className="ProductCartInfo_input mt-3">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="姓名"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder=" "
                        required
                        onChange={(e) => {
                          setOrderName(e.target.value)
                        }}
                      />
                    </FloatingLabel>
                    <p className="ProductCartInfo_inputNotic pt-1">
                      ※若使用超商取貨不付款，『取貨人務必填寫與身份證件相符之真實姓名』
                      <br />
                      若與證件不符將無法完成取貨。
                    </p>
                  </div>

                  <div className="ProductCartInfo_input">
                    <FloatingLabel controlId="floatingPassword" label="電話">
                      <Form.Control
                        type="tel"
                        placeholder=" "
                        required
                        onChange={(e) => {
                          setOrderPhone(e.target.value)
                        }}
                      />
                    </FloatingLabel>
                  </div>

                  <p className="fs-4 ProductCartInfo_inputTitle  mt-5">
                    運送方式
                  </p>

                  <div className="d-flex  ProductCartInfo_deliveryBox">
                    <label
                      for="seven-eleven-pay"
                      onClick={() => {
                        setSevenBorder('ProductCartInfo_borderOrange')
                        setSevenPaidBorder('ProductCartInfo_borderGray')
                        setHomeBorder('ProductCartInfo_borderGray')
                        setDeliveryInfo(true)
                        setCashOnDelivery('')
                        setAtmAccount('disabled')
                        setCreditCard('disabled')
                      }}
                      className={'ProductCartInfo_delivery ps-2 ' + sevenBorder}
                    >
                      <input
                        type="radio"
                        className="form-check-input  ProductCartInfo_radioStyle "
                        name="delivery"
                        id="seven-eleven-pay"
                        value="2"
                      />
                      <label
                        className="form-check-label ps-2 ProductCartInfo_radioStyleLabel"
                        for="seven-eleven-pay"
                      ></label>
                      7-11超商 取貨付款
                    </label>

                    <label
                      for="seven-eleven-paid"
                      onClick={() => {
                        setSevenPaidBorder('ProductCartInfo_borderOrange')
                        setSevenBorder('ProductCartInfo_borderGray')
                        setHomeBorder('ProductCartInfo_borderGray')
                        setDeliveryInfo(true)
                        setCashOnDelivery('disabled')
                        setAtmAccount('')
                        setCreditCard('')
                      }}
                      className={
                        'ProductCartInfo_deliveryHome ps-2 ' + sevenPaidBorder
                      }
                    >
                      <input
                        type="radio"
                        className="form-check-input ProductCartInfo_radioStyle"
                        name="delivery"
                        id="seven-eleven-paid"
                        value="3"
                      />
                      <label
                        className="form-check-label ps-2 ProductCartInfo_radioStyleLabel"
                        for="seven-eleven-paid"
                      ></label>
                      7-11超商 取貨不付款
                    </label>

                    <label
                      for="home_delivery"
                      className={
                        'ProductCartInfo_deliveryHome ps-2 ' + homeBorder
                      }
                      onClick={() => {
                        setSevenBorder('ProductCartInfo_borderGray')
                        setSevenPaidBorder('ProductCartInfo_borderGray')
                        setHomeBorder('ProductCartInfo_borderOrange')
                        setDeliveryInfo(false)
                        setCashOnDelivery('')
                        setAtmAccount('')
                        setCreditCard('')
                      }}
                    >
                      <input
                        type="radio"
                        className="form-check-input ProductCartInfo_radioStyle"
                        name="delivery"
                        id="home_delivery"
                        value="1"
                      />
                      <label
                        className="form-check-label ps-2 ProductCartInfo_radioStyleLabel"
                        for="home_delivery"
                      ></label>
                      黑貓宅急便
                    </label>
                  </div>

                  {deliveryInfo ? (
                    <div className="ProductCartInfo_chooseStore text-center mt-5">
                      <a href="/">選擇取貨門市</a>
                    </div>
                  ) : (
                    <>
                      <div className="ProductCartInfo_Postal_code mt-2">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="郵遞區號"
                          className="mb-3"
                        >
                          <Form.Control type="text" placeholder=" " />
                        </FloatingLabel>
                      </div>

                      <div className="ProductCartInfo_input mt-2">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="收件地址"
                          className="mb-3"
                        >
                          <Form.Control type="text" placeholder=" " />
                        </FloatingLabel>
                      </div>
                    </>
                  )}

                  <p className="fs-4 ProductCartInfo_inputTitle">付款方式</p>

                  <div className="ProductCartInfo_input mt-4">
                    <label
                      for="ProductCart"
                      className="d-flex align-items-center"
                    >
                      <input
                        type="radio"
                        className="form-check-input ProductCartInfo_radioStyle"
                        value="1"
                        name="payment"
                        id="ProductCart"
                        disabled={cashOnDelivery}
                        onChange={(e) => setDelivery(e.target.value)}
                      />
                      <label
                        className="form-check-label ps-1 ProductCartInfo_radioStyleLabel"
                        for="ProductCart"
                      ></label>
                      貨到付款
                    </label>
                  </div>

                  <div className="ProductCartInfo_input mt-3">
                    <label
                      for="ProductCartATM"
                      className="d-flex align-items-center"
                    >
                      <input
                        type="radio"
                        className="form-check-input ProductCartInfo_radioStyle"
                        value="3"
                        name="payment"
                        id="ProductCartATM"
                        disabled={atmAccount}
                        onChange={(e) => setDelivery(e.target.value)}
                      />
                      <label
                        className="form-check-label ps-1 ProductCartInfo_radioStyleLabel"
                        for="ProductCartATM"
                      ></label>
                      ATM匯款轉帳
                    </label>
                  </div>

                  <div className="ProductCartInfo_input my-3">
                    <label
                      for="ProductCartCard"
                      className="d-flex align-items-center"
                    >
                      <input
                        type="radio"
                        className="form-check-input ProductCartInfo_radioStyle"
                        value="2"
                        name="payment"
                        id="ProductCartCard"
                        disabled={creditCard}
                        onChange={(e) => setDelivery(e.target.value)}
                      />
                      <label
                        className="form-check-label ps-1 ProductCartInfo_radioStyleLabel"
                        for="ProductCartCard"
                      ></label>
                      信用卡支付（綠界金流）
                    </label>
                  </div>

                  <div className="ProductCartInfo_textArea mt-5">
                    <FloatingLabel controlId="floatingTextarea2" label="備註">
                      <Form.Control
                        as="textarea"
                        placeholder=" "
                        style={{ height: '120px' }}
                      />
                    </FloatingLabel>
                  </div>
                  <Button
                    variant="primary"
                    className="ProductCartInfo_BTN fs-5 mb-10 text-center"
                  >
                    結帳
                  </Button>
                </form>
              </Col>
            </Row>
          </Col>

          {/*==========右側細項========= */}

          <Col xs={12} md={3} className="ProductCartInfo_rightSide">
            <p className="fs-4 ProductCartInfo_inputTitle mb-6">購買細項</p>

            {ProductItem?.map((item) => {
              return (
                <div
                  className="ProductCartInfo_shoppingDetail mt-1 d-flex justify-content-between"
                  key={uuidv4()}
                >
                  <p className="fs-5">
                    {item.name} <br />
                  </p>
                  <p className="fs-5 text-center pe-4">
                    <span className="me-6">${item.price}</span>x{item.quantity}
                  </p>
                </div>
              )
            })}

            <div className="ProductCartInfo_shoppingDetail ProductCartInfo_coupon d-flex justify-content-between">
              <p className="fs-5">折扣券折扣：</p>
              <p className="fs-5">0</p>
            </div>
            <div className="ProductCartInfo_shoppingDetail ProductCartInfo_total d-flex justify-content-between">
              <strong className="fs-5">實付金額</strong>
              <strong className="fs-5">${ProductCartTotal}</strong>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProductCartInfo
