import '../User.scss'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import user1 from '../../../assets/user/profile_1.png'
import { logout } from '../../../slices/auth-slice'

const UserCard = ({ account, email }) => {
  // console.log('name, email', name, email)
  const authLogOut = () => {
    dispatch(logout())
  }
  const dispatch = useDispatch()

  return (
    <>
      {/* 電腦版 */}
      <Col className="d-flex">
        <div className="user_profile_card mt-8">
          <Row>
            <div className="d-flex justify-content-center">
              <img
                className="mt-5 user_profile_card_img img-fluid"
                src={user1}
                alt="user1"
              />
            </div>
          </Row>
          {/* 感覺很難的預設+上傳照片 */}
          <Row className="justify-content-center">
            <button className="user_profile_card_btn mt-5 fw-bold">
              更換圖像
            </button>
          </Row>
          <div className="mt-5 text-center">您好，{account}</div>
          <div className="m-2 text-center">{email}</div>
          {/* 登出+回到首頁 */}
          <Row>
            <Link
              className="d-flex align-items-center justify-content-center"
              to="/"
            >
              <button
                onClick={authLogOut}
                className="user_profile_card_logout_btn mt-10 fw-bold"
              >
                我要登出
              </button>
            </Link>
          </Row>
        </div>
      </Col>
    </>
  )
}
export default UserCard
//className="d-flex justify-content-center align-items-center"
