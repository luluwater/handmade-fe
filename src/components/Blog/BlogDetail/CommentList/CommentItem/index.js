import React from 'react'

const CommentItem = () => {
  return (
    <div className="container mb-4">
      <div className="mx-4 border-bottom border-dark">
        <h6 className="pb-2 mb-5 fs-md-3">留言區</h6>
        <div className="flex-column">
          <div className="d-flex align-items-center gap-3 mb-3">
            <img
              className="user_image"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="user avatar"
            />
            <span>lu*****123</span>
          </div>
          <div className="d-flex gap-3 ">
            <div>這裡放星星</div>
            <div>2022.09.10</div>
          </div>
        </div>
        <p class="py-3">
          上課環境舒適, 陶藝老師專業又親切,
          作品完成超有成就感。防疫期間無法前往上課,
          還有居家自主練習包可以繼續捏陶, 好有趣~
          在台北市東區，可以有這麼大的拉胚空間！真的是完美！老師教學認真也願意分享一下小技巧！沒有想到三週之後也可以完成一些小作品。
        </p>
      </div>
    </div>
  )
}

export default CommentItem
