import React from 'react'
import { Link } from 'react-router-dom'
import '../User.scss'
import Container from 'react-bootstrap/Container'

export const FilterPage = () => {
  return (
    <>
      <Container>
        <div className="mt-5 user_filter d-flex align-items-center justify-content-center">
          <nav class="user_navbar d-flex fw-bold align-items-center justify-content-center">
            <Link to="management" className="item">
              帳號管理
            </Link>
            <Link to="orders" className="item">
              訂單管理
            </Link>
            <Link to="/" className="item">
              收藏清單
            </Link>
            <Link to="/" className="item">
              折價券
            </Link>
            <Link to="/" className="item">
              我的部落格
            </Link>
            <Link to="/" className="item">
              聊天室
            </Link>
          </nav>
        </div>
      </Container>
    </>
  )
}

export default FilterPage
