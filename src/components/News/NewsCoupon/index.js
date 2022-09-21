// import '../About.scss'
import React from 'react'
import Coupon from '../../../assets/news/coupon_logo.png'
import Button from 'react-bootstrap/Button'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { useCreateCouponMutation } from '../../../services/userApi'

//TODO: login API 帶入 user_id > 執行  useCreateCouponMutation()
//TODO: 錯誤訊息
const NewsCoupon = () => {
  const userData = localStorage.getItem('user')
  console.log(userData)
  // const [getCoupon] = useCreateCouponMutation()
  return (
    <>
      <div className="mt-12 news_coupon_text d-flex justify-content-center">
        【 Yes, Girls！Let's 創造美好生活 】
        <br />
        專屬於女孩們的好康活動千萬別錯過！
      </div>
      <Row className="justify-content-center align-items-center m-0">
        <div className="news_coupon_imgBox">
          <img
            className="news_coupon_img img-fluid"
            src={Coupon}
            alt="Coupon"
          />
        </div>
        {userData ? (
          <Button
            className="mt-8 news_coupon_btn fw-bold justify-content-center"
            type="submit"
            // onClick={handleGetCoupon}
          >
            領取折價券
          </Button>
        ) : (
          <Button
            className="mt-8 news_coupon_btn fw-bold justify-content-center"
            type="submit"
            // onClick={handleGetCoupon}
          >
            <Link to="/login">請先登入會員 </Link>
          </Button>
        )}
      </Row>
      <h4 className="mb-5 news_card_title text-center mt-8 fw-bold">
        限定商品推薦
      </h4>
    </>
  )
}
export default NewsCoupon
