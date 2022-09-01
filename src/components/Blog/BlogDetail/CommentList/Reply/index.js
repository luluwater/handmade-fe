import React from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { useDeleteReplyMutation } from '../../../../../services/replyApi'

const Reply = ({ id, avatar, createTime, name, reply }) => {
  const [deleteReply] = useDeleteReplyMutation()

  //想個辦法同步執行
  const handleDelete = async (e) => {
    const parentEel = e.target.parentElement
    const targetId = parentEel.dataset.id
    if (targetId === undefined) return

    await deleteReply({ id: targetId })
  }

  return (
    <>
      <div className="w-100 w-md-50 ms-auto mb-4 bg-skin-bright p-3">
        <div className="d-flex align-items-end gap-3 justify-content-between mb-3">
          <div className="d-flex align-items-end gap-2">
            <img
              className="user_image"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="user avatar"
            />{' '}
            <span>{name}</span>
          </div>
          <div className="d-flex gap-3">
            <div className="fs-6 text-muted">
              {moment(createTime).startOf('hour').fromNow()}
            </div>
            <div data-id={id} onClick={handleDelete}>
              <FontAwesomeIcon className="fs-6" icon="fas fa-times" />
            </div>{' '}
          </div>
        </div>
        {reply}
      </div>
    </>
  )
}

export default Reply
