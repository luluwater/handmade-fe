import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ShowPassword from '../ShowEye/ShowPassword'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../../../services/authApi'
import { useNavigate } from 'react-router-dom'
import { Toast } from '../../UI/SwalStyle'
import GoogleLogin from '../GoogleLogin'
import { setUser } from '../../../slices/auth-slice'

const Login = () => {
  const [login, { data, isSuccess: isLoginSucess }] = useLoginMutation()
  let email = '22222'
  let password = '2222'

  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (data?.error)
      return Toast.fire({
        icon: 'error',
        title: data.error,
      })

    if (isLoginSucess) {
      Toast.fire({
        icon: 'success',
        title: '登入成功',
      })
      dispatch(setUser({ user: data }))
      navigate('/')
    }
  }, [dispatch, data, navigate])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Please enter a valid email.')
        .required('Email must not be empty.'),
      password: Yup.string().required('Password must not be empty.').min(6),
    }),
    onSubmit: async (values) => {
      await login({ email: values.email, password: values.password })
    },
  })

  const showEmailError = formik.touched.email && formik.errors.email
  const showPasswordError = formik.touched.password && formik.errors.password

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
            className="LoginForm position-relative "
            onSubmit={formik.handleSubmit}
          >
            <h1 className="LoginTitle text-center">會員登入</h1>
            <label htmlFor="email"></label>
            <input
              className="AccountInput"
              type="text"
              name="email"
              placeholder="輸入帳號..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {showEmailError && (
              <p className="mt-2 text-danger mb-0">信箱格式錯誤</p>
            )}

            <label htmlFor="password"></label>
            <input
              className="PasswordInput"
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="輸入密碼..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {showPasswordError && (
              <p className="mt-2 text-danger mb-0">密碼格式錯誤</p>
            )}
            <ShowPassword
              showPassword={showPassword}
              setShowPassword={setShowPassword}
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
              <button type="submit" className="SignUp">
                註冊
              </button>
            </Link>
            <h2 className="footerLogin text-center">Or Login With</h2>
            <GoogleLogin />
          </form>
        </div>
      </div>
    </>
  )
}
export default Login
