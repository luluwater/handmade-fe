import { createSlice, current } from '@reduxjs/toolkit'
import moment from 'moment/moment'

//EXAMPLE
const initialState = {
  startDate: null,
  endDate: null,
}

export const filterDateSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setState: (state, action) => {
      state.startDate = action.payload.startDate
      state.endDate =
        action.payload.endDate === 'Invalid date'
          ? null
          : moment(action.payload.endDate).format('YYYY-M-D')
    },
    initFilterDate: (state, action) => {
      state.startDate = null
      state.endDate = null
    },
  },
})

export const { setState, initFilterDate } = filterDateSlice.actions
export default filterDateSlice.reducer