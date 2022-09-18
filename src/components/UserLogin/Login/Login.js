import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ShowPassword from '../ShowEye/ShowPassword'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../../../services/authApi'
import { useNavigate } from 'react-router-dom'
import { Toast } from '../../UI/SwalStyle'

const Login = () => {
  const [login, { data, isSuccess: isLoginSucess }] = useLoginMutation()

  console.log(data)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // password eye
  const [eye, setEye] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [user, setUser] = useState({
    fullName: '',
    phone: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email && password) {
      await login({ email, password })
    } else {
      Toast.fire({
        icon: 'error',
        title: '缺少 email or password',
      })
    }
  }

  useEffect(() => {
    if (isLoginSucess) {
      Toast.fire({
        icon: 'success',
        title: '登入成功',
      })
      // navigate('/')
    }
  }, [isLoginSucess])

  return (
    <>
      <div className="LoginFrame">
        <div className="border d-flex justify-content-center">
          <img
            className="LoginPic"
            src={require('../../../assets/login/login_pic.png')}
            alt=""
          />
          <form
            action=""
            className="LoginForm position-relative "
            onSubmit={handleSubmit}
          >
            <h1 className="LoginTitle text-center">會員登入</h1>
            <input
              className="AccountInput"
              type="text"
              name="AccountInput"
              placeholder="會員帳號"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <input
              className="PasswordInput"
              type={eye ? 'text' : 'password'}
              name="PasswordInput"
              placeholder="會員密碼"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
                className="SignUp"
                // onClick={handleSubmit}
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
export default Login
