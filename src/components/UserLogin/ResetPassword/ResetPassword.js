import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ResetPassword.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
            <br />
            <ShowPassword eye={eye} setEye={setEye} />
{/* 
            <FontAwesomeIcon
              icon="fa-regular fa-eye"
              size="xl"
              className="iconEyeOne"
            /> */}
            <br />
            <input
              className="ResetPasswordInputSecond"
              type={eyeOne ? 'text' : 'password'}
              name="ResetPasswordInputSecond"
              placeholder="確認新密碼"
            />
            <br />
            <ShowPassword eye={eyeOne} setEye={setEyeOne} />
 
            {/* <FontAwesomeIcon
              icon="fa-regular fa-eye"
              size="xl"
              className="iconEyeTwo" 
            /> */}
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
