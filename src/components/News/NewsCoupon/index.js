import React from 'react'
import Coupon from '../../../assets/news/coupon_logo.png'
import Button from 'react-bootstrap/Button'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCreateCouponMutation } from '../../../services/userApi'
import { toast } from 'react-toastify'
import '../../../styles/style.scss'

const NewsCoupon = () => {
  const userData = localStorage.getItem('user')
  // console.log(userData)
  const userId = JSON.parse(localStorage.getItem('user'))?.user.id
  const [getCoupon] = useCreateCouponMutation()

  const addCoupon = async () => {
    try {
      await toast.success(`已領取成功！`, {
        position: 'top-center',
        autoClose: 500,
        hideProgressBar: true,
        className: 'toast-addCouponMessage',
      })
      await getCoupon(userId)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <div className="mt-12 news_coupon_text d-flex justify-content-center">
        【 Yes, Girls！Let's 創造美好生活 】
        <br />
        專屬於女孩們的好康活動千萬別錯過！
      </div>
      <Row
        className="justify-content-center align-items-center m-0"
        data-aos="flip-left"
        data-aos-delay="300"
        data-aos-duration="600"
      >
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
            onClick={addCoupon}
          >
            領取折價券
          </Button>
        ) : (
          <Button
            className="mt-8 news_coupon_btn fw-bold justify-content-center"
            type="submit"
          >
            <Link className="news_coupon_link" to="/login">
              請登入會員
            </Link>
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
