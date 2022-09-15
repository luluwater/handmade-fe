import '../User.scss'
import React from 'react'
import { Col, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import { Link } from 'react-router-dom'
// import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetUserProductOrderDetailsQuery } from '../../../services/userApi'
import ProductsDetails from './ProductsDetails'
import PaymentsDetails from './PaymentsDetails'

//TODO: 回到商品訂單頁
const UserProductsOrderDetails = () => {
  const { orderNumber } = useParams()
  const { data } = useGetUserProductOrderDetailsQuery(orderNumber)
  // const [showUserProductOrders, setShowUserProductOrders] = useState(true)
  // console.log("data:", data )
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
          {data?.map((item) => {
            return (
              <div
                key={item.id}
                className="mx-9 d-flex justify-content-between user_order_details_title"
              >
                <h6>訂單編號： {item.order_number}</h6>
                <h6>商品訂單</h6>
              </div>
            )
          })}
          {data?.map((item, v) => {
            const transformProducts = moment(item.create_time).format(
              'YYYY.MM.DD'
            )
            return (
              <Table
                key={item.id}
                className="m-8 mt-2 user_order_details_table"
              >
                <tbody>
                  <tr>
                    <th>訂單日期</th>
                    <td>{transformProducts}</td>
                    <th>付款方式</th>
                    <td>{item.payment_name}</td>
                  </tr>
                  <tr>
                    <th>訂購人</th>
                    <td>{item.user_name}</td>
                    <th>訂單狀態</th>
                    <td>{item.order_staus_name}</td>
                  </tr>
                  <tr>
                    <th>收件人</th>
                    <td colSpan={4}>{item.product_order_name}</td>
                  </tr>
                  <tr>
                    <th>連絡電話</th>
                    <td colSpan={4}>{item.phone}</td>
                  </tr>
                  <tr>
                    <th>顧客備註</th>
                    <td colSpan={4}>{item.note}</td>
                  </tr>
                </tbody>
              </Table>
            )
          })}
          <ProductsDetails />
          <PaymentsDetails />
        </div>
      </Col>
    </>
  )
}
export default UserProductsOrderDetails
