import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDeleteReplyMutation } from '../../../../../services/replyApi'
import { swalButtons } from '../../../../UI/SwalStyle'
import Swal from 'sweetalert2'

const Reply = ({ id, account, createTime, avatar, reply }) => {
  const [deleteReply] = useDeleteReplyMutation()
  const userData = JSON.parse(localStorage.getItem('user'))?.user
  const isCurrentUser = account === userData.account
  const currentUserhasAvatar = userData.avatar !== null

  const handleDelete = async () => {
    try {
      let btnResult = await swalButtons.fire({
        title: '確定刪除回覆?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '刪除',
        cancelButtonText: '取消',
        reverseButtons: true,
      })
      console.log(btnResult)
      if (btnResult.dismiss === Swal.DismissReason.cancel) {
        return await swalButtons.fire('取消', '您的回覆還在唷 :)', 'error')
      }
      await swalButtons.fire('成功刪除!', '回覆已刪除', 'success')
      await deleteReply({ id })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-100 w-md-50 ms-auto mb-4 bg-skin-bright p-3 rounded-3"
      >
        <div className="d-flex align-items-end gap-3 justify-content-between mb-3">
          <div className="d-flex align-items-end gap-2">
            <img
              className="user_image rounded-circle"
              src={`${
                isCurrentUser && currentUserhasAvatar
                  ? userData.avatar
                  : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
              }`}
              alt="user avatar"
            />
            <span>{account}</span>
          </div>
          <div className="d-flex gap-3">
            <div className="fs-6 text-muted">{createTime}</div>
            <Link to="#" data-id={id} onClick={handleDelete}>
              <FontAwesomeIcon className="fs-6" icon="fas fa-times" />
            </Link>
          </div>
        </div>
        {reply}
      </div>
    </>
  )
}

export default Reply
