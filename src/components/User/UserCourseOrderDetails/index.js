import '../User.scss'
import React, { useState } from 'react'
import { Col, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useGetUserCourseOrderDetailsQuery } from '../../../services/userApi'
import CoursesDetails from './CoursesDetails'
import PaymentsDetails from './PaymentsDetails'

const UserCoursesOrderDetails = () => {
  const { orderNumber } = useParams()
  const { data } = useGetUserCourseOrderDetailsQuery(orderNumber)
  // console.log('data:', data)
  return (
    <>
      <Col>
        <div className="user_order_details_form mt-8">
          <Link
            to="/user/orders"
            className="user_order_details_link pt-5 m-7 d-flex"
          >
            <FontAwesomeIcon icon="fa-solid fa-angle-left" />
            <h6 className="ms-2 fw-bold">回到課程訂單</h6>
          </Link>
          {data?.map((item) => {
            return (
              <div
                key={item.id}
                className="mx-9 d-flex justify-content-between user_order_details_title"
              >
                <h6>訂單編號： {item.order_number}</h6>
                <h6>課程訂單</h6>
              </div>
            )
          })}
          {data?.map((item) => {
            const transformCourse = moment(item.create_time).format(
              'YYYY.MM.DD'
            )
            return (
              <Table
                key={item.id}
                className="m-8 mt-2 user_order_details_table"
              >
                <tbody>
                  <tr>
                    <th className="user_order_details_xlTitle">訂單日期</th>
                    <td>{transformCourse}</td>
                    <th className="user_order_details_xlTitle">付款方式</th>
                    <td className="user_order_list_title">
                      {item.payment_name}
                    </td>
                  </tr>
                  <tr>
                    <th className="user_order_details_xlTitle">訂購人</th>
                    <td>{item.user_name}</td>
                    <th className="user_order_details_xlTitle">訂單狀態</th>
                    <td>{item.order_staus_name}</td>
                  </tr>
                  {/* <tr>
                    <th className="user_order_details_xlTitle">收件人</th>
                    <td>{item.user_name}</td>
                  </tr> */}
                  <tr>
                    <th className="user_order_details_xlTitle">連絡電話</th>
                    <td colSpan={4}>{item.phone}</td>
                  </tr>
                  <tr>
                    <th className="align-middle user_order_details_mdTableTittle">
                      顧客備註
                    </th>
                    <td colSpan={4}>{item.note}</td>
                  </tr>
                </tbody>
              </Table>
            )
          })}
          {/* {showUserComment &&
            data?.map((item) => {
              return (
                <Comment
                  key={item.create_time}
                  id={item.id}
                  setShowUserComment={setShowUserComment}
                />
              )
            })} */}
          <CoursesDetails />
          <PaymentsDetails />
        </div>
      </Col>
    </>
  )
}
export default UserCoursesOrderDetails
