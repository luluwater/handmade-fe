import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchWord: '',
}

export const filterKeywordSilce = createSlice({
  name: 'filterKeyword',
  initialState,
  reducers: {
    setSearchWord: (state, action) => {
      state.searchWord = action.payload
    },
  },
})

export const { setSearchWord } = filterKeywordSilce.actions
export default filterKeywordSilce.reducer
