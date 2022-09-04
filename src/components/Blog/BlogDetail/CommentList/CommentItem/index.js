import Reply from '../Reply'
import moment from 'moment'
import CreateReply from '../CreateReply'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDeleteCommentMutation } from '../../../../../services/commentApi'

const CommentItem = ({
  commentId,
  user,
  content,
  commentTime,
  filterReply,
}) => {
  const [deleteComment] = useDeleteCommentMutation()
  const handleDelete = async () => {
    try {
      console.log('12314')
      deleteComment({ commentId })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <div className=" p-4  mt-6 border-bottom border-secondary-dark">
        <div className="mx-4  d-flex flex-column mb-4">
          <div className="d-flex justify-content-end gap-3">
            <Link to="#" className="p-1 blog_comment_link text-secondary">
              修改
              <FontAwesomeIcon icon="fas fa-edit " className=" ms-1" />
            </Link>
            <Link
              to="#"
              onClick={handleDelete}
              className="p-1 blog_comment_link text-primary"
            >
              刪除
              <FontAwesomeIcon icon="fas fa-times" className=" ms-1" />
            </Link>
          </div>
          <div className="bg-skin-bright p-3 ">
            <div className="d-flex align-items-center gap-4  mb-3 justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <img
                  className="user_image"
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="user avatar"
                />
                <span>{user}</span>
              </div>
              <div>{commentTime}</div>
            </div>

            <p>{content}</p>
          </div>

          <div className="h-50 pt-5">
            {filterReply?.map((item) => {
              return (
                <Reply
                  key={item.reply_id}
                  id={item.reply_id}
                  avatar={item.avatar}
                  createTime={moment(item.reply_date)
                    .add(12, 'hour')
                    .calendar()}
                  name={item.name}
                  reply={item.reply_content}
                />
              )
            })}
          </div>
        </div>
        <CreateReply commentId={commentId} />
      </div>
    </>
  )
}

export default CommentItem
