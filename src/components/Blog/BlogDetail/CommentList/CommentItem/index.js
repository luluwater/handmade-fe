import Reply from '../Reply'
import CreateComment from '../CreateComment'

const CommentItem = ({ user, content, commentTime, filterReply }) => {
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

        {filterReply?.map((item) => (
          <Reply
            key={item.reply_id}
            avatar={item.avatar}
            createTime={item.reply_date}
            name={item.name}
            reply={item.reply_content}
          />
        ))}
        <CreateComment />
      </div>
    </>
  )
}

export default CommentItem
