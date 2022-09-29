import '../User.scss'
import React from 'react'
import { Col, Form, Table } from 'react-bootstrap'
import UserPassword from '../UserPassword'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import { useUpdateUserAccountMutation } from '../../../services/userApi'
import { Toast } from '../../UI/SwalStyle'
import { cityData, distData } from './location'

const UserAccount = ({ id, account, name, phone, birthday, address }) => {
  const [update] = useUpdateUserAccountMutation()
  const transformBirthday = moment(birthday).format('YYYY.MM.DD')
  const [showUserPassword, setShowUserPassword] = useState(false)
  const [showUserAccount, setShowUserAccount] = useState(true)
  const [startDate, setStartDate] = useState(null)

  const formik = useFormik({
    initialValues: {
      name: name,
      phone: phone,
      startDate: birthday,
      address: '',
      city: '',
      dist: '',
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .min(10, '電話至少 10 位數')
        .required('此欄位不得為空'),
      name: Yup.string().required('此欄位不得為空'),
      address: Yup.string().required('此欄位不得為空'),
      // startDate: Yup.string().required('此欄位不得為空'),
    }),
    onSubmit: async (values) => {
      console.log('saveMember', values)
      await update({
        id: id,
        name: values.name,
        phone: values.phone,
        birthday: moment(startDate).format('YYYY-MM-DD'),
        address: values.city + values.dist + values.address,
      })
    },
  })

  const showPhoneError = formik.touched.phone && formik.errors.phone
  const showNameError = formik.touched.name && formik.errors.name

  if (name === null || name === '') {
    name = ' 請新增姓名'
  }
  if (phone === null || phone === '') {
    phone = ' 請新增電話'
  }
  if (address === null || address === '') {
    address = ' 請新增地址'
  }
  if (birthday === null || birthday === '' || birthday === 'Invalid date') {
    birthday = ' 請新增生日'
  }

  const handleClosed = async () => {
    if (!isDataAllvalid) return
    try {
      await Toast.fire({
        icon: 'success',
        title: '已更新個人資料',
      })
      await setShowUserAccount(true)
    } catch (e) {
      console.log(e)
    }
  }

  const isDataAllvalid = formik.values.phone && formik.values.name
  const isAllvalid = !showPhoneError && !showNameError
  //&& !showStartDateError

  return (
    <>
      <Col className="user_account m-8">
        <div className="user_account_from">
          <h5 className="user_account_title fw-bold">帳號設定</h5>
          <Form.Group className="my-3">
            <Table className="d-flex user_account_table">
              <thead>
                <tr>
                  <th className="user_account_header text-end pe-8">帳號</th>
                </tr>
                <tr>
                  <th className="user_account_header text-end pe-8">密碼</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="user_account_text">{account}</td>
                </tr>
                <tr>
                  <td>
                    <button
                      className="user_account_btn fw-bold"
                      onClick={() => {
                        setShowUserPassword(true)
                      }}
                    >
                      修改密碼
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Form.Group>
          {showUserPassword && (
            <UserPassword id={id} closeUserPassword={setShowUserPassword} />
          )}
          <div>
            <h5 className="user_account_title fw-bold">
              會員資料
              <FontAwesomeIcon
                className="user_account_edit_show"
                icon="fa-solid fa-pen-to-square"
                size="sm"
                onClick={() => {
                  setShowUserAccount(false)
                }}
              />
            </h5>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <Form.Group className="user_account_form">
              <Table className="d-flex user_account_table">
                <thead>
                  <tr>
                    <th className="user_account_header user_account_mdHeader text-end pe-8 p-3">
                      姓名
                    </th>
                  </tr>
                  <tr>
                    <th className="user_account_header user_account_mdHeader text-end pe-8 p-3">
                      生日
                    </th>
                  </tr>
                  <tr>
                    <th className="user_account_header user_account_mdHeader text-end pe-8 p-3">
                      電話
                    </th>
                  </tr>
                  <tr>
                    <th className="user_account_header user_account_mdHeader text-end pe-8 p-3">
                      聯絡地址
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {showUserAccount ? (
                      <td htmlFor="name" className="user_account_text py-3">
                        {name}
                      </td>
                    ) : (
                      <td>
                        <Form.Control
                          className="user_account_input"
                          type="text"
                          name="name"
                          // placeholder={name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                        />
                        <Form.Control
                          className="user_account_mdInput"
                          type="text"
                          name="name"
                          placeholder="此欄位不得為空"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                        />
                      </td>
                    )}
                    {showNameError && (
                      <td className="user_account_formik_errors_xl align-middle mt-2 text-danger mb-0">
                        {formik.errors.name}
                      </td>
                    )}
                  </tr>
                  <tr>
                    {showUserAccount ? (
                      <td htmlFor="birthday" className="user_account_text py-3">
                        {transformBirthday}
                      </td>
                    ) : (
                      <td>
                        <div className="user_datepicker user_account_datepicker">
                          <DatePicker
                            className="user_account_inputBirth fw-bold"
                            dateFormat="yyyy.MM.dd"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            placeholder={transformBirthday}
                          />
                        </div>
                        <div className="user_datepicker user_account_mdDatepicker">
                          <DatePicker
                            className="user_account_mdInputBirth fw-bold"
                            dateFormat="yyyy.MM.dd"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            placeholder={transformBirthday}
                          />
                        </div>
                      </td>
                    )}
                    {/* {showStartDateError && (
                      <p className="mt-2 text-danger mb-0">
                        {formik.errors.startDate}
                      </p>
                    )} */}
                  </tr>
                  <tr>
                    {showUserAccount ? (
                      <td htmlFor="phone" className="user_account_text py-3">
                        {phone}
                      </td>
                    ) : (
                      <td>
                        <Form.Control
                          className="user_account_input"
                          type="text"
                          name="phone"
                          // placeholder={phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.phone}
                        />
                        <Form.Control
                          className="user_account_mdInput"
                          type="text"
                          name="phone"
                          placeholder="此欄位不得為空"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.phone}
                        />
                      </td>
                    )}
                    {showPhoneError && (
                      <td className="user_account_formik_errors_xl align-middle mt-2 text-danger mb-0">
                        {formik.errors.phone}
                      </td>
                    )}
                  </tr>
                  <tr>
                    {showUserAccount ? (
                      <td htmlFor="address" className="user_account_text py-3">
                        {address}
                      </td>
                    ) : (
                      <td className="d-flex">
                        <select
                          className="user_account_select mt-2"
                          name="city"
                          value={formik.values.city}
                          onChange={formik.handleChange}
                          // disabled={editProfile}
                        >
                          <option value="">選擇城市</option>
                          {cityData?.map((data, index) => {
                            return (
                              <option key={index} value={data.city}>
                                {data.city}
                              </option>
                            )
                          })}
                        </select>
                        <Form.Select
                          className="user_account_select ms-2 mt-2"
                          value={formik.values.dist}
                          name="dist"
                          onChange={formik.handleChange}
                          // disabled={editProfile}
                        >
                          <option value="">選擇地區</option>
                          {distData?.map((data, index) => {
                            if (data.city === formik.values.city)
                              return (
                                <option key={index} value={data.dist}>
                                  {data.dist}
                                </option>
                              )
                          })}
                        </Form.Select>
                        <Form.Control
                          className="user_account_input ms-2 mt-2 w-100"
                          type="text"
                          name="address"
                          // placeholder={address}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.address}
                        />
                        <Form.Control
                          className="user_account_mdInput"
                          type="text"
                          name="address"
                          placeholder="此欄位不得為空"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.address}
                        />
                      </td>
                    )}
                  </tr>
                </tbody>
              </Table>
              {showUserAccount ? (
                ''
              ) : (
                <div className="d-flex align-items-center justify-content-center">
                  <button
                    onClick={() => setShowUserAccount(true)}
                    className="fw-bold user_account_editCheck_btn me-5"
                    type="submit"
                  >
                    取消
                  </button>
                  {isAllvalid ? (
                    <button
                      className="fw-bold user_account_editCheck_btn"
                      type="submit"
                      onClick={handleClosed}
                    >
                      確認
                    </button>
                  ) : (
                    <button
                      disabled
                      className="fw-bold user_account_editCheck_btn"
                      type="submit"
                    >
                      確認
                    </button>
                  )}
                </div>
              )}
            </Form.Group>
          </form>
        </div>
      </Col>
    </>
  )
}
export default UserAccount
