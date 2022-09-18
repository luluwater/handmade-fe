import React, { useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../slices/auth-slice'

const GoogleLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleCallbackResponse = (res) => {
    console.log('Encode JWT ID token ' + res.credential)
    const rawData = jwt_decode(res.credential)

    //TODO:註冊時把這些 DATA 傳到 DB
    //! PASSWORD 比對上可能會錯
    const userObject = {
      account: rawData.name,
      name: rawData.name,
      email: rawData.email,
      avatar: rawData.picture,
      password: 'sercert',
    }

    dispatch(setUser({ user: userObject }))
    navigate('/')
  }

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT,
      callback: handleCallbackResponse,
    })

    window.google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      {
        theme: 'outline',
        size: 'large',
      }
    )
  }, [])
  return <div id="signInDiv"></div>
}

export default GoogleLogin
