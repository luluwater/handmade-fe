import React from 'react'
import moment from 'moment'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'

/**
 * TODO: 拿資料來改變 Badge 的顏色
 * @param {data} param
 * @returns
 */
const BlogItem = ({ content, tag, title, createTime, id, name, category }) => {
  const transformTime = moment(createTime).format('MMMM DD YYYY')

  return (
    <div className="mb-2 d-flex flex-column flex-lg-row gap-6 pb-4 mb-6 border-bottom ">
      <div className="blog_list_img w-100">
        <Link to={`/blog/${id}`}>
          <img className="h-100 d-flex d-lg-flex img-fluid" alt="blog post" />
        </Link>
      </div>
      <div className="blog_list_item d-flex flex-column">
        <div className="d-flex gap-3">
          <Badge
            className="rounded-0 mb-2 align-self-start py-2 px-3 text-dark"
            bg="primary"
          >
            {tag}
          </Badge>
          <Badge
            className="rounded-0 mb-2 align-self-start py-2 px-3 text-dark"
            bg="primary"
          >
            {category}
          </Badge>
        </div>
        <h4 className="fw-bold">{title}</h4>
        <p className="text-muted">
          {name} <span className="ms-3">{transformTime}</span>
        </p>
        <p className="text-cut">{content}</p>
        <Link
          to={`/blog/${id}`}
          className="blog_list_btn align-self-end text-gray-darker"
        >
          READ MORE
        </Link>
      </div>
    </div>
  )
}

export default BlogItem
