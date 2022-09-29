import '../User.scss'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { logout } from '../../../slices/auth-slice'
import UserAvatar from '../UserAvatar'

const UserCard = ({ account, email, avatar }) => {
  // const userData = JSON.parse(localStorage.getItem('user'))
  const [showUserAvatar, setShowUserAvatar] = useState(false)
  const dispatch = useDispatch()
  const authLogOut = () => {
    dispatch(logout())
  }

  return (
    <>
      <Col className="d-flex">
        <div className="user_profile_card mt-8">
          <Row>
            <div className="d-flex justify-content-center">
              {/* {userData?.user.avatar ? (
                <img
                  className="mt-5 user_profile_card_img img-fluid"
                  src={userData?.user.avatar}
                  alt="user_img"
                />
              ) : ( */}
              <img
                className="mt-5 user_profile_card_img img-fluid"
                src={avatar}
                alt="user_img"
              />
              {/* )} */}
            </div>
          </Row>
          {/* 預設+上傳照片 */}
          <Row className="justify-content-center">
            <button
              className="user_profile_card_btn mt-5 fw-bold"
              onClick={() => {
                setShowUserAvatar(true)
              }}
            >
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
      {showUserAvatar && <UserAvatar setShowUserAvatar={setShowUserAvatar} />}
    </>
  )
}
export default UserCard
