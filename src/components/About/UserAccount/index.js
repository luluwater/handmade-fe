import '../User.scss'
import React from 'react'
import { Row, Col, Form, Table } from 'react-bootstrap'

const UserAccount = () => {
  return (
    <>
      <Col>
        <div className="user_account_from mt-8">
          <h5 className="user_account_title fw-bold">帳號設定</h5>
          <Form.Group className="mb-3">
            <Table>
              <tr>
                <th className="user_account_header text-end pe-8">帳號</th>
                <td>000</td>
              </tr>
              <tr>
                <th className="user_account_header text-end pe-8">密碼</th>
                <td>
                  {/* <Form.Control type="password" placeholder="Password" /> */}
                  <button>修改密碼</button>
                </td>
              </tr>
            </Table>
          </Form.Group>
          <h5 className="user_account_title fw-bold">會員資料</h5>
        </div>
      </Col>
    </>
  )
}
export default UserAccount
