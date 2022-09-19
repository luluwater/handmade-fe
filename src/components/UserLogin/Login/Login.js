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
  const [login, { data, isSuccess: isLoginSucess, isError }] =
    useLoginMutation()

  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      Toast.fire({
        icon: 'error',
        title: '帳號或密碼錯誤',
      })
    }

    if (isLoginSucess) {
      Toast.fire({
        icon: 'success',
        title: '登入成功',
      })
      dispatch(setUser({ user: data }))
      navigate('/')
    }
  }, [dispatch, data, navigate, isError, isLoginSucess])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('無效的信箱').required('請輸入有效帳號'),
      password: Yup.string().required('請輸入密碼').min(8, '密碼至少 8 字元'),
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
            <div className="mt-md-5">
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
            </div>
            {showEmailError && (
              <p className="mt-2 text-danger mb-0">{formik.errors.email}</p>
            )}
            <div className="position-relative mt-md-5">
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
              <ShowPassword
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            </div>
            {showPasswordError && (
              <p className="mt-2 text-danger mb-0">{formik.errors.password}</p>
            )}
            {isError && (
              <div className="text-end mt-3 text-danger">
                <Link className="text-danger" to="/FindPassword">
                  忘記密碼?
                </Link>
              </div>
            )}

            <button className="Login">登入</button>
            <br />
            <Link to="/SignUp">
              <button type="submit" className="SignUp">
                註冊
              </button>
            </Link>
            <h2 className="footerLogin text-center mb-5">Or Login With</h2>
            <GoogleLogin />
          </form>
        </div>
      </div>
    </>
  )
}
export default Login
