import React from 'react'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const ShowPassword = ({
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
}) => {
  function clickEye() {
    if (setShowConfirmPassword) return setShowConfirmPassword((pre) => !pre)
    if (setShowPassword) return setShowPassword((pre) => !pre)
  }
  return (
    <>
      <div
        className="position-absolute top-50 end-0 translate-middle"
        onClick={clickEye}
      >
        <IconContext.Provider value={{ className: 'eye' }}>
          {showPassword || showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
        </IconContext.Provider>
      </div>
    </>
  )
}
export default ShowPassword
