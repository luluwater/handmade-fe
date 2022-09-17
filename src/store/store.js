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
import counterReducer from '../slices/counter-slice'
import cartUiReducer from '../slices/cart-ui-slice'
import productCartReducer from '../slices/productCart-slice'
import courseCartReducer from '../slices/courseCart-slice'
import filterKeywordReducer from '../slices/filterKeyword-slice'
import filterPriceReducer from '../slices/filterPrice-slice'
import sortSelectReducer from '../slices/sortSelect-slice'
import filterDateReducer from '../slices/filterDate-silce'
import userProductDetailsReducer from '../slices/userProductDetails-slice'


//Service
import { blogApiService } from '../services/blogApi'
import { commentApiService } from '../services/commentAPI'
import { replyApiService } from '../services/replyApi'
import { storeApiService } from '../services/storeApi'
import { productApiService } from '../services/productApi'
import { courseApiService } from '../services/courseApi'
import { categoryApiService } from '../services/categoryApi'
import { userApiService } from '../services/userApi'
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
  filterDateReducer,
  storeReducer,
  replyReducer,
  blogReducer,
  commentReducer,
  counterReducer,
  cartUiReducer,
  productCartReducer,
  courseCartReducer,
  sortSelectReducer,
  userProductDetailsReducer,
  [blogApiService.reducerPath]: blogApiService.reducer,
  [commentApiService.reducerPath]: commentApiService.reducer,
  [replyApiService.reducerPath]: replyApiService.reducer,
  [productApiService.reducerPath]: productApiService.reducer,
  [courseApiService.reducerPath]: courseApiService.reducer,
  [storeApiService.reducerPath]: storeApiService.reducer,
  [categoryApiService.reducerPath]: categoryApiService.reducer,
  [userApiService.reducerPath]: categoryApiService.reducer,
  [userApiService.reducerPath]: userApiService.reducer,
  [courseApiService.reducerPath]: courseApiService.reducer,
})

const store = configureStore({
  reducer: reducers,
  middleware: (getCurrentMiddleware) => {
    return getCurrentMiddleware()
      .concat(blogApiService.middleware)
      .concat(productApiService.middleware)
      .concat(courseApiService.middleware)
      .concat(storeApiService.middleware)
      .concat(categoryApiService.middleware)
      .concat(commentApiService.middleware)
      .concat(replyApiService.middleware)
      .concat(userApiService.middleware)
      .concat(courseApiService.middleware)
  },
})

export default store
