import '../User.scss'
import React from 'react'
import { Row, Col, Form, Table, Container } from 'react-bootstrap'
import UserPassword from '../UserPassword'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserAccount = () => {
  const [showUserPassword, setUserPassword] = useState(false)
  return (
    <>
      <Col>
        <div className="user_account_from mt-8">
          <h5 className="user_account_title fw-bold">帳號設定</h5>
          <Form.Group className="mb-3 mt-3">
            <Table>
              <tr className="user_account_gg">
                <th className="user_account_header text-end pe-8">帳號</th>
                <td>000</td>
              </tr>
              <tr>
                <th className="user_account_header text-end pe-8">密碼</th>
                <td>
                  <button
                    className="user_account_btn fw-bold"
                    onClick={() => {
                      setUserPassword(true)
                    }}
                  >
                    修改密碼
                  </button>
                </td>
              </tr>
            </Table>
          </Form.Group>
          {showUserPassword && (
            <UserPassword closeUserPassword={setUserPassword} />
          )}
          <div className="mb-5">
            <h5 className="user_account_title fw-bold">
              會員資料
              <FontAwesomeIcon
                className="user_account_edit_show ms-2"
                icon="fa-solid fa-pen-to-square"
                size="sm"
              />
            </h5>
          </div>
          <Form.Group className="mb-3">
            <Table>
              <tr>
                <th className="user_account_header text-end pe-8">姓名</th>
                {/* <td>000</td> */}
                <td>
                  <Form.Control
                    className="user_account_input"
                    type="email"
                    placeholder="Enter email"
                  />
                </td>
              </tr>
              <tr>
                <th className="user_account_header text-end pe-8">生日</th>
                {/* <td>000</td> */}
                <td>
                  <Form.Control
                    className="user_account_input"
                    type="email"
                    placeholder="Enter email"
                  />
                </td>
              </tr>
              <tr>
                <th className="user_account_header text-end pe-8">電話</th>
                <td>000</td>
              </tr>
              <tr>
                <th className="user_account_header text-end pe-8">聯絡地址</th>
                <td>000</td>
              </tr>
            </Table>
          </Form.Group>
        </div>
      </Col>
    </>
  )
}
export default UserAccount
