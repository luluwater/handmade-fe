import '../User.scss'
import React from 'react'
import { Row, Col, Form, Table } from 'react-bootstrap'
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
  return (
    <>
      {data === 0 ? (
        <div className="user_orders_text text-center py-3" colSpan={6}>
          目前沒有商品訂單
        </div>
      ) : (
        <>
          {' '}
          <Form.Group>
            <Row>
              <div className="d-flex">
                <div className="fw-bold ms-6 user_orders_header">
                  查詢訂單時間
                </div>
                <div className="d-flex align-items-center">
                  <DatePicker
                    className="ms-3 me-2 user_orders_date p-0"
                    dateFormat="yyyy.MM.dd"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                  />
                  <span className="m-1">-</span>
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
                <div className="d-flex align-items-center ms-5">
                  <button className="user_orders_dateBtn fw-bold">
                    確定送出
                  </button>
                </div>
              </div>
            </Row>
          </Form.Group>
          <Col>
            <div className="mt-3">
              <div className="mx-7">
                <Table className="mt-5 user_orders_table">
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
                  {data?.map((item) => {
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
              </div>
            </div>
          </Col>
        </>
      )}
    </>
  )
}
export default UserProductsOrders
