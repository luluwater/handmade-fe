import React from 'react'
import moment from 'moment'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'
import { IMG_URL } from '../../../../utils/config'

/**
 * TODO: 拿資料來改變 Badge 的顏色
 * @param {data} param
 * @returns
 */
const BlogItem = ({
  content,
  tags,
  title,
  createTime,
  id,
  name,
  category,
  images,
}) => {
  const transformTime = moment(createTime).format('MMMM DD YYYY')

  return (
    <div className="mb-2 d-flex flex-column flex-lg-row gap-6 pb-4 mb-6 border-bottom ">
      <div className="blog_list_img w-100">
        <Link to={`/blog/${id}`}>
          <img
            src={`${IMG_URL}${images[0]?.img_name}`}
            className="h-100 object-fit d-flex d-lg-flex img-fluid"
            alt="blog post"
          />
        </Link>
      </div>
      <div className="max-w-md-65 d-flex flex-column">
        <div className="d-flex gap-3">
          <Badge
            className="rounded-0 mb-2 align-self-start py-2 px-3 text-dark"
            bg="skin-bright"
          >
            {category}
          </Badge>
          {tags.map((item) => {
            return (
              <Badge
                className="rounded-0 mb-2 align-self-start py-2 px-3 text-white"
                bg="secondary"
              >
                {item.tag_name}
              </Badge>
            )
          })}
        </div>

        <h4 className="fw-bold text-gray-darker mt-md-3">{title}</h4>
        <p className="text-muted">
          {name} <span className="ms-3">{transformTime}</span>
        </p>
        <p className="text-cut blog_list_content">{parse(content)}</p>
        <Link
          to={`/blog/${id}`}
          className="blog_list_btn fw-blod align-self-end"
        >
          READ MORE
        </Link>
      </div>
    </div>
  )
}

export default BlogItem
