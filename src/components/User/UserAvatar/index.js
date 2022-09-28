import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import {
  useUpdateUserAvatarMutation,
  useGetAvatarQuery,
} from '../../../services/userApi'
import '../User.scss'

export const UserAvatar = ({ setShowUserAvatar }) => {
  const id = JSON.parse(localStorage.getItem('user'))?.user.id

  const [file, setFile] = useState()

  // const userAvatar = JSON.parse(localStorage.getItem('user'))?.user.avatar

  const [update, { data: resFilename }] = useUpdateUserAvatarMutation()
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
  }

  const saveFile = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('files', file)
    formData.append('id', id)

    update(formData)
  }

  console.log('resFilename', resFilename?.filename)

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
        <form onSubmit={handleSubmit}>
          <div className="m-2 text-center">
            <label className="user_avatar_btn" htmlFor="file">
              <p className="h-100 d-flex align-items-center justify-content-center">
                上傳照片
              </p>
              <input
                className="d-none"
                type="file"
                name="file"
                id="file"
                onChange={saveFile}
              />
            </label>
          </div>
          <button className="ms-4 user_avatar_btn">確定上傳</button>
          <div className="m-3 text-center">
            <button
              onClick={() => setShowUserAvatar(false)}
              className="user_avatar_btn fw-bold"
              type="submit"
            >
              確定
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default UserAvatar
