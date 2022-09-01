import React from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDeleteReplyMutation } from '../../../../../services/replyApi'
import Swal from 'sweetalert2'

const Reply = ({ id, avatar, createTime, name, reply }) => {
  const [deleteReply] = useDeleteReplyMutation()

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
    },
    buttonsStyling: false,
  })

  const handleDelete = async (e) => {
    try {
      const parentEel = e.target.parentElement
      const targetId = parentEel.dataset.id
      if (targetId === undefined) return

      await swalWithBootstrapButtons
        .fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            deleteReply({ id: targetId })
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Cancelled',
              'Your imaginary file is safe :)',
              'error'
            )
          }
        })
    } catch (e) {
      console.log(e)
    }
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
