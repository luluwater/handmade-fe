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

//Service
import { blogApiService } from '../services/blogApi'
import { commentApiService } from '../services/commentAPI'
import { replyApiService } from '../services/replyApi'
import { storeApiService } from '../services/storeApi'
import { productApiService } from '../services/productApi'
import { categoryApiService } from '../services/categoryApi'
// import { userApiService } from '../services/userApi'
import { userApiService } from '../services/userApi'
import { chatApiService } from '../services/chatApi'
/**
 * 引入 slice ， 引入名稱統一為 xxxReducer
 */
const reducers = combineReducers({
  /**
   * Reducer 放這裡
   */
  productReducer,
  paginationReducer,
  filterStoreReducer,
  filterKeywordReducer,
  filterPriceReducer,
  storeReducer,
  replyReducer,
  blogReducer,
  commentReducer,
  sortSelectReducer,
  [blogApiService.reducerPath]: blogApiService.reducer,
  [commentApiService.reducerPath]: commentApiService.reducer,
  [replyApiService.reducerPath]: replyApiService.reducer,
  [productApiService.reducerPath]: productApiService.reducer,
  [storeApiService.reducerPath]: storeApiService.reducer,
  [categoryApiService.reducerPath]: categoryApiService.reducer,
  [userApiService.reducerPath]: userApiService.reducer,
  [chatApiService.reducerPath]: chatApiService.reducer,
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
  },
})

export default store
