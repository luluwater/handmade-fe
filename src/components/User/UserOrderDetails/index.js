import '../User.scss'
import React from 'react'
import { Row, Col, Form, Table, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { useState } from 'react'
import { Link } from 'react-router-dom'

const UserOrderDetails = () => {
  return (
    <>
      <Col>
        <div className="user_order_details_form mt-8">
          <Link
            to="/user/orders"
            className="user_order_details_link pt-5 m-7 d-flex"
          >
            <FontAwesomeIcon icon="fa-solid fa-angle-left" />
            <h6 className="ms-2 fw-bold">回所有訂單</h6>
          </Link>
          <div className="mx-9 d-flex justify-content-between user_order_details_title">
            <h6>訂單編號 640778</h6>
            <h6>課程訂單</h6>
          </div>
          <Table
            striped="columns"
            className="m-8 mt-2 user_order_details_table"
          >
            <tr>
              <th className="p-2">訂單日期</th>
              <td className="p-2">2022.08.02</td>
              <th className="p-2">付款方式</th>
              <td className="p-2">信用卡</td>
            </tr>
            <tr>
              <th className="p-2">訂購人</th>
              <td className="p-2">黑色小花貓</td>
              <th className="p-2">訂單狀態</th>
              <td className="p-2">已付款</td>
            </tr>
            <tr>
              <th className="p-2">收件人</th>
              <td className="p-2">黑色小花猫</td>
            </tr>
            <tr>
              <th className="p-2">連絡電話</th>
              <td className="p-2">09123456789</td>
            </tr>
            <tr>
              <th className="p-2">顧客備註</th>
              <td className="p-2">期待這個課程!!</td>
            </tr>
          </Table>
          <Table className="ms-8 user_order_list_table">
            <thead>
              <tr className="text-center">
                <th>課程名稱</th>
                <th>預約時段</th>
                <th>人數</th>
                <th>單價</th>
                <th>小計</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td>陶藝手捏體驗</td>
                <td>2022.08.02 14:00</td>
                <td>1</td>
                <td>$ 1200</td>
                <td>$ 1200</td>
              </tr>
            </tbody>
          </Table>
          <div className="ms-7 user_order_list_coupon">
            使用折價券： HOT SUMMER 30% off
          </div>
          <Row className="d-flex justify-content-end me-0">
            <Table striped="columns" className="m-8 mt-3 user_order_list_pay">
              <tr>
                <td className="p-1">訂單總金額</td>
                <td className="p-1 text-end">$ 2600</td>
              </tr>
              <tr>
                <td className="p-1">優惠券折扣</td>
                <td className="p-1 text-end">7折</td>
              </tr>
              <tr>
                <th className="p-1">實付金額</th>
                <th className="p-1 text-end">$ 1820</th>
              </tr>
            </Table>
          </Row>
        </div>
      </Col>
    </>
  )
}
export default UserOrderDetails
