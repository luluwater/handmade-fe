import '../User.scss'
import React from 'react'
import { Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserPassword = ({ closeUserPassword }) => {
  return (
    <>
      <div className="user_password_card rounded">
        <Form.Group className="user_password">
          <div className="d-flex justify-content-center align-items-center">
            <Form.Label className="fw-bold user_password_update text-center mb-5">
              新密碼
            </Form.Label>
            <Form.Control
              className="user_password_input mb-5"
              type="password"
              placeholder="Password"
            />
            <Form.Label className="user_password_show d-flex justify-content-center mb-5 ms-3">
              <FontAwesomeIcon
                icon="fa-solid fa-eye"
                size="lg"
                // icon={isShow ? 'fa-solid fa-heart' : 'fa-solid fa-eye-slash'}
              />
            </Form.Label>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Form.Label className="fw-bold user_password_update text-center mb-5">
              確認密碼
            </Form.Label>
            <Form.Control
              className="user_password_input mb-5"
              type="password"
              placeholder="Password"
            />
            <Form.Label className="user_password_show d-flex justify-content-center mb-5 ms-3">
              <FontAwesomeIcon
                icon="fa-solid fa-eye"
                size="lg"
                // icon={isShow ? 'fa-solid fa-heart' : 'fa-solid fa-eye-slash'}
              />
            </Form.Label>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button
              onClick={() => closeUserPassword(false)}
              className="fw-bold user_password_btn me-5"
              type="submit"
            >
              取消
            </button>
            <button className="fw-bold user_password_btn" type="submit">
              儲存
            </button>
          </div>
        </Form.Group>
      </div>
    </>
  )
}
export default UserPassword
