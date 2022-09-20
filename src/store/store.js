import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

// 狀態 slice
import replyReducer from '../slices/reply-slice'
import blogReducer from '../slices/blog-slice'
import commentReducer from '../slices/comment-slice'
import storeReducer from '../slices/store-slice'
import productReducer from '../slices/productCard-slice'
import paginationReducer from '../slices/filterPagination-slice'
import filterStoreReducer from '../slices/filterStore-silce'
import filterKeywordReducer from '../slices/filterKeyword-slice'
import filterPriceReducer from '../slices/filterPrice-slice'
import sortSelectReducer from '../slices/sortSelect-slice'
import filterDateReducer from '../slices/filterDate-silce'
import chatReducer from '../slices/chat-slice'

import authReducers from '../slices/auth-slice'
//Service
import { blogApiService } from '../services/blogApi'
import { commentApiService } from '../services/commentAPI'
import { replyApiService } from '../services/replyApi'
import { storeApiService } from '../services/storeApi'
import { productApiService } from '../services/productApi'
import { categoryApiService } from '../services/categoryApi'
import { chatApiService } from '../services/chatApi'
import { utilApiService } from '../services/untilApi'
import { courseApiService } from '../services/courseApi'
import { authApiService } from '../services/authApi'
import { userApiService } from '../services/userApi'

/**
 * 引入 slice ， 引入名稱統一為 xxxReducer
 */
const reducers = combineReducers({
  /**
   * Reducer 放這裡
   */
  authReducers,
  productReducer,
  paginationReducer,
  filterStoreReducer,
  filterKeywordReducer,
  filterPriceReducer,
  filterDateReducer,
  storeReducer,
  replyReducer,
  blogReducer,
  commentReducer,
  sortSelectReducer,
  chatReducer,
  [blogApiService.reducerPath]: blogApiService.reducer,
  [commentApiService.reducerPath]: commentApiService.reducer,
  [replyApiService.reducerPath]: replyApiService.reducer,
  [productApiService.reducerPath]: productApiService.reducer,
  [storeApiService.reducerPath]: storeApiService.reducer,
  [categoryApiService.reducerPath]: categoryApiService.reducer,
  [userApiService.reducerPath]: userApiService.reducer,
  [chatApiService.reducerPath]: chatApiService.reducer,
  [utilApiService.reducerPath]: utilApiService.reducer,
  [courseApiService.reducerPath]: courseApiService.reducer,
  [authApiService.reducerPath]: authApiService.reducer,
})

const store = configureStore({
  reducer: reducers,
  middleware: (getCurrentMiddleware) => {
    return getCurrentMiddleware()
      .concat(blogApiService.middleware)
      .concat(productApiService.middleware)
      .concat(storeApiService.middleware)
      .concat(categoryApiService.middleware)
      .concat(userApiService.middleware)
      .concat(commentApiService.middleware)
      .concat(replyApiService.middleware)
      .concat(chatApiService.middleware)
      .concat(utilApiService.middleware)
      .concat(courseApiService.middleware)
      .concat(authApiService.middleware)
  },
})

export default store
