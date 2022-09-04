import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { useParams } from 'react-router'
import CommentItem from './CommentItem'
import { useCommentsQuery } from '../../../../services/commentApi'
import { getComment } from '../../../../slices/comment-slice'

const CommentList = () => {
  const { blogId } = useParams()
  const { data } = useCommentsQuery(blogId)
  const dispatch = useDispatch()

  const replyList = useSelector((state) => state.replyReducer.reply)

  const finalComment = data?.map((item) => {
    const filterReply = replyList?.filter((reply) => {
      return item.comment_id === reply.comment_id
    })
    return { ...item, filterReply }
  })

  // useEffect( () => {
  //   dispatch(getComment(finalComment))
  // }, [dispatch, finalComment])

  return (
    <>
      <div>
        {finalComment?.map((item) => (
          <CommentItem
            key={item.comment_id}
            commentId={item.comment_id}
            user={item.name}
            userAvatar={item.avatar}
            content={item.content}
            commentTime={moment(item.commentTime).calendar()}
            filterReply={item.filterReply}
          />
        ))}
      </div>
    </>
  )
}

export default CommentList