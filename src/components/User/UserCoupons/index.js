import React from 'react'
import '../User.scss'
import { Row, Form, Table } from 'react-bootstrap'
// import { useGetUserCouponsQuery } from '../../../services/userApi'
// import moment from 'moment'
export const UserCoupons = () => {
  // const { data, error, isLoading } = useGetUserCouponsQuery()
  // console.log('UserCoupons', data)

  return (
    <>
      <Form.Group>
        <Row>
          <div className="my-5 ms-7 d-flex justify-content-start">
            <button className="user_orders_btn fw-bold me-5">全部</button>
            <button className="user_orders_btn fw-bold me-5">可使用</button>
            <button className="user_orders_btn fw-bold me-5">已失效</button>
          </div>
        </Row>
      </Form.Group>
      <Table className="ms-8 user_order_list_table">
        <thead>
          <tr className="text-center">
            <th>開始日期</th>
            <th>有效日期</th>
            <th>折扣碼</th>
            <th>活動內容</th>
            <th>使用狀態</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>2022.08.02</td>
            <td>2022.08.10</td>
            <td>LUCKY77</td>
            <td>全館八五折</td>
            <td>$已失效</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default UserCoupons
