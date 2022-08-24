import { createSlice } from '@reduxjs/toolkit'

//EXAMPLE
const initialState = {
  googleUserData: {},
  userData: {},
  token: '',
  isLoggedIn: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth: (state, action) => {
      /**
       * 放入 auth reducer 邏輯
       */
    },
  },
})

export const { auth } = authSlice.actions
export default authSlice.reducer
