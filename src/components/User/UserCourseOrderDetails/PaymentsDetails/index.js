import '../../../../components/User/User.scss'
import React from 'react'
import { Table, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useCourseOrderPayQuery } from '../../../../services/userApi'

const PaymentsDetails = () => {
  const { orderNumber } = useParams()
  const { data } = useCourseOrderPayQuery(orderNumber)
  // console.log("data:", data)
  return (
    <>
      {data?.map((item) => {
        const useCoupon = item.coupon_name === '無使用折價券'
        const isCoupon = item.discount_type_id === 1
        //折價券
        const couponDiscount = Math.round(item.coupon_discount * 100) / 10
        //折價券付款
        const totalAmount = Math.ceil(item.total_amount / couponDiscount) * 10
        //現金折抵付款
        const discountAmount = Math.ceil(
          item.total_amount + item.coupon_discount
        )
        // console.log("couponDiscount", couponDiscount)
        // console.log("couponAmount", couponAmount)
        // console.log("isCoupon", isCoupon)
        // console.log("useCoupon ", useCoupon)
        return (
          <div key={item.id}>
            {useCoupon ? (
              ''
            ) : (
              <div className="ms-8  user_order_list_coupon">
                使用折價券： {item.coupon_name}
              </div>
            )}
            <Row className="justify-content-end m-6">
              <Table className="user_order_list_pay">
                <thead>
                  <tr>
                    <th>訂單總金額</th>
                    {isCoupon ? (
                      <td className="text-end">$ {totalAmount}</td>
                    ) : (
                      <td className="text-end">$ {discountAmount}</td>
                    )}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>折扣優惠</th>
                    {isCoupon ? (
                      <td className="text-end"> {couponDiscount} 折</td>
                    ) : (
                      <td className="text-end">$ {item.coupon_discount}</td>
                    )}
                  </tr>
                  <tr>
                    <th>實付金額</th>
                    <td className="text-end">$ {item.total_amount}</td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </div>
        )
      })}
    </>
  )
}
export default PaymentsDetails
