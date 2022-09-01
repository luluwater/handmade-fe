import React from 'react'
import { useSelector } from 'react-redux'
import { useGetBlogQuery } from '../../services/blogApi'

const ChatRoom = () => {
  const commentList = useSelector((state) => state.commentReducer.comment)
  const { data } = useGetBlogQuery('all')
  console.log(data)
  console.log('commentList here', commentList)
  return <div>ChatRoom</div>
}

export default ChatRoom
