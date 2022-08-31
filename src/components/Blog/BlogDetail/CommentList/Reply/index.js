import React from 'react'

const Reply = ({ avatar, createTime, name, reply }) => {
  return (
    <>
      <div className="w-100 w-md-50 ms-auto mb-4 bg-skin-bright p-3">
        <div className="d-flex align-items-end gap-3 mb-2">
          <div className="d-flex align-items-end gap-2">
            <img
              className="user_image"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="user avatar"
            />{' '}
            <span>{name}</span>
          </div>
          <div>{createTime}</div>
        </div>
        {reply}
      </div>
    </>
  )
}

export default Reply
