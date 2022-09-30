import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ResetPassword.css'
import ShowPassword from '../ShowEye/ShowPassword'
import { useParams } from 'react-router-dom'
import { useResetPassWordMutation } from '../../../services/authApi'
import { useNavigate } from 'react-router'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [resetPassword] = useResetPassWordMutation()
  const email = useParams().email

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      password: Yup.string().required('請輸入密碼').min(8, '密碼至少 8 字元'),
      confirmPassword: Yup.string()
        .required('請再次輸入密碼')
        .oneOf([Yup.ref('password'), null], '輸入密碼不一致'),
    }),
    onSubmit: async (values) => {
      console.log(email)
      await resetPassword({ email: email, password: values.password })
      // navigate('/login')
    },
  })

  const showPasswordError = formik.touched.password && formik.errors.password
  const showconfirmPasswordError =
    formik.touched.confirmPassword && formik.errors.confirmPassword

  const isAllvalid = !showPasswordError && !showconfirmPasswordError

  return (
    <>
      <div className="ResetPasswordFrame">
        <div className="border d-flex justify-content-center">
          <img
            className="LoginPic"
            src={require('../../../assets/login/login_pic.png')}
            alt=""
          />
          <form onSubmit={formik.handleSubmit} className="ResetPasswordForm ">
            <h1 className="ResetPasswordTitle text-center">設置新密碼</h1>
            <div className="mt-md-10">
              <div className="position-relative mt-5">
                <label htmlFor="password"></label>
                <input
                  className="PasswordInput"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="新密碼"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <ShowPassword
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />
              </div>

              {showPasswordError && (
                <p className="mt-2 text-danger mb-0">
                  {formik.errors.password}
                </p>
              )}
              <div className="position-relative mt-5">
                <label htmlFor="confirmPassword"></label>
                <input
                  className="PasswordInput"
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="確認新密碼"
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
            </div>

            <button
              disabled={!isAllvalid}
              type="submit"
              className={`ResetPasswordSubmit ${
                !isAllvalid ? 'bg-skin-dark border-0' : 'bg-primary'
              }`}
            >
              送出
            </button>

            <br />
          </form>
        </div>
      </div>
    </>
  )
}

export default ResetPassword
