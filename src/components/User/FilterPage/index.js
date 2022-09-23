import React from 'react'
import { Link } from 'react-router-dom'
import '../User.scss'
import { Row, Col, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import user1 from '../../../assets/user/profile_1.png'
import { logout } from '../../../slices/auth-slice'

export const FilterPage = ({ account }) => {
  // console.log('name, email', name, email)
  const authLogOut = () => {
    dispatch(logout())
  }
  const dispatch = useDispatch()
  return (
    <>
      {/* 電腦版 */}
      <Container className="user_navbar">
        <div className="mt-5 d-flex align-items-center justify-content-center">
          <nav className="user_navbar d-flex fw-bold align-items-center justify-content-center">
            <Link to="management" className="user_navbar_item">
              帳號管理
            </Link>
            <Link to="orders" className="user_navbar_item">
              訂單管理
            </Link>
            <Link to="likes" className="user_navbar_item">
              收藏清單
            </Link>
            <Link to="coupons" className="user_navbar_item">
              折價券
            </Link>
            <Link to="blogs" className="user_navbar_item">
              我的部落格
            </Link>
            <Link to="chat" className="user_navbar_item">
              聊天室
            </Link>
          </nav>
        </div>
      </Container>
      {/* 手機版 */}
      <Container className="user_profile_card_mobile">
        <Row className="my-5 p-0">
          <Col xs={2} className="d-flex justify-content-start">
            <img
              className="user_profile_card_img img-fluid"
              src={user1}
              alt="user1"
            />
          </Col>
          <Col xs={5} className="text-start">
            <div className="mt-3">您好，{account}</div>
          </Col>
          <Col xs={5} className="d-flex align-items-center justify-content-end">
            <Link to="/">
              <button
                onClick={authLogOut}
                className="user_profile_card_logout_btn fw-bold"
              >
                我要登出
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Container className="user_navbar_mobile my-8">
        <div className="mt-5 d-flex align-items-center justify-content-center">
          <nav className="user_navbar d-flex fw-bold align-items-center justify-content-center">
            <Link to="management" className="user_navbar_item">
              <FontAwesomeIcon icon="fa-solid fa-user" />
              <div className="user_navbar_mobile_text">帳戶</div>
            </Link>
            <Link to="orders" className="user_navbar_item">
              <FontAwesomeIcon icon="fa-solid fa-rectangle-list" />
              <div className="user_navbar_mobile_text">訂單</div>
            </Link>
            <Link to="likes" className="user_navbar_item">
              <FontAwesomeIcon icon="fa-solid fa-heart" />
              <div className="user_navbar_mobile_text">收藏</div>
            </Link>
            <Link to="coupons" className="user_navbar_item">
              <FontAwesomeIcon icon="fa-solid fa-rug" />
              <div className="user_navbar_mobile_text">優惠券</div>
            </Link>
            <Link to="blogs" className="user_navbar_item">
              <FontAwesomeIcon icon="fa-solid fa-book" />
              <div className="user_navbar_mobile_text">部落格</div>
            </Link>
            <Link to="/chat" className="user_navbar_item">
              <FontAwesomeIcon icon="fa-solid fa-comments" />
              <div className="user_navbar_mobile_text">聊天室</div>
            </Link>
          </nav>
        </div>
      </Container>
    </>
  )
}

export default FilterPage
