import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const BlogLayout = () => {
  return (
    <>
      <nav className="nav-bar text-center">
        <ul className="text-center list-unstyled">
          <li className="">
            <Link className="text-black btn btn-primary mb-2" to="/">
              go HOME
            </Link>
          </li>
          <li>
            <Link className="text-black btn btn-primary  mb-2" to="1234">
              BLOG DETAIL
            </Link>
          </li>
          <li>
            <Link className="text-black btn btn-primary  mb-2" to="edit">
              BLOg editor
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default BlogLayout
