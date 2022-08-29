import React from 'react'
import { Outlet } from 'react-router'

const UserLayout = () => {
  return (
    <>
      <div> UserLayout上面的 </div>
      <div> UserLayout旁邊的 </div>
      <Outlet />
    </>
  )
}

export default UserLayout
