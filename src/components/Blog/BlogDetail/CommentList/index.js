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

  const replyList = useSelector((state) => state.replyReducer.reply)

  const finalComment = data?.map((item) => {
    const filterReply = replyList?.filter((reply) => {
      return item.comment_id === reply.comment_id
    })
    const newComment = { ...item, filterReply }
    return newComment
  })

  useEffect(() => {
    dispatch(getComment(finalComment))
  }, [data, replyList])

  return (
    <>
      {finalComment?.map((item) => (
        <CommentItem
          key={item.comment_id}
          commentId={item.comment_id}
          user={item.name}
          userAvatar={item.avatar}
          content={item.content}
          commentTime={moment(item.comment_date).format('YYYY-MM-DD')}
          filterReply={item.filterReply}
        />
      ))}
    </>
  )
}

export default CommentList
