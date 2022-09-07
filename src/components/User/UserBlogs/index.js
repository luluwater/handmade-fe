import '../User.scss'
import React from 'react'
import { Row, Col, Form, Table, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'

const UserBlogs = () => {
  return (
    <>
      <Row>
        <div className="my-5 ms-7 d-flex justify-content-start">
          <button className="user_blogs_newBtn fw-bold">
            <FontAwesomeIcon
              className="me-2"
              icon="fa-solid fa-pen-to-square"
              size="sm"
            />
            新增文章
          </button>
        </div>
      </Row>
      <Row>
        <Table className="ms-8 user_blogs_table">
          <thead>
            <tr className="text-center">
              <th>文章標題</th>
              <th>文章日期</th>
              <th>留言數</th>
              <th>狀態</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>親手製作一件獨一無二的金屬飾品</td>
              <td>2022.08.10</td>
              <td>2</td>
              <td>
                <FontAwesomeIcon
                  className="user_blogs_btn"
                  icon="fa-solid fa-pen-to-square"
                  size="sm"
                />
                <FontAwesomeIcon
                  className="user_blogs_btn"
                  icon="fa-eye"
                  size="sm"
                  // icon={isShow ? 'fa-solid fa-heart' : 'fa-solid fa-eye-slash'}
                />
                <FontAwesomeIcon
                  className="user_blogs_btn"
                  icon="fa-regular fa-trash-can"
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </>
  )
}
export default UserBlogs
