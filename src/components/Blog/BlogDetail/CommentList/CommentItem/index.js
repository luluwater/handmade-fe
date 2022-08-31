import Reply from '../Reply'

const CommentItem = ({ user, content, commentTime }) => {
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

        <Reply />
      </div>{' '}
    </>
  )
}

export default CommentItem
