import React from 'react'
import '../User.scss'
import { Row, Col, Form, Table, Container } from 'react-bootstrap'

export const UserCoupons = () => {
  return (
    <>
      <Table className="ms-8 user_order_list_table">
        <thead>
          <tr className="text-center">
            <th>領取日期</th>
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
