import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ResetPassword.css'
import ShowPassword from '../ShowEye/ShowPassword'

const ResetPassword = () => {
  const [eye, setEye] = useState(false)
  const [eyeOne, setEyeOne] = useState(false)

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
              type={eye ? 'text' : 'password'}
              name="ResetPasswordInput"
              placeholder="新密碼"
            />
            <ShowPassword eye={eye} setEye={setEye} />
            <input
              className="ResetPasswordInputSecond"
              type={eyeOne ? 'text' : 'password'}
              name="ResetPasswordInputSecond"
              placeholder="確認新密碼"
            />
            <ShowPassword
              className="iconEyeOne"
              eye={eyeOne}
              setEye={setEyeOne}
            />
            <Link to="/login">
              <button
                type="button"
                value="submit"
                className="ResetPasswordSubmit"
                Link="/home"
              >
                送出
              </button>
            </Link>
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