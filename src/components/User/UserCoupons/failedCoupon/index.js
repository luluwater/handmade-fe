import '../../../../components/User/User.scss'
import React from 'react'
import '../../User.scss'
import { Row, Col } from 'react-bootstrap'
import { useGetUserCouponsQuery } from '../../../../services/userApi'
// import { useState } from 'react'
import moment from 'moment'

const FailedCoupon = () => {
  const userDataId = JSON.parse(localStorage.getItem('user'))?.user.id
  const { data } = useGetUserCouponsQuery(userDataId)
  if (!data)
    return (
      <p className="user_coupon_title text-center py-3" colSpan={6}>
        目前沒有已失效的優惠券
      </p>
    )
  // console.log(data)
  const usableCouponDetails = data.map((v) => ({
    ...v,
    end_date: moment(v.end_date).format('YYYY.MM.DD'),
    start_date: moment(v.start_date).format('YYYY.MM.DD'),
  }))
  const today = moment(new Date()).format('YYYY.MM.DD')
  const invalidCoupon = usableCouponDetails.filter(
    (v2) => v2.state === 1 && v2.end_date < today
  )
  // console.log(invalidCoupon)
  const usedCouponData = usableCouponDetails.filter((v2) => v2.state === 0)
  // console.log(usedCoupon)
  const failedCoupon = [...invalidCoupon, ...usedCouponData]
  // console.log(failedCoupon)

  return (
    <>
      {failedCoupon === 0 ? (
        <p className="user_coupon_title text-center py-3" colSpan={6}>
          目前沒有已失效的優惠券
        </p>
      ) : (
        failedCoupon?.map((item) => {
          const coupon = item.discount_type_id === 1
          const used = item.state === 0
          return (
            <Col
              lg={6}
              xs={12}
              key={item.id}
              className="user_coupon_mdCard p-0"
            >
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
                      開始日期：{item.start_date}
                    </p>
                    <p className="user_coupon_text m-1">
                      有效日期：{item.end_date}
                    </p>
                    <p className="user_coupon_text m-1">
                      內容：{item.coupon_name}
                    </p>
                    {used ? (
                      <p className="user_coupon_text m-1">使用狀態：已使用</p>
                    ) : (
                      <p className="user_coupon_text m-1">使用狀態：已失效</p>
                    )}
                  </div>
                </Col>
              </Row>
            </Col>
          )
        })
      )}
    </>
  )
}
export default FailedCoupon
