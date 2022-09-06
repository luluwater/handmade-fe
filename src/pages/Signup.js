import React from 'react'
import { Link } from 'react-router-dom'
import './Login_SignUp_img/SignUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SignUp = () => {
  //往上一層要加上 "/""，如果是子層則不用加
  return (
    <>
      <div className="Frame">
        <div className="border d-flex justify-content-center">
          <img
            className="SignUpPic"
            src={require('./Login_SignUp_img/login_pic_工作區域_6_1.png')}
            alt=""
          />
          <form action="" className="Form ">
            <h1 className="SignUpTitle text-center">會員註冊</h1>
            <input
              className="AccountInputSignUp"
              type="text"
              name="AccountInputSignUp"
              placeholder="帳號"
            />
            <br />
            <input
              className="EmailInputSignUp"
              type="email"
              name="EmailInputSignUp"
              placeholder="信箱"
            />
            <br />
            <input
              className="PasswordInputSignUp"
              type="password"
              name="PasswordInputSignUp"
              placeholder="密碼"
            />
            <br />
            <input
              className="RePasswordInputSignUp"
              type="password"
              name="RePasswordInputSignUp"
              placeholder="請再次輸入密碼"
            />
            <br />
            <input type="submit" value="註冊" className="NewSignUp" />

            <h4 className="text-center">or Login with</h4>
            <Link to="">
              <FontAwesomeIcon
                icon="fab fa-google-plus-square "
                size="xl"
                className="mx-3 Navbar_awesomeIcon"
                fixedWidth
              />
            </Link>
          </form>
          {/* <Link className="text-primary btn" to="/blog">
          會員登入
        </Link> */}
        </div>
      </div>
    </>
  )
}

export default SignUp
