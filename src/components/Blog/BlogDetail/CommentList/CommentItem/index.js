import React from 'react'

//判斷 USER 是否是自己，改變留言方式
const CommentItem = ({ user, content, commentTime }) => {
  return (
    <>
      <div className="container mb-4">
        <div className="mx-4 border-bottom border-dark d-flex flex-column">
          <div className="">
            <h6 className="pb-2 mb-3 fs-md-3 w-25">留言區</h6>
            <div className="flex-column">
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
          </div>
          <p>{content}</p>
          <button className="rounded-2 bg-secondary text-white px-4 py-1 mb-3 d-none d-md-block ms-auto">
            回覆留言
          </button>
        </div>
      </div>
    </>
  )
}

export default CommentItem
