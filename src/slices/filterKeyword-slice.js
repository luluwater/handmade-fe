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
  },
})

export const { setInputValue, setSearchWord } = filterKeywordSilce.actions
export default filterKeywordSilce.reducer
