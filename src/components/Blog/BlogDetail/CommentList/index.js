import React from 'react'
import { useParams } from 'react-router'
import CommentItem from './CommentItem'
import moment from 'moment'
import { useCommentsQuery } from '../../../../services/commentAPI'

const CommentList = ({ user, content, commentTime }) => {
  const { blogId } = useParams()
  const { data, error, isLoading } = useCommentsQuery(blogId)

  return (
    <>
      {data?.map((item) => (
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
