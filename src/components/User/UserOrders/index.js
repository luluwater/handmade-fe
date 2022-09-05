import '../User.scss'
import React from 'react'
import { Row, Col, Form, Table } from 'react-bootstrap'
import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import UserPagination from '../UserPagination'
// import UserOrderTable from '../UserOrderTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import moment from 'moment'

const UserOrders = () => {
  // const [showUserAccount, setUserAccount] = useState(true)
  // const [startDate, setStartDate] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  // const transformTime = moment(create_time).format('MMMM DD YYYY')

  return (
    <>
      <Col>
        <div className="user_orders_form mt-8">
          <Form.Group>
            <Row>
              <div className="my-5 ms-7 d-flex justify-content-start">
                <button to="">
                  <button className="user_orders_btn fw-bold me-5">
                    全部訂單
                  </button>
                </button>
                <button to="">
                  <button className="user_orders_btn fw-bold me-5">
                    預約課程
                  </button>
                </button>
                <button to="">
                  <button className="user_orders_btn fw-bold me-5">
                    商品訂單
                  </button>
                </button>
              </div>
            </Row>
            <Row>
              <div className="d-flex">
                <div className="fw-bold ms-5 user_orders_header">
                  查詢訂單時間
                </div>
                <div className="d-flex align-items-center">
                  <DatePicker
                    className="ms-4 me-2 user_orders_date p-0"
                    dateFormat="yyyy/MM/dd"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                  />
                  <span className="m-1">-</span>
                  <DatePicker
                    className="user_orders_date ms-2"
                    dateFormat="yyyy/MM/dd"
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
          <div className="mx-7">
            <Table hover className="mt-5 user_orders_table">
              <thead>
                <tr className="text-center">
                  <th>訂單日期</th>
                  <th>訂單編號</th>
                  <th>收件人</th>
                  <th>付款方式</th>
                  <th>訂單狀態</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td>2022.08.02</td>
                  <td>640778</td>
                  <td>黑色小花貓</td>
                  <td>信用卡</td>
                  <td>已完成</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="user_orders_pages">
            <ul className="user_pages d-flex justify-content-center">
              <li className="user_pages_icon text-center">
                <FontAwesomeIcon icon="fa-solid fa-caret-left" />
              </li>
              <li className="user_pages_page text-center fw-bold">1</li>
              <li className="user_pages_icon text-center">
                <FontAwesomeIcon icon="fa-solid fa-caret-right" />
              </li>
            </ul>
          </div>
        </div>
      </Col>
    </>
  )
}
export default UserOrders
