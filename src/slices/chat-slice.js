import { createSlice } from '@reduxjs/toolkit'
/**
 * 1. 目前線上的人數
 * 2. 目前使用者是誰
 * 3. 目前使用者的房間
 * 4. 傳送的聊天內容
 */

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
