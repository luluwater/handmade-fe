import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../../utils/config'

import { Link } from 'react-router-dom'
import './Login.css'
import { useUserRights } from '../../../useConText/UserRights'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ShowPassword from '../ShowEye/ShowPassword'

const Login = () => {
  const { user, setUser } = useUserRights()
  const [loginUser, setLoginUser] = useState({
    account: 'peter',
    password: '123546789',
  })

  // password eye
  const [eye, setEye] = useState(false)

  function handleChange(e) {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    let response = await axios.post(`${API_URL}/login`, loginUser, {
      withCredentials: true,
    })
    setUser(response.data)
    // setIsLogin(true);
    // }
    console.log(user)
    //TODO:製作記住帳號密碼
    if (user) {
      return <Navigate to="/" />
    }

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
                value={loginUser.account}
                onChange={handleChange}
              />
              <br />

              <input
                className="PasswordInput"
                type={eye ? 'text' : 'password'}
                name="PasswordInput"
                placeholder="會員密碼"
                value={loginUser.password}
                onChange={handleChange}
              />
              <ShowPassword eye={eye} setEye={setEye} />

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
                <button
                  type="submit"
                  value="submit"
                  className="SignUp"
                  onClick={handleSubmit}
                >
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
}
export default Login
