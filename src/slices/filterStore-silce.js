import { createSlice, current } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

function removeFilterStores(state, storeName) {
  state.filterStores = state.filterStores.filter(
    (filterName) => filterName !== storeName
  )
}
function pushFilterStores(state, storeName) {
  if (!storeName || !state)
    return console.error('方法有兩個參數state、storeName')
  if (state.filterStores.includes(storeName)) return

  state.filterStores.push(storeName)
}

//EXAMPLE
const initialState = {
  list: [],
  filterStores: [],
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
      // console.log(action.payload)
      state.list = state.list.map((item) =>
        item.id === action.payload.category
          ? {
              ...item,
              innerList: item.innerList.map((store) => {
                if (store.title === action.payload.name) {
                  //add & remove filterStoresName
                  action.payload.checked
                    ? pushFilterStores(state, action.payload.name)
                    : removeFilterStores(state, store.title)
                  return {
                    ...store,
                    completed: action.payload.checked,
                  }
                } else {
                  return store
                }
              }),
            }
          : item
      )
    },
    handleSelecteAll: (state, action) => {
      state.list = state.list.map((item) => {
        if (item.id === action.payload.id) {
          const newChecked = !item.checked
          const newInnerList = item.innerList.map((store) => ({
            ...store,
            completed: newChecked,
          }))
          //add & remove filterStoresName
          item.innerList.map((store) =>
            newChecked
              ? pushFilterStores(state, store.title)
              : removeFilterStores(state, store.title)
          )

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
