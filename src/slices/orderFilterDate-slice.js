import { createSlice, current } from '@reduxjs/toolkit'
import moment from 'moment/moment'

//EXAMPLE
const initialState = {
  startDate: null,
  endDate: null,
  startPicker: null,
  endPicker: null,
}

export const orderFilterDateSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    OrderSetState: (state, action) => {
      state.startDate = moment(action.payload.startDate).format('YYYY-M-D')
      state.endDate =
        action.payload.endDate === 'Invalid date'
          ? state.startDate
          : moment(action.payload.endDate).format('YYYY-M-D')
      state.startPicker = action.payload.startDate
      state.endPicker = action.payload.endDate
      // console.log(current(state))
    },
  },
})

export const { OrderSetState } = orderFilterDateSlice.actions
export default orderFilterDateSlice.reducer
