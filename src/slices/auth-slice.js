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
      console.log(actions.payload.user)
      state.user = actions.payload.user
      state.googleUser = actions.payload.googleUser
      state.isLogin = true
    },
    // login: (state, action) => {
    //   state.user = action.payload
    // },
    // logout: (state) => {
    //   state.user = null
    // },
  },
})
export const { setUser, login, logout } = userSlice.actions

export default userSlice.reducer
