import { useState } from 'react'
import Reply from '../Reply'

const CommentItem = ({ user, content, commentTime }) => {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  /**
   * TODO: 把資料傳送出去到資料庫，要
   * @param {*}
   */
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChange = (e) => {
    console.log(e.target.value)
    setInputValue(e.target.value)
  }
  const handleCancel = () => {
    setInputValue('')
    setOpen(!open)
  }

  return (
    <>
      <div className="mx-4 border-bottom border-dark d-flex flex-column mb-4">
        <div className="d-flex align-items-center gap-4">
          <div className="d-flex align-items-center gap-3 mb-3">
            <img
              className="user_image"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="user avatar"
            />
            <span>{user}</span>
          </div>
          <div className="d-flex gap-3 ">
            <div>這裡放星星</div>
            <div>{commentTime}</div>
          </div>
        </div>
        <p>{content}</p>
        <button
          onClick={() => setOpen(!open)}
          aria-controls="comment-collapse"
          aria-expanded={open}
          className="rounded-2 border-0 bg-secondary text-white px-4 py-1 mb-3 d-none d-md-block ms-auto"
        >
          回覆留言
        </button>
        <Reply
          open={open}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleCancel={handleCancel}
          inputValue={inputValue}
        />
      </div>{' '}
    </>
  )
}

export default CommentItem
