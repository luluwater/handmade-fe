import React from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SignUp = () => {
  //往上一層要加上 "/""，如果是子層則不用加
  return (
    <>
      <div className="SignUpFrame">
        <div className="border d-flex justify-content-center">
          <img
            className="SignUpPic"
            src={require('../../../assets/login/signup_pic.png')}
            alt=""
          />
          <form action="" className="SignUpForm ">
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
            <FontAwesomeIcon
              icon="fa-regular fa-eye"
              size="xl"
              className="iconEyeOne"
            />
            <br />
            <input
              className="RePasswordInputSignUp"
              type="password"
              name="RePasswordInputSignUp"
              placeholder="請再次輸入密碼"
            />
            <br />
            <FontAwesomeIcon
              icon="fa-regular fa-eye"
              size="xl"
              className="iconEyeOne"
            />
            <br />
            <input type="submit" value="註冊" className="NewSignUp" />

            <h2 className="footerLogin text-center">Or Login With</h2>
            <Link to="/https://www.google.com.tw/webhp?tabrw">
              <FontAwesomeIcon
                icon="fa-brands fa-google"
                size="xl"
                className="icon2"
                fixedWidth
              />
            </Link>

            <div className="Bg"></div>
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
