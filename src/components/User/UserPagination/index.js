import '../User.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserPagination = () => {
  return (
    <>
      <ul className="user_pages d-flex justify-content-center">
        <li className="user_pages_icon text-center">
          <FontAwesomeIcon icon="fa-solid fa-caret-left" />
        </li>
        <li className="user_pages_page text-center fw-bold">1</li>
        <li className="user_pages_icon text-center">
          <FontAwesomeIcon icon="fa-solid fa-caret-right" />
        </li>
      </ul>
      {/* <ul>{getPages}</ul> */}
    </>
  )
}
export default UserPagination
