import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BlogDropdown = ({ item, handleDeleteBlog, localUser, isLogin }) => {
  return (
    <>
      <Dropdown className="me-md-6 ">
        <Dropdown.Toggle
          className="bg-skin-brighter btn-outline-skin-brighter border-0"
          id="dropdown-basic"
        >
          <FontAwesomeIcon
            className="fs-2 me-md-3  text-gray-darker"
            icon="fa-solid fa-ellipsis"
          />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            className="d-flex gap-3 align-items-center justify-content-center"
            href="/blog/create"
          >
            <span>新增文章</span>
            <FontAwesomeIcon icon="fa-solid fa-plus" />
          </Dropdown.Item>

          {isLogin || localUser ? (
            <>
              <Dropdown.Item
                className="d-flex gap-3 align-items-center justify-content-center"
                href={`/blog/${item.blog_id}/edit`}
              >
                <span>修改文章</span>
                <FontAwesomeIcon icon="fa-solid fa-pen" />
              </Dropdown.Item>
              <Dropdown.Item
                onClick={handleDeleteBlog}
                className="blog_dropdown_delete d-flex gap-3 align-items-center justify-content-center"
              >
                <span>刪除文章</span>
                <FontAwesomeIcon icon="fa-solid fa-delete-left" />
              </Dropdown.Item>
            </>
          ) : (
            <>
              <Dropdown.Item
                disabled
                className="d-flex gap-3 align-items-center justify-content-center"
                href={`/blog/${item.blog_id}/edit`}
              >
                <span>修改文章</span>
                <FontAwesomeIcon icon="fa-solid fa-pen" />
              </Dropdown.Item>
              <Dropdown.Item
                disabled
                onClick={handleDeleteBlog}
                className="blog_dropdown_delete d-flex gap-3 align-items-center justify-content-center"
              >
                <span>刪除文章</span>
                <FontAwesomeIcon icon="fa-solid fa-delete-left" />
              </Dropdown.Item>
            </>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default BlogDropdown
