import React, { useEffect } from 'react'
import jwt_decode from 'jwt-decode'

const GoogleLogin = () => {
  const handleCallbackResponse = (res) => {
    console.log('Encode JWT ID token ' + res.credential)
    let userObject = jwt_decode(res.credential)

    console.log('responese', res)
    console.log(userObject)

    let expTimeStamp = userObject.exp
    let iatTimeStamp = userObject.iat
    let nbfTimeStamp = userObject.nbf
    let exp = new Date(expTimeStamp * 1000)
    let createTime = new Date(iatTimeStamp * 1000)
    let nbfive = new Date(nbfTimeStamp * 1000)
    console.log('過期時間 1 小時後', exp)
    console.log('current', createTime)
    console.log('5分鐘前', nbfive)
  }

  useEffect(() => {
    console.log(process.env.REACT_APP_GOOGLE_CLIENT)
    window.google.accounts.id.initialize({
      client_id:
        '731970977053-470u98spkc8sdgq98ncblrp5qqtv78jc.apps.googleusercontent.com',
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
