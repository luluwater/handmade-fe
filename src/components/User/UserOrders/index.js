import '../User.scss'
import React from 'react'
import { Row, Col, Form, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import UserPagination from '../UserPagination'
import UserOrderTable from '../UserOrderTable'
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
                <Link to="user/:userId/orders">
                  <button className="user_orders_btn fw-bold me-5">
                    全部訂單
                  </button>
                </Link>
                <Link to="user/:userId/courses">
                  <button className="user_orders_btn fw-bold me-5">
                    預約課程
                  </button>
                </Link>
                <Link to="user/:userId/products">
                  <button className="user_orders_btn fw-bold me-5">
                    商品訂單
                  </button>
                </Link>
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
            <UserOrderTable />
          </div>
          <div className="user_orders_pages">
            <UserPagination />
          </div>
        </div>
      </Col>
    </>
  )
}
export default UserOrders
