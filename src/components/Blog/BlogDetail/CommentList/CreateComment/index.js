import React from 'react'
import Collapse from 'react-bootstrap/Collapse'
import Form from 'react-bootstrap/Form'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRepliesQuery } from '../../../../../services/replyApi'
import { getReply } from '../../../../../slices/reply-slice'
import { v4 as uuidv4 } from 'uuid'
import { useCreateCommentMutation } from '../../../../../services/commentApi'

const CreateComment = () => {
  const { data, error, isLoading } = useRepliesQuery()
  const dispatch = useDispatch()
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
  useEffect(() => {
    dispatch(getReply(data))
  }, [data])

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-controls="comment-collapse"
        aria-expanded={open}
        className="rounded-2 border-0 bg-secondary text-white px-4 py-1 mb-3 d-none d-md-block ms-auto"
      >
        回覆留言
      </button>
      <Collapse in={open}>
        <form onSubmit={handleSubmit}>
          <Form.Group id="example-collapse-text">
            <Form.Control
              className=" bg-skin-bright"
              as="textarea"
              rows={4}
              value={inputValue}
              onChange={handleChange}
            />
            <div className="d-flex justify-content-end gap-3 align-items-center my-4">
              <button
                onClick={handleCancel}
                className="rounded-2 border-0 bg-secondary text-white px-4 py-1 d-none d-md-block"
              >
                取消
              </button>
              <button
                type="submit"
                className="rounded-2 border-0 bg-secondary-dark text-white px-4 py-1 d-none d-md-block"
              >
                送出
              </button>
            </div>
          </Form.Group>
        </form>
      </Collapse>
    </>
  )
}

export default CreateComment
