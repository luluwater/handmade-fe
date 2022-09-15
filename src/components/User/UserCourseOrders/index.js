import '../User.scss'
import React from 'react'
import { Row, Col, Form, Table } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import { useGetUserCourseOrdersQuery } from '../../../services/userApi'

const UserCourseOrders = () => {
  const { data } = useGetUserCourseOrdersQuery()
  // console.log('dataCourseOrders', data)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  return (
    <>
      <Form.Group>
        <Row>
          <div className="d-flex">
            <div className="fw-bold ms-6 user_orders_header">查詢訂單時間</div>
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
              <button className="user_orders_dateBtn fw-bold">確定送出</button>
            </div>
          </div>
        </Row>
      </Form.Group>
      <Col>
        <div className="mt-8">
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
              {data === 0 ? (
                <tbody>
                  <td className="text-center py-3" colSpan={6}>
                    目前沒有訂單
                  </td>
                </tbody>
              ) : (
                data?.map((item, v) => {
                  const transformOrders = moment(item.create_time).format(
                    'YYYY.MM.DD'
                  )
                  return (
                    <tbody key={item.id}>
                      <tr className="text-center">
                        <th>預約課程</th>
                        <td>{transformOrders}</td>
                        <td>
                          <Link
                            to={`courses/${item.order_number}`}
                            className="user_orders_link fw-bold"
                          >
                            {item.order_number}
                          </Link>
                        </td>
                        <td>{item.course_order_name}</td>
                        <td>{item.payment_name}</td>
                        <td>{item.order_staus_name}</td>
                      </tr>
                    </tbody>
                  )
                })
              )}
            </Table>
          </div>
          {/* <div className="user_orders_pages">
            <ul className="user_pages d-flex justify-content-center">
              <li className="user_pages_icon text-center">
                <FontAwesomeIcon icon="fa-solid fa-caret-left" />
              </li>
              <li className="user_pages_page text-center fw-bold">1</li>
              <li className="user_pages_icon text-center">
                <FontAwesomeIcon icon="fa-solid fa-caret-right" />
              </li>
            </ul>
          </div> */}
        </div>
      </Col>
    </>
  )
}
export default UserCourseOrders
