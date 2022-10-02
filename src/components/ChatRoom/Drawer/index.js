import * as React from 'react'
import Drawer from '@mui/material/Drawer'
import moment from 'moment/moment'

export default function TemporaryDrawer({
  friendInfo,
  showInfo,
  handleShowInfo,
}) {
  const { avatar, account, address, birthday, email } = friendInfo

  const momentBirthday = moment(birthday).format('YYYY MMMM Do')

  return (
    <div>
      <Drawer
        className="w-50"
        anchor="right"
        open={showInfo}
        onClose={handleShowInfo}
      >
        <div className="container px-md-10 py-4">
          <h3 className="text-center">個人檔案</h3>
          <div className="rounded-3">
            <img
              className="rounded-3 img-fluid chat_user_info-img"
              src={avatar}
              alt="user avatar"
            />
          </div>
        </div>
        <div className="container px-6">
          <h3 className="pb-4 text-center">{account}</h3>
          <h6>基本資料</h6>
          <hr />
          {address ? <p> 地址：{address}</p> : ''}
          <p> 生日：{momentBirthday}</p>
          <h6>聯絡方式</h6>
          <hr />
          <p> 信箱：{email}</p>
        </div>
      </Drawer>
    </div>
  )
}
