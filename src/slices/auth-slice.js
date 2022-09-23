import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  googleUser: {},
  isLogin: false,
  id: '',
  name: '',
  email: '',
  registerStatus: '',
  registerError: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, actions) => {
      localStorage.setItem(
        'user',
        JSON.stringify({ user: actions.payload.user })
      )
      state.user = actions.payload.user
      state.googleUser = actions.payload.googleUser
      state.isLogin = true
    },
    logout: (state, action) => {
      state.user = {}
      localStorage.removeItem('user', JSON.stringify(state.user))
      state.isLogin = false
    },
  },
})
export const { setUser, login, logout } = userSlice.actions

export default userSlice.reducer
