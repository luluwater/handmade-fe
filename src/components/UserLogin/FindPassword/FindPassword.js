import React, { useEffect } from 'react'
import './FindPassword.scss'
import { useSendValidationMailMutation } from '../../../services/googleApi'
import { useState } from 'react'

const FindPassword = (props) => {
  const [mail, setMail] = useState('')
  const [isSend, setIsSend] = useState(false)
  const [sendVaildMail] = useSendValidationMailMutation()
  const { startingMinutes = 1, startingSeconds = 2 } = props
  const [mins, setMinutes] = useState(startingMinutes)
  const [secs, setSeconds] = useState(startingSeconds)

  useEffect(() => {
    if (!isSend) return
    let sampleInterval = setInterval(() => {
      if (secs > 0) {
        setSeconds(secs - 1)
      }
      if (secs === 0) {
        setMinutes(startingSeconds)
        if (mins === 0) {
          clearInterval(sampleInterval)
          setIsSend((pre) => !pre)
          setMinutes(startingMinutes)
        } else {
          setMinutes(mins - 1)
          setSeconds(59)
        }
      }
    }, 1000)
    return () => {
      clearInterval(sampleInterval)
    }
  }, [isSend, mins, secs, startingSeconds, startingMinutes])

  const handleSendMail = (e) => {
    e.preventDefault()
    setIsSend((pre) => !pre)
    sendVaildMail({ mail })
  }

  const handleChange = (e) => {
    setMail(e.target.value)
  }

  return (
    <>
      <div className="PFrankWorkDisplay text-center">
        <p className="P_Section">忘記密碼了嗎?</p>
        <p className="P_Section  mt-3">請輸入您的電子信箱，</p>
        <p className="P_Section  mt-3 ">以接收密碼重置信件。</p>
      </div>
      <div className="FindPasswordFrame">
        <div className="border d-flex justify-content-center">
          <img
            className="LoginPic"
            src={require('../../../assets/login/login_pic.png')}
            alt=""
          />

          <form className="FormFindPassword ">
            <h1 className="FindPassword text-center">找回密碼</h1>
            <br />
            <div className="PFrankWork text-center">
              <p className="P_Section">忘記密碼了嗎?</p>
              <p className="P_Section  mt-3">請輸入您的信箱</p>
              <p className="P_Section  mt-3 ">以接收密碼重置信件</p>
            </div>
            <input
              className="SignUpEmail"
              type="email"
              name="SignUpEmail"
              placeholder="註冊信箱"
              required
              disabled={isSend}
              onChange={handleChange}
            />
            <br />
            <button
              disabled={isSend || mail === ''}
              onClick={handleSendMail}
              type="submit"
              className={`submit ${
                isSend || mail === '' ? 'bg-skin-dark border-0' : 'bg-primary'
              }`}
            >
              {isSend ? '查看信箱' : '送出'}
            </button>
            {isSend && (
              <div className="text-center fs-5 mt-5 text-danger">
                {mins}:{secs < 10 ? `0${secs}` : secs} 後過期
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  )
}

export default FindPassword
