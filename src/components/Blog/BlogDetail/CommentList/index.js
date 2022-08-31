import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import CommentItem from './CommentItem'
import moment from 'moment'
import { useCommentsQuery } from '../../../../services/commentApi'
import { useSelector, useDispatch } from 'react-redux'
import { getComment } from '../../../../slices/comment-slice'

const CommentList = () => {
  const { blogId } = useParams()
  const { data, error, isLoading } = useCommentsQuery(blogId)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getComment(data))
  }, [data])

  const commentList = useSelector((state) => state.commentReducer.comment)

  return (
    <>
      {commentList?.map((item) => (
        <CommentItem
          key={item.comment_id}
          user={item.name}
          userAvatar={item.avatar}
          content={item.content}
          commentTime={moment(item.comment_date).format('YYYY-MM-DD')}
        />
      ))}
    </>
  )
}

export default CommentList
