import { useState } from 'react'
import Reply from '../Reply'
import { useCreateCommentMutation } from '../../../../../services/commentAPI'
import { v4 as uuidv4 } from 'uuid'

const CommentItem = ({ user, content, commentTime }) => {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const comment = {
    id: uuidv4(),
    content: inputValue,
    user_id: '27',
    blog_id: '72',
    comment_date: '2025-07-15 23:13:23',
  }
  const [createComment] = useCreateCommentMutation()

  /**
   * TODO: 把資料傳送出去到資料庫，要
   * @param {*}
   */

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleCancel = () => {
    setInputValue('')
    setOpen(!open)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createComment(comment)
    console.log('work')
  }

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
