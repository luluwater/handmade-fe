import { createSlice, current } from '@reduxjs/toolkit'
import moment from 'moment/moment'

const initialState = {
  startDate: null,
  endDate: null,
}

export const userFilterDateSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setState: (state, action) => {
      state.startDate = moment(action.payload.startDate).format('YYYY-M-D')
      state.endDate = moment(action.payload.endDate).format('YYYY-M-D')
    },
  },
})

export const { setState } = userFilterDateSlice.actions
export default userFilterDateSlice.reducer
