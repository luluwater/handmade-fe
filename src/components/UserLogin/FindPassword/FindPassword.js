import React from 'react'
import { Link } from 'react-router-dom'
import './FindPassword.scss'

const FindPassword = () => {
  //往上一層要加上 "/""，如果是子層則不用加
  return (
    <>
      <div className="PFrankWorkDisplay text-center">
        <p className="P_Section">忘記密碼了嗎?</p>
        <p className="P_Section  mt-3">請輸入您的電子信箱，</p>
        <p className="P_Section  mt-3 ">以接收密碼重置信件。</p>
      </div>
      <div className="FindPasswordFrame">
        <div className="border d-flex justify-content-center">
          <img
            className="LoginPic"
            src={require('../../../assets/login/login_pic.png')}
            alt=""
          />

          <form action="" className="FormFindPassword ">
            <h1 className="FindPassword text-center">找回密碼</h1>
            <br />
            <div className="PFrankWork text-center">
              <p className="P_Section">忘記密碼了嗎?</p>
              <p className="P_Section  mt-3">請輸入您的信箱</p>
              <p className="P_Section  mt-3 ">以接收密碼重置信件</p>
            </div>
            <input
              className="SignUpEmail"
              type="email"
              name="SignUpEmail"
              placeholder="註冊信箱"
              required
            ></input>
            <br />
            <Link to="/ResetPassword">
              <input type="submit" value="送出" className="submit" />
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

export default FindPassword
