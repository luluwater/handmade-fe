import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SignupWidget = () => {
  return (
    <>
      <div className=" text-center">
        <Link to="/signup" className="text-center">
          <FontAwesomeIcon className="me-3" icon="fa-solid fa-user-plus" />
          立即註冊
        </Link>
      </div>
    </>
  )
}

export default SignupWidget
