import Reply from '../Reply'
import moment from 'moment'
import CreateReply from '../CreateReply'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IoAccessibilityOutline } from 'react-icons/io5'
const CommentItem = ({
  commentId,
  user,
  content,
  commentTime,
  filterReply,
}) => {
  return (
    <>
      <div className=" p-4  mt-6 border-bottom border-secondary-dark">
        <div className="mx-4  d-flex flex-column mb-4">
          <div className="d-flex justify-content-end gap-3">
            <Link to="#" className="text-secondary p-1">
              修改
              <IoAccessibilityOutline />
              <FontAwesomeIcon icon="fas fa-edit" />
            </Link>
            <Link to="#" className="text-primary p-1">
              刪除 <FontAwesomeIcon icon="fas fa-times" />
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
