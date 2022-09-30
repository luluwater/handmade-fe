import '../User.scss'
import React from 'react'
import { Button, Col, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useGetUserProductOrderDetailsQuery } from '../../../services/userApi'
import ProductsDetails from './ProductsDetails'
import PaymentsDetails from './PaymentsDetails'
import { product, backToPage } from '../../../slices/userProductDetails-slice'
import { useNavigate } from 'react-router-dom'

const UserProductsOrderDetails = () => {
  const { orderNumber } = useParams()
  const { data } = useGetUserProductOrderDetailsQuery(orderNumber)
  // console.log("data:", data )
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const backToUserPage = () => {
    dispatch(backToPage())
    dispatch(product(true))
    navigate(-1)
  }
  return (
    <>
      <Col>
        <div className="user_order_details_form mt-8">
          <Button
            onClick={backToUserPage}
            className="user_order_details_link pt-5 m-7 d-flex"
          >
            <FontAwesomeIcon icon="fa-solid fa-angle-left" />
            <h6 className="ms-2 fw-bold">回到商品訂單</h6>
          </Button>
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
                    <th className="user_order_details_xlTitle">訂單日期</th>
                    <td>{transformProducts}</td>
                    <th className="user_order_details_xlTitle">付款方式</th>
                    <td className="user_order_list_title">
                      {item.payment_name}
                    </td>
                  </tr>
                  <tr>
                    <th className="user_order_details_xlTitle">收件人</th>
                    <td>{item.product_order_name}</td>
                    <th className="user_order_details_xlTitle">訂單狀態</th>
                    <td>{item.order_staus_name}</td>
                  </tr>
                  <tr>
                    <th className="user_order_details_xlTitle">連絡電話</th>
                    <td>{item.phone}</td>
                    <th className="user_order_details_xlTitle">收件方式</th>
                    <td>{item.delivery_name}</td>
                  </tr>
                  <tr>
                    <th className="user_order_details_xlTitle">地址</th>
                    <td colSpan={4}>{item.address}</td>
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
          <ProductsDetails />
          <PaymentsDetails />
        </div>
      </Col>
    </>
  )
}
export default UserProductsOrderDetails
