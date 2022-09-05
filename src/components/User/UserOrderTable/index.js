import '../User.scss'
import React from 'react'
import { Table } from 'react-bootstrap'

const UserOrderTable = () => {
  return (
    <>
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
    </>
  )
}
export default UserOrderTable
