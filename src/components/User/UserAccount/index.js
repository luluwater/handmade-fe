import '../User.scss'
import React from 'react'
import { Row, Col, Form, Table, Container } from 'react-bootstrap'
import UserPassword from '../UserPassword'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import moment from 'moment'

const UserAccount = () => {
  const [showUserPassword, setUserPassword] = useState(false)
  const [showUserAccount, setUserAccount] = useState(true)
  const [startDate, setStartDate] = useState(new Date())
  // const transformTime = moment(create_time).format('MMMM DD YYYY')

  return (
    <>
      <Col>
        <div className="user_account_from mt-8">
          <h5 className="user_account_title fw-bold">帳號設定</h5>
          <Form.Group className="my-3">
            <Table>
              <tr>
                <th className="user_account_header text-end pe-8">帳號</th>
                <td className="user_account_text">000</td>
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
          <div>
            <h5 className="user_account_title fw-bold">
              會員資料
              <FontAwesomeIcon
                className="user_account_edit_show"
                icon="fa-solid fa-pen-to-square"
                size="sm"
                onClick={() => {
                  setUserAccount(false)
                }}
              />
            </h5>
          </div>
          <Form.Group className="user_account_form">
            <Table>
              <tr>
                <th className="user_account_header text-end pe-8">姓名</th>
                {showUserAccount === true ? (
                  <td className="user_account_text" showUserAccount>
                    000
                  </td>
                ) : (
                  <td>
                    <Form.Control
                      className="user_account_input"
                      type="email"
                      // placeholder="Enter name"
                    />
                  </td>
                )}
              </tr>
              <tr>
                <th className="user_account_header text-end pe-8">生日</th>
                {showUserAccount === true ? (
                  <td className="user_account_text">000</td>
                ) : (
                  <td>
                    <DatePicker
                      className="user_account_inputBirth"
                      dateFormat="yyyy/MM/dd"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                    {/* <DatePicker
                    // selected={date}
                    onSelect={handleDateSelect} 
                    onChange={handleDateChange}  
                    changed
                  /> */}
                  </td>
                )}
              </tr>
              <tr>
                <th className="user_account_header text-end pe-8">電話</th>
                {showUserAccount === true ? (
                  <td className="user_account_text">000</td>
                ) : (
                  <td>
                    <Form.Control
                      className="user_account_input"
                      type="phone"
                      // placeholder="Enter phone"
                    />
                  </td>
                )}
              </tr>
              <tr>
                <th className="user_account_header text-end pe-8">聯絡地址</th>
                {showUserAccount === true ? (
                  <td className="user_account_text">000</td>
                ) : (
                  <td>
                    <Form.Control
                      className="user_account_input"
                      type="address"
                      // placeholder="Enter address"
                    />
                  </td>
                )}
              </tr>
            </Table>
            {showUserAccount === false && (
              <div className="d-flex align-items-center justify-content-center">
                <button
                  onClick={() => setUserAccount(true)}
                  className="fw-bold user_account_editCheck_btn me-5"
                  type="submit"
                >
                  取消
                </button>
                <button
                  className="fw-bold user_account_editCheck_btn"
                  type="submit"
                >
                  確認
                </button>
              </div>
            )}
          </Form.Group>
        </div>
      </Col>
    </>
  )
}
export default UserAccount
