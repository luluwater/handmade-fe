import React from 'react'
import Login from '../components/UserLogin/Login/login'

const LoginPage = () => {
  //往上一層要加上 "/""，如果是子層則不用加
  return (
    <>
      <Login />
    </>
  )
}

export default LoginPage
