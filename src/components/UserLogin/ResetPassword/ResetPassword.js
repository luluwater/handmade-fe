import React from 'react'
import { Link } from 'react-router-dom'
import './ResetPassword.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ResetPassword = () => {
  return (
    <>
      <div className="ResetPasswordFrame">
        <div className="border d-flex justify-content-center">
          <img
            className="LoginPic"
            src={require('../../../assets/login/login_pic.png')}
            alt=""
          />
          <form action="" className="ResetPasswordForm ">
            <h1 className="ResetPasswordTitle text-center">設置新密碼</h1>
            <input
              className="ResetPasswordInput"
              type="password"
              name="ResetPasswordInput"
              placeholder="新密碼"
            />
            <br />
            <FontAwesomeIcon
              icon="fa-regular fa-eye"
              size="xl"
              className="iconEyeOne"
            />
            <br />
            <input
              className="ResetPasswordInputSecond"
              type="password"
              name="ResetPasswordInputSecond"
              placeholder="確認新密碼"
            />
            <br />

            <FontAwesomeIcon
              icon="fa-regular fa-eye"
              size="xl"
              className="iconEyeTwo"
            />
            <br />

            <button
              type="button"
              value="submit"
              className="ResetPasswordSubmit"
            >
              送出
            </button>
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
