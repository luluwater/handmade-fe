import React from 'react'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const ShowPassword = ({ showPassword, setShowPassword }) => {
  function clickEye() {
    setShowPassword(showPassword ? false : true)
  }
  return (
    <>
      <div className="iconEyeTwo" onClick={clickEye}>
        <IconContext.Provider value={{ className: 'eye' }}>
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </IconContext.Provider>
      </div>
    </>
  )
}
export default ShowPassword
