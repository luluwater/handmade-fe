import React from 'react'
import { Link } from 'react-router-dom'
import './Login_SignUp_img/Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import LoginImg from '../src/assets/HANDMADE_LOGO.png'
const Login = () => {
  //往上一層要加上 "/""，如果是子層則不用加
  return (
    <>
      <div className="Frame">
        <div className="border d-flex justify-content-center">
          <img
            src={require('./Login_SignUp_img/login_pic_工作區域_3_1.png')}
            alt=""
          />
          <form action="" className="Form ">
            <h1 className="text-center">會員登入</h1>
            <input
              className="AccountInput"
              type="text"
              name="AccountInput"
              placeholder="會員帳號"
            />
            <br />
            <input
              className="PasswordInput"
              type="text"
              name="PasswordInput"
              placeholder="會員密碼"
            />
            <br />
            <a href="/ForgetPassword" className="ForgetPassword">
              忘記密碼
            </a>
            <br />
            <input type="submit" value="登入" className="Login" />
            <br />
            <Link to="/SignUp">
              <input type="submit" value="註冊" className="SignUp" />
            </Link>
            <h4 className="footerLogin text-center">or Login with</h4>
            <Link to="">
              <FontAwesomeIcon
                icon="fa-solid fa-user"
                size="xl"
                className="Navbar_awesomeIcon icon"
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

export default Login
