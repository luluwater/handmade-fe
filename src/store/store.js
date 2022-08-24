import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

/**
 * 引入 slice ， 引入名稱統一為 xxxReducer
 */
import authReducer from '../slices/example-slice'

const reducers = combineReducers({
  /**
   * Reducer 放這裡
   */
  authReducer,
})

const store = configureStore({
  reducer: reducers,
})

export default store
