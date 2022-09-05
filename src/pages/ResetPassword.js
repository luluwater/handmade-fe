import React from 'react'
import { Link } from 'react-router-dom'
import './Login_SignUp_img/Login.css'

const ResetPassword = () => {
  return (
    <>
      <div className="Frame">
        <div className="border d-flex justify-content-center">
          <img
            className="LoginPic"
            src={require('./Login_SignUp_img/login_pic_工作區域_3_1.png')}
            alt=""
          />
          <form action="" className="Form ">
            <h1 className="LoginTitle text-center">會員登入</h1>
            <input
              className="AccountInput"
              type="text"
              name="AccountInput"
              placeholder="會員帳號"
            />
            <br />
            <input
              className="PasswordInput"
              type="password"
              name="PasswordInput"
              placeholder="會員密碼"
            />
            <br />
            {/* <Link to="/FindPassword"> */}
            <a href="./FindPassword" className="ForgetPassword">
              忘記密碼
            </a>
            {/* </Link> */}
            <br />

            <input type="submit" value="登入" className="Login" />
            <br />
          </form>
          {/* <Link className="text-primary btn" to="/blog">
          會員登入
        </Link> */}
        </div>
      </div>
    </>
  )
}

export default ResetPassword
