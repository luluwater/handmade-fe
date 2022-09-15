import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  googleUserData: {},
  userData: {},
  token: '',
  isLoggedIn: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    // logout: (state) => {
    //   state.user = null
    // },
  },
})
export const { login /*logout */ } = userSlice.actions
export const selectUser = (state) => state.user.user
export default userSlice.reducer
// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     auth: (state, action) => {
//       const newGoogleUserData = action?.payload
//       localStorage.setItem('profile', JSON.stringify({ ...action?.payload }))
//       return {
//         googleUserData: newGoogleUserData,
//       }
//     },
//   },
// })

// export const { auth } = authSlice.actions
// export default authSlice.reducer
