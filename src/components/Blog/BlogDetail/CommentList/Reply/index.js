import Collapse from 'react-bootstrap/Collapse'
import Form from 'react-bootstrap/Form'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import React, { useState, useEffect } from 'react'

import { useCreateCommentMutation } from '../../../../../services/commentApi'
import { useRepliesQuery } from '../../../../../services/replyApi'
import { useSelector, useDispatch } from 'react-redux'
import { getReply } from '../../../../../slices/reply-slice'

const Reply = () => {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const { data, error, isLoading } = useRepliesQuery()

  useEffect(() => {
    dispatch(getReply(data))
  }, [])

  const replyList = useSelector((state) => state.replyReducer.reply)
  const commentList = useSelector((state) => state.commentReducer.comment)

  // const filterData = commentList.map((item) => {
  //   console.log(item.comment_id)
  // })
  // console.log(commentList)

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
      {replyList?.map((item) => (
        <div className="w-100 w-md-50 ms-auto mb-4 bg-skin-bright p-3">
          <div className="d-flex align-items-end gap-3 mb-2">
            <div className="d-flex align-items-end gap-2">
              <img
                className="user_image"
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="user avatar"
              />{' '}
              <span>{item.name}</span>
            </div>
            <div>{moment(item.reply_date).format('YYYY-MM-DD')}</div>
          </div>
          {item.reply_content}
        </div>
      ))}

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

export default Reply
