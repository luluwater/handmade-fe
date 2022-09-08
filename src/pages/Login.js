import React from 'react'
import '../components/UserLogin/Login/Login.css'

const Login = () => {
  //往上一層要加上 "/""，如果是子層則不用加
  return (
    <>
      <Login />
    </>
  )
}

export default Login
