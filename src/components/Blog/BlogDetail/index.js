import React from 'react'
import { useGetBlogQuery } from '../../../services/blogApi'
import { Link, useParams } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CommentList from './CommentList'

const BlogDetail = () => {
  const { blogId } = useParams()
  const { data, error, isLoading } = useGetBlogQuery(blogId)

  return (
    <>
      {data?.map((item) => (
        <>
          <ul className="list-unstyled d-flex text-black mt-4 ms-3">
            <li>
              <Link className="text-dark p-3" to="/">
                首頁
              </Link>
              /
            </li>
            <li>
              <Link className="text-dark p-3" to="/blog">
                部落格
              </Link>
              /
            </li>
            <li>
              <Link className="text-secondary-dark p-3 " to="login">
                {item.category_name}
              </Link>
            </li>
          </ul>
          <div className="container mb-6 mb-lg-8">
            <div className="text-center ">
              <Badge
                className="rounded-0 mb-2 align-self-start py-2 p-5 text-dark mb-4"
                bg="white"
              >
                {item.tag}
              </Badge>
              <h1 className="fw-bold fs-3 mb-6">{item.title}</h1>
              <h5 className="text-muted fs-5 mb-4">
                {item.name}
                <span className="ms-4">
                  {moment(item.create_time).format('YYYY.MM.DD')}
                </span>
              </h5>

              <div className="text-end mb-3 fs-6">
                <FontAwesomeIcon
                  className="text-primary"
                  icon="fa-solid fa-heart"
                />
                <span className="ms-2">收藏數{item.favorite_amount}</span>
              </div>
              <article>{item.content}</article>
            </div>
          </div>
          <div className="text-center mt-9 mb-4 fs-3 d-none d-md-block">
            / <spna class="mx-2">相關店家 </spna>/
          </div>
          <div className="bg-skin-bright d-lg-flex mx-6 py-5 px-3 px-md-10 gap-6  mb-7">
            <div className="position-relative">
              <img
                className="h-100 mb-5"
                src="https://images.unsplash.com/photo-1657299170237-2d4cd59b5156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />{' '}
              <h5 class="position-absolute top-50 start-50 translate-middle text-white fs-2">
                如是著物
              </h5>
            </div>
            <div>
              <div className="my-3 text-cut">{item.intro}</div>
              <p>地址：{item.address}</p>
              <p>交通方式：{item.route}</p>
              <p>連絡電話：{item.phone}</p>
              <p>營業時間：{item.opening_hour}</p>
            </div>
          </div>
          <CommentList />
        </>
      ))}
    </>
  )
}

export default BlogDetail
