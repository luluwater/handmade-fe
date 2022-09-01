import Reply from '../Reply'
import CreateReply from '../CreateReply'

const CommentItem = ({
  commentId,
  user,
  content,
  commentTime,
  filterReply,
}) => {
  return (
    <>
      <div className="mx-4 border-bottom border-dark d-flex flex-column mb-4">
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

        <div className="h-50">
          {filterReply?.map((item) => (
            <Reply
              key={item.reply_id}
              id={item.reply_id}
              avatar={item.avatar}
              createTime={item.reply_date}
              name={item.name}
              reply={item.reply_content}
            />
          ))}
        </div>
        <CreateReply commentId={commentId} />
      </div>
    </>
  )
}

export default CommentItem
