import '../User.scss'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import user1 from '../../../assets/user/profile_1.png'
// import { useParams } from 'react-router-dom'

const UserCard = ({ name, email }) => {
  // console.log('name, email', name, email)
  return (
    <>
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
          {/* 讀取資料 */}
          <div className="mt-5 text-center">您好，{name}</div>
          <div className="m-2 text-center">{email}</div>
          {/* 登出+回到首頁 */}
          <Row className="justify-content-center">
            <button className="user_profile_card_logout_btn mt-10 fw-bold">
              我要登出
            </button>
          </Row>
        </div>
      </Col>
    </>
  )
}
export default UserCard
