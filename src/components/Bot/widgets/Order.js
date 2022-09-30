import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Order = () => {
  const isLogin = useSelector((state) => state.authReducers).isLogin
  const userData = JSON.parse(localStorage.getItem('user'))?.user

  return (
    <div>
      你好，歡迎至會員專區查詢、管理個人帳戶資訊 !
      <br />
      HANDMADE 手手會員專區 :
      <Link to={isLogin || userData ? '/user/management' : 'login'}>
        至會員專區
      </Link>
    </div>
  )
}

export default Order
