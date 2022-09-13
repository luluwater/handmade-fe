import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sortValue: 'hot',
}

export const sortSelectSlice = createSlice({
  name: 'sortSelect',
  initialState,
  reducers: {
    setSort: (state, actions) => {
      state.sort = actions.payload
    },
  },
})

export const { setSort } = sortSelectSlice.actions
export default sortSelectSlice.reducer
