import '../User.scss'
import React from 'react'
import { Row, Col, Form, Table } from 'react-bootstrap'
// import { useState } from 'react'
import { Link } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'
// import moment from 'moment'

const UserOrders = () => {
  return (
    <>
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
              <tbody>
                <tr className="text-center">
                  <td>預約課程</td>
                  <td>2022.08.02</td>
                  <td>
                    <Link to="details" className="user_orders_link fw-bold">
                      嘿嘿嘿嘿
                    </Link>
                  </td>
                  <td>黑色小花貓</td>
                  <td>信用卡</td>
                  <td>已完成</td>
                </tr>
              </tbody>
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
export default UserOrders
