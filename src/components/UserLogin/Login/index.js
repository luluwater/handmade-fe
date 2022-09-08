import React from 'react'
import { Link } from 'react-router-dom'
import './Login_SignUp_img/Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Login = () => {
  //往上一層要加上 "/""，如果是子層則不用加
  return (
    <>
      <div className="LoginFrame">
        <div className="border d-flex justify-content-center">
          <img
            className="LoginPic"
            src={require('../../../assets/login/login_pic.png')}
            alt=""
          />
          <form action="" className="LoginForm position-relative ">
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
            <FontAwesomeIcon
              icon="fa-regular fa-eye"
              size="xl"
              className="iconEyeTwo"
            />
            {/* <Link to="/FindPassword"> */}
            <a href="./FindPassword" className="ForgetPassword">
              忘記密碼?
            </a>
            {/* </Link> */}
            <br />
            <button type="submit" value="submit" className="Login">
              登入
            </button>
            <br />
            <Link to="/SignUp">
              <button type="submit" value="submit" className="SignUp">
                註冊
              </button>
            </Link>
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

export default Login
