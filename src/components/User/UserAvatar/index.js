import React from 'react'
import { Button } from 'react-bootstrap'
import {
  useUpdateUserAvatarMutation,
  useGetAvatarQuery,
} from '../../../services/userApi'
import '../User.scss'

export const UserAvatar = ({ setShowUserAvatar }) => {
  const id = JSON.parse(localStorage.getItem('user'))?.user.id
  // const userAvatar = JSON.parse(localStorage.getItem('user'))?.user.avatar

  const [update] = useUpdateUserAvatarMutation()
  const { data } = useGetAvatarQuery()

  const handleClick = async (e) => {
    try {
      await update({
        id: id,
        avatar: e.target.src,
      })
    } catch (error) {
      console.log(error)
    }
    // console.log('id', id, 'e.target.src', e.target.src)
  }

  return (
    <>
      <div className="user_avatar align-items-center user_avatar_md">
        {data?.map((v) => {
          return (
            <div
              onClick={handleClick}
              key={v.id}
              className="my-2 user_avatar_box"
            >
              <img
                className="user_avatar_img"
                src={v.img_name}
                alt="user_img"
              ></img>
            </div>
          )
        })}
        <div className="m-3 text-center">
          <Button
            onClick={() => setShowUserAvatar(false)}
            className="user_avatar_btn fw-bold"
            type="submit"
          >
            確定
          </Button>
        </div>
        <div className="m-3 text-center">
          <Button className="user_avatar_btn fw-bold">上傳照片</Button>
        </div>
      </div>
    </>
  )
}

export default UserAvatar
