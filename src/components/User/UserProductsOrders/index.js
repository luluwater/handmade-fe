import '../User.scss'
import React, { useEffect } from 'react'
import { Row, Col, Form, Table, Container } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useGetUserProductOrdersQuery } from '../../../services/userApi'

const UserProductsOrders = () => {
  const userDataId = JSON.parse(localStorage.getItem('user'))?.user.id
  const { data } = useGetUserProductOrdersQuery(userDataId)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [orderData, setOrderData] = useState(null)

  useEffect(() => {
    setOrderData(data)
  }, [data])

  function filterOrder() {
    if (!startDate || !endDate) return
    const transformStartDate = moment(startDate).format('YYYY.MM.DD')
    const transformEndDate = moment(endDate).format('YYYY.MM.DD')
    const newData = data.filter((v) => {
      const transformOrders = moment(v.create_time).format('YYYY.MM.DD')
      return (
        moment(transformOrders).isSameOrBefore(transformEndDate) &&
        moment(transformOrders).isSameOrAfter(transformStartDate)
      )
    })
    const dataCourse = newData.length === 0 ? 0 : newData
    setOrderData(dataCourse)
    // console.log('newData', newData)
  }
  function deleteFilter() {
    setOrderData(data)
    // console.log('data', data)
  }

  return (
    <>
      {data === 0 ? (
        <div className="user_orders_text text-center py-3" colSpan={6}>
          目前沒有商品訂單
        </div>
      ) : (
        <>
          {/* 電腦版 */}
          <Container className="user_orders_filter">
            <Form.Group>
              <Row>
                <div className="d-flex user_orders_header p-0">
                  <Col md={2} className="fw-bold ms-7 user_orders_header">
                    查詢訂單時間
                  </Col>
                  <Col md={4} className="d-flex align-items-center">
                    <DatePicker
                      className="ms-2 user_orders_date p-0"
                      dateFormat="yyyy.MM.dd"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                    />
                    <span>-</span>
                    <DatePicker
                      className="user_orders_date ms-3"
                      dateFormat="yyyy.MM.dd"
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                    />
                  </Col>
                  <Col md={4} className="d-flex align-items-center ms-5">
                    <button
                      onClick={filterOrder}
                      className="user_orders_dateBtn fw-bold"
                    >
                      確定送出
                    </button>
                    <button
                      className="ms-5 user_orders_dateBtn fw-bold"
                      onClick={deleteFilter}
                    >
                      取消查詢
                    </button>
                  </Col>
                </div>
              </Row>
            </Form.Group>
          </Container>
          {/* 手機版 */}
          <Container className="user_orders_mdFilter">
            <Form.Group>
              <Row className="mt-8 ps-3 pb-2 fw-bold user_orders_mdHeader">
                查詢訂單時間
              </Row>
              <Row>
                <div className="d-flex user_orders_header p-0">
                  <Col md={4}>
                    <div className="user_orders_datepicker d-flex align-items-center">
                      <DatePicker
                        className="ms-2 user_orders_date p-0"
                        dateFormat="yyyy.MM.dd"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                      />
                      <span className="ps-3">-</span>
                      <DatePicker
                        className="user_orders_date ms-2"
                        dateFormat="yyyy.MM.dd"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                      />
                    </div>
                  </Col>
                  <Col md={4} className="d-flex align-items-center ms-5">
                    <button
                      className="user_orders_dateBtn user_orders_dateMDBtn fw-bold"
                      onClick={filterOrder}
                    >
                      確定
                    </button>
                    <button
                      className="ms-5 user_orders_dateBtn user_orders_dateMDBtn fw-bold"
                      onClick={deleteFilter}
                    >
                      取消
                    </button>
                  </Col>
                </div>
              </Row>
            </Form.Group>
          </Container>
          {orderData === 0 ? (
            <div className="user_orders_text text-center py-8" colSpan={6}>
              目前沒有商品訂單
            </div>
          ) : (
            <Col className="d-flex justify-content-center">
              {/* 電腦版 */}
              <Table className="mx-7 mt-5 user_orders_table">
                <thead>
                  <tr className="text-center">
                    <th>訂單項目</th>
                    <th>訂單日期</th>
                    <th>訂單編號</th>
                    <th>收件人</th>
                    <th>付款方式</th>
                    <th>訂單狀態</th>
                  </tr>
                </thead>
                {orderData?.map((item) => {
                  const transformOrders = moment(item.create_time).format(
                    'YYYY.MM.DD'
                  )
                  return (
                    <tbody key={item.id}>
                      <tr className="text-center">
                        <td>商品訂單</td>
                        <td>{transformOrders}</td>
                        <td>
                          <Link
                            to={`products/${item.order_number}`}
                            className="user_orders_link fw-bold"
                          >
                            {item.order_number}
                          </Link>
                        </td>
                        <td>{item.product_order_name}</td>
                        <td>{item.payment_name}</td>
                        <td>{item.order_staus_name}</td>
                      </tr>
                    </tbody>
                  )
                })}
              </Table>
              <div>
                {/* 手機板 */}
                <Table className="my-5 user_orders_table user_orders_md">
                  <thead>
                    <tr className="text-center">
                      <th>項目</th>
                      <th>日期</th>
                      <th>編號</th>
                      <th>付款</th>
                      <th>訂單</th>
                    </tr>
                  </thead>
                  {orderData?.map((item) => {
                    const transformOrders = moment(item.create_time).format(
                      'YYYY.MM.DD'
                    )
                    return (
                      <tbody key={item.id}>
                        <tr className="text-center">
                          <th>商品</th>
                          <td>{transformOrders}</td>
                          <td>
                            <Link
                              to={`products/${item.order_number}`}
                              className="user_orders_link fw-bold"
                            >
                              {item.order_number}
                            </Link>
                          </td>
                          <td>{item.product_order_name}</td>
                          <td>{item.order_staus_name}</td>
                        </tr>
                      </tbody>
                    )
                  })}
                </Table>
              </div>
            </Col>
          )}
        </>
      )}
    </>
  )
}
export default UserProductsOrders
