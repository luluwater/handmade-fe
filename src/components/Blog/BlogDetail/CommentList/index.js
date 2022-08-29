import React from 'react'
import CommentItem from './CommentItem'

const CommentList = ({ user, content, commentTime }) => {
  return <CommentItem user={user} content={content} commentTime={commentTime} />
}

export default CommentList
