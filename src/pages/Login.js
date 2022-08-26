import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  //往上一層要加上 "/""，如果是子層則不用加
  return (
    <>
      <div className="text-center">
        <h1>this is LOGIN page</h1>
        <Link className="text-primary btn" to="/blog">
          GO TO BLOG HOME
        </Link>
      </div>
    </>
  )
}

export default Login
