import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

//EXAMPLE
const initialState = {
  list: [],
}

export const filterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addFilterStore: (state, action) => {
      state.list = action.payload
    },
    handleToggoleTitle: (state, action) => {
      state.list = state.list.map((item) =>
        item.id === action.payload.id ? { ...item, active: !item.active } : item
      )
    },
    handleToggole: (state, action) => {
      state.list = state.list.map((item) =>
        item.id === action.payload.selectedList.id
          ? {
              ...item,
              innerList: item.innerList.map((store) =>
                store.title === action.payload.name
                  ? {
                      ...store,
                      completed: action.payload.checked,
                    }
                  : store
              ),
            }
          : item
      )
    },
    handleSelecteAll: (state, action) => {
      state.list = state.list.map((item) => {
        if (item.id === action.payload.id) {
          const newChecked = !item.checked
          const newInnerList = item.innerList.map((v) => ({
            ...v,
            completed: newChecked,
          }))
          console.log('newInnerList', newInnerList)
          const newItem = {
            ...item,
            active: true,
            checked: newChecked,
            innerList: newInnerList,
          }
          return newItem
        } else {
          return item
        }
      })
    },
  },
})

export const {
  addFilterStore,
  handleToggoleTitle,
  handleToggole,
  handleSelecteAll,
} = filterSlice.actions
export default filterSlice.reducer
