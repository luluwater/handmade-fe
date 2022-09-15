import '../../../../components/User/User.scss'
import React from 'react'
import '../../User.scss'
import { Row, Col } from 'react-bootstrap'
import { useGetUserCouponsQuery } from '../../../../services/userApi'

// import { useState } from 'react'
import moment from 'moment'

const AllCoupon = () => {
  const { data } = useGetUserCouponsQuery()
  return (
    <>
      {data === 0 ? (
        <p className="user_coupon_title text-center py-3" colSpan={6}>
          目前沒有優惠券
        </p>
      ) : (
        <Row>
          {data?.map((item) => {
            const startDate = moment(item.start_date).format('YYYY.MM.DD')
            const endDate = moment(item.end_date).format('YYYY.MM.DD')
            const coupon = item.discount_type_id === 1
            // state 為結帳時是否使用 0:用 / 1:未用
            // 1. 可使用 : end_date > now + state = 1
            // 2. 已失效 : end_date < now + state = 1 /invalid
            // 3. 已使用 : state = 0 /used
            const today = moment(new Date()).format('YYYY.MM.DD')
            const usableCoupon = endDate > today
            const usable = item.state === 1
            const used = item.state === 0
            return (
              <Col xs={6} key={item.id} className="p-0">
                <Row className="user_coupon_card m-1">
                  <Col className="user_coupon_img d-flex align-items-center">
                    {coupon ? (
                      <img
                        key={item.discount_type_id}
                        src={require(`../../../../assets/coupon.png`)}
                        alt=""
                      ></img>
                    ) : (
                      <img
                        key={item.discount_type_id}
                        src={require(`../../../../assets/discount.png`)}
                        alt=""
                      ></img>
                    )}
                  </Col>
                  <Col className="d-flex align-items-center">
                    <div>
                      <p className="user_coupon_text m-1">
                        折扣碼：{item.discount_code}
                      </p>
                      <p className="user_coupon_text m-1">
                        開始日期：{startDate}
                      </p>
                      <p className="user_coupon_text m-1">
                        有效日期：{endDate}
                      </p>
                      <p className="user_coupon_text m-1">
                        內容：{item.coupon_name}
                      </p>
                      {usable && usableCoupon ? (
                        <p className="user_coupon_text m-1">使用狀態：可使用</p>
                      ) : used ? (
                        <p className="user_coupon_text m-1">使用狀態：已使用</p>
                      ) : (
                        <p className="user_coupon_text m-1">使用狀態：已失效</p>
                      )}
                    </div>
                  </Col>
                </Row>
              </Col>
            )
          })}
        </Row>
      )}
    </>
  )
}
export default AllCoupon
