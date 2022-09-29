import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  inputValue: '',
  searchWord: '',
}

export const filterKeywordSilce = createSlice({
  name: 'filterKeyword',
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload
    },
    setSearchWord: (state, action) => {
      state.searchWord = action.payload
    },
    initSearchWord: (state, action) => {
      state.inputValue = ''
      state.searchWord = ''
    },
  },
})

export const { setInputValue, setSearchWord, initSearchWord } =
  filterKeywordSilce.actions
export default filterKeywordSilce.reducer
