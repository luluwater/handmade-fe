import Reply from '../Reply'
import moment from 'moment'
import { useEffect, useState } from 'react'
import CreateReply from '../CreateReply'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  useDeleteCommentMutation,
  useUpdateCommentMutation,
} from '../../../../../services/commentApi'

import Swal from 'sweetalert2'
import Form from 'react-bootstrap/Form'
import { Toast, swalButtons } from '../../../../UI/SwalStyle'

//TODO:再多建立一個資料表紀錄修改後的時間
const CommentItem = ({
  commentId,
  user,
  content,
  commentTime,
  filterReply,
  isEdited,
}) => {
  const [deleteComment] = useDeleteCommentMutation()
  const [updateComment] = useUpdateCommentMutation()

  const [isEditing, setIsEditing] = useState(false)
  const [contentInput, setContentInput] = useState(content)
  const [editTime, setEditTime] = useState('')

  const handleDelete = async () => {
    try {
      let btnResult = await swalButtons.fire({
        title: '確定刪除留言?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '刪除',
        cancelButtonText: '取消',
        reverseButtons: true,
      })

      if (btnResult.dismiss === Swal.DismissReason.cancel) {
        await swalButtons.fire('取消', '您的留言還在唷 :)', 'error')
      }
      await swalButtons.fire('成功刪除!', '留言已刪除', 'success')
      await deleteComment({ commentId })
    } catch (e) {
      console.log(e)
    }
  }

  const handleChangModal = () => {
    setIsEditing((pre) => !pre)
  }

  const handleChange = (e) => {
    setContentInput(e.target.value)
  }

  const updateData = {
    commentId,
    contentInput,
    comment_date: moment().format('YYYY-MM-DD h:mm:ss'),
  }
  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await updateComment({ updateData })
      await setIsEditing((pre) => !pre)
      await Toast.fire({
        icon: 'success',
        title: '修改成功',
      })
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    setEditTime(updateData.comment_date)
  }, [updateData.comment_date])

  return (
    <>
      <div className=" p-4 mt-3 mt-md-6 border-bottom border-secondary-dark">
        <div className="mx-4  d-flex flex-column mb-4">
          <div className="d-flex justify-content-end gap-3">
            {/* TODO: 修改再增加條件判斷拿 user 加上 seeion 的 user 來判斷 */}
            {user && (
              <Link
                to="#"
                onClick={handleChangModal}
                className="p-1 blog_comment_link text-secondary"
              >
                修改
                <FontAwesomeIcon icon="fas fa-edit " className=" ms-1" />
              </Link>
            )}
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
              <div className="d-flex flex-column flex-md-row align-items-center gap-3">
                <img
                  className="user_image"
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="user avatar"
                />
                <span>{user}</span>
              </div>
              <div>
                <div className="mb-3 text-end"> {commentTime}</div>
                {isEdited && (
                  <div className="text-muted"> 於 {editTime} 修改</div>
                )}
              </div>
            </div>

            {isEditing ? (
              <form onSubmit={handleUpdate}>
                <Form.Control
                  className="bg-skin-bright border-dark"
                  as="textarea"
                  rows={4}
                  value={contentInput}
                  onChange={handleChange}
                />
                <button className="rounded-2 border-0 bg-secondary text-white px-4 py-1 mt-3 d-none d-md-block ms-auto">
                  確認
                </button>
              </form>
            ) : (
              <p>{contentInput}</p>
            )}
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