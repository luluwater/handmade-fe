import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ShowPassword from '../ShowEye/ShowPassword'
import { Button } from 'react-bootstrap'

const Signup = () => {
  //test user signup
  // const { user, setUser } = useUserRights()
  // const [SignUpUser, setSignUpUser] = useState({
  //   account: 'Apple',
  //   email: 'test@gmail.com',
  //   password: 'testtest',
  //   confirmPassword: 'testetest',
  // })

  //TODO:從新命名
  const [eye, setEye] = useState(false)
  const [eyeOne, setEyeOne] = useState(false)

  //TODO:註冊送出
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className="SignUpFrame">
        <div className="border d-flex justify-content-center">
          <img
            className="SignUpPic"
            src={require('../../../assets/login/signup_pic.png')}
            alt=""
          />
          <form onClick={handleSubmit} className="SignUpForm ">
            <h1 className="SignUpTitle text-center">會員註冊</h1>
            <input
              className="AccountInputSignUp"
              type="text"
              name="AccountInputSignUp"
              placeholder="帳號"
              //   value={SignUpUser.account}
              //   onChange={handleChange}
            />
            <br />
            <input
              className="EmailInputSignUp"
              type="email"
              name="EmailInputSignUp"
              placeholder="信箱"
              //   value={SignUpUser.email}
              //   onChange={handleChange}
            />
            <br />
            <input
              className="PasswordInputSignUp"
              type={eye ? 'text' : 'password'}
              name="PasswordInputSignUp"
              placeholder="密碼"
              // value={SignUpUser.password}
              // onChange={handleChange}
            />
            <ShowPassword eye={eye} setEye={setEye} />
            <input
              className="RePasswordInputSignUp"
              type={eyeOne ? 'text' : 'password'}
              name="RePasswordInputSignUp"
              placeholder="請再次輸入密碼"
              // value={SignUpUser.confirmPasswor/
            />
            <ShowPassword eye={eyeOne} setEye={setEyeOne} />
            <br />
            <Button type="submit" value="submit" className="NewSignUp">
              註冊
            </Button>
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

export default Signup
