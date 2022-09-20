import React, { useState } from 'react'
import './SignUp.css'
import ShowPassword from '../ShowEye/ShowPassword'
import { Button } from 'react-bootstrap'
// import GoogleLogin from '../GoogleLogin'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRegisterMutation } from '../../../services/authApi'
import { useNavigate } from 'react-router'
import moment from 'moment'

const Signup = () => {
  const [register] = useRegisterMutation()

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const navigate = useNavigate()
  const userId = Math.floor(Math.random() * 10000)

  const formik = useFormik({
    initialValues: {
      account: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      account: Yup.string()
        .max(15, '帳號不得超過 15 字元')
        .required('請輸入使用者帳號'),
      email: Yup.string()
        .email('請輸入有效的信箱格式')
        .required('此欄位不得為空'),
      password: Yup.string().required('請輸入密碼').min(8, '密碼至少 8 字元'),
      confirmPassword: Yup.string()
        .required('請再次輸入密碼')
        .oneOf([Yup.ref('password'), null], '輸入密碼不一致'),
    }),

    onSubmit: (values) => {
      register({
        id: userId,
        account: values.account,
        email: values.email,
        password: values.password,
        create_time: moment().format('YYYY-MM-DD h:mm:ss'),
      })
      navigate('/login')
    },
  })

  const showAccountError = formik.touched.account && formik.errors.account
  const showEmailError = formik.touched.email && formik.errors.email
  const showPasswordError = formik.touched.password && formik.errors.password
  const showconfirmPasswordError =
    formik.touched.confirmPassword && formik.errors.confirmPassword

  const isAllvalid =
    !showAccountError &&
    !showEmailError &&
    !showPasswordError &&
    !showconfirmPasswordError

  return (
    <>
      <div className="SignUpFrame">
        <div className="border d-flex justify-content-center">
          <img
            className="SignUpPic"
            src={require('../../../assets/login/signup_pic.png')}
            alt="sigup illustration"
          />
          <form
            onSubmit={formik.handleSubmit}
            className="SignUpForm mb-5 mb-md-0"
          >
            <h1 className="SignUpTitle text-center">會員註冊</h1>
            <div className="position-relative mt-md-5">
              <label htmlFor="account"></label>
              <input
                className="PasswordInput"
                name="account"
                placeholder="帳號"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.account}
              />
            </div>
            {showAccountError && (
              <p className="mt-2 text-danger mb-0">{formik.errors.account}</p>
            )}
            <div className="mt-md-5">
              <label htmlFor="email"></label>
              <input
                className="AccountInput"
                type="text"
                name="email"
                placeholder="信箱"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>
            {showEmailError && (
              <p className="mt-2 text-danger mb-0">{formik.errors.email}</p>
            )}
            <div className="position-relative mt-5">
              <label htmlFor="password"></label>
              <input
                className="PasswordInput"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="密碼"
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
            <div className="position-relative mt-5">
              <label htmlFor="confirmPassword"></label>
              <input
                className="PasswordInput"
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="請再次輸入密碼"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              <ShowPassword
                showConfirmPassword={showConfirmPassword}
                setShowConfirmPassword={setShowConfirmPassword}
              />
            </div>
            {showconfirmPasswordError && (
              <p className="mt-2 text-danger mb-0">
                {formik.errors.confirmPassword}
              </p>
            )}
            <br />
            {isAllvalid ? (
              <Button type="submit" value="submit" className="NewSignUp">
                註冊
              </Button>
            ) : (
              <Button
                disabled
                type="submit"
                value="submit"
                className="NewSignUp"
              >
                註冊
              </Button>
            )}

            <h2 className="footerLogin text-center mb-5">Or Login With</h2>
            {/* <GoogleLogin /> */}
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
