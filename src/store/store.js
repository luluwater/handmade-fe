import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import replyReducer from '../slices/reply-slice'
import blogReducer from '../slices/blog-slice'
import commentReducer from '../slices/comment-slice'

import { blogApiService } from '../services/blogApi'
import { commentApiService } from '../services/commentApi'
import { replyApiService } from '../services/replyApi'

/**
 * 引入 slice ， 引入名稱統一為 xxxReducer
 */
const reducers = combineReducers({
  blogReducer,
  replyReducer,
  commentReducer,
  [blogApiService.reducerPath]: blogApiService.reducer,
  [commentApiService.reducerPath]: commentApiService.reducer,
  [replyApiService.reducerPath]: replyApiService.reducer,
})

const store = configureStore({
  reducer: reducers,
  middleware: (getCurrentMiddleware) => {
    return getCurrentMiddleware()
      .concat(blogApiService.middleware)
      .concat(commentApiService.middleware)
      .concat(replyApiService.middleware)
  },
})

export default store
