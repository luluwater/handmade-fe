import React from 'react'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash, RiEyeLine } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const ShowPassword = ({ eye, setEye }) => {
  function clickEye() {
    setEye(eye ? false : true)
  }
  return (
    <>
      <div className="iconEyeTwo" onClick={clickEye}>
        <IconContext.Provider value={{ className: 'eye' }}>
          {eye ? <FaEye /> : <FaEyeSlash />}
        </IconContext.Provider>
      </div>
 
    </>
  )
}
export default ShowPassword
