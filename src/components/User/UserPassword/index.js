import '../User.scss'
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useUpdatePasswordMutation } from '../../../services/userApi'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Toast } from '../../UI/SwalStyle'

const UserPassword = ({ closeUserPassword, id }) => {
  const [showPassword, setShowPassword] = useState(false)
  // console.log('id', id)
  const [updatePassword] = useUpdatePasswordMutation()
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required('請輸入更新的密碼')
        .min(8, '密碼至少 8 字元'),
      confirmPassword: Yup.string()
        .required('請再次輸入密碼')
        .oneOf([Yup.ref('password'), null], '輸入密碼不一致'),
    }),
    onSubmit: async (values) => {
      await updatePassword({ id: id, password: values.password })
    },
  })

  const handleClosed = async () => {
    if (!passwordIsAllvalid) return
    try {
      await Toast.fire({
        icon: 'success',
        title: '已更新密碼',
      })
      await closeUserPassword(false)
    } catch (e) {
      console.log(e)
    }
  }

  const showPasswordError = formik.touched.password && formik.errors.password
  const showconfirmPasswordError =
    formik.touched.confirmPassword && formik.errors.confirmPassword

  const passwordIsAllvalid =
    formik.values.password && formik.values.confirmPassword
  const isAllvalid = !showPasswordError && !showconfirmPasswordError

  return (
    <>
      <div className="user_password_card rounded">
        <form onSubmit={formik.handleSubmit}>
          <Form.Group className="user_password">
            {showPasswordError && (
              <div className="text-center text-danger mb-0">
                {formik.errors.password}
              </div>
            )}
            <div className="d-flex justify-content-center align-items-center">
              <Form.Label
                htmlFor="password"
                className="fw-bold user_password_update text-center mb-5"
              >
                新密碼
              </Form.Label>
              <Form.Control
                className="user_password_input mb-5"
                type={showPassword ? 'text' : 'password'}
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <Form.Label className="user_password_show d-flex justify-content-center mb-5 ms-3">
                <FontAwesomeIcon
                  name="showPassword"
                  // checked={showPassword}
                  onChange={(e) => {
                    setShowPassword(showPassword)
                  }}
                  size="lg"
                  icon={showPassword ? 'fa-eye' : 'fa-solid fa-eye-slash'}
                  onClick={() => {
                    setShowPassword(!showPassword)
                  }}
                />
              </Form.Label>
            </div>
            {showconfirmPasswordError && (
              <p className="text-center text-danger mb-0">
                {formik.errors.confirmPassword}
              </p>
            )}
            <div className="d-flex justify-content-center align-items-center">
              <Form.Label
                htmlFor="confirmPassword"
                className="fw-bold user_password_update text-center mb-5"
              >
                確認密碼
              </Form.Label>
              <Form.Control
                className="user_password_input mb-5"
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              <Form.Label className="user_password_show d-flex justify-content-center mb-5 ms-3">
                <FontAwesomeIcon
                  size="lg"
                  onChange={(e) => {
                    setShowPassword(showPassword)
                  }}
                  icon={showPassword ? 'fa-eye' : 'fa-solid fa-eye-slash'}
                  onClick={() => {
                    setShowPassword(!showPassword)
                  }}
                />
              </Form.Label>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Button
                onClick={() => closeUserPassword(false)}
                className="fw-bold user_password_btn me-5"
              >
                取消
              </Button>
              {isAllvalid ? (
                <Button
                  onClick={handleClosed}
                  value="submit"
                  className="fw-bold user_password_btn"
                  type="submit"
                >
                  儲存
                </Button>
              ) : (
                <Button
                  disabled
                  value="submit"
                  className="fw-bold user_password_btn"
                  type="submit"
                >
                  儲存
                </Button>
              )}
            </div>
          </Form.Group>
        </form>
      </div>
    </>
  )
}
export default UserPassword
