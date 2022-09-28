import React, { useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../slices/auth-slice'
import './Button.scss'
import { useRegisterMutation } from '../../../services/authApi'
import moment from 'moment'

const GoogleLogin = () => {
  const [register] = useRegisterMutation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleCallbackResponse = async (res) => {
    console.log('Encode JWT ID token ' + res.credential)
    const rawData = await jwt_decode(res.credential)
    console.log(rawData)

    const userId = Math.floor(Math.random() * 10000)

    const userObject = {
      id: userId,
      account: rawData.name,
      name: rawData.name,
      email: rawData.email,
      avatar: rawData.picture,
      password: 'sercert',
      create_time: moment().format('YYYY-MM-DD h:mm:ss'),
    }
    await register(userObject)
    await dispatch(setUser({ user: userObject }))
    await navigate('/')
  }

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id:
        '1015492838146-8k6opbtutl4v32mr22trqhm3k5rhh364.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    })

    window.google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      {
        theme: 'outline',
        size: 'large',
        width: 50,
        height: 50,
      }
    )
  }, [])
  return <div className="text-center" id="signInDiv"></div>
}

export default GoogleLogin
