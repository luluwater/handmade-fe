import React from 'react'
import Collapse from 'react-bootstrap/Collapse'
import Form from 'react-bootstrap/Form'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRepliesQuery } from '../../../../../services/replyApi'
import { getReply } from '../../../../../slices/reply-slice'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import { getComment } from '../../../../../slices/comment-slice'
import { useCreateReplyMutation } from '../../../../../services/commentApi'

const CreateComment = ({ commentId }) => {
  const { data, error, isLoading } = useRepliesQuery()
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const [createReply] = useCreateReplyMutation()

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleCancel = () => {
    setInputValue('')
    setOpen(!open)
  }

  useEffect(() => {
    dispatch(getReply(data))
  }, [data])

  /**
   * 把回覆傳送給後端和更新 slice
   * @param {event} e
   */
  const handleSubmit = (e) => {
    e.preventDefault()

    const reply = {
      id: uuidv4(),
      reply_content: inputValue,
      //USER_ID 從 LOCAL STROAGE拿
      user_id: '1',
      reply_date: moment().format('YYYY-MM-DD h:mm:ss'),
      comment_id: commentId,
    }
    createReply(reply)
    dispatch(getComment(data))
  }
  // console.log(moment().format('YYYY-MM-DD h:mm:ss'))

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
