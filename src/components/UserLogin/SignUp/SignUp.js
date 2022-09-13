import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import './SignUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ShowPassword from '../ShowEye/ShowPassword'
// import { useUserRights } from '../../../useConText/UserRights'
import { API_URL } from '../../../utils/config'
import axios from 'axios'

const Signup = () => {
  //test user signup
  // const { user, setUser } = useUserRights()
  // const [SignUpUser, setSignUpUser] = useState({
  //   account: 'Apple',
  //   email: 'test@gmail.com',
  //   password: 'testtest',
  //   confirmPassword: 'testetest',
  // })
  //眼睛
  const [eye, setEye] = useState(false)
  const [eyeOne, setEyeOne] = useState(false)

  // function handleChange(e) {
  //   setSignUpUser({ ...SignUpUser, [e.target.name]: e.target.value })
  // }

  // async function handleSubmit(e) {
  //   e.preventDefault()
  //   let response = await axios.post(`${API_URL}/Signup`, SignUpUser, {
  //     withCredentials: true,
  //   })
  //   setSignUpUser(response.data)
  //   // setIsLogin(true);
  // }
  // console.log(user)
  // //TODO:製作記住帳號密碼
  // if (user) {
  //   return <Navigate to="/" />
  // }

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
            <button
              type="submit"
              value="submit"
              className="NewSignUp"
              // onClick={handleSubmit}
            >
              註冊
            </button>
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
