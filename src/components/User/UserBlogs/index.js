import '../User.scss'
import React from 'react'
import moment from 'moment'
import { Button, Row, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  useGetUserBlogQuery,
  useDeleteBlogMutation,
  useHideBlogMutation,
  useShowBlogMutation,
} from '../../../services/userApi'
import { Link, useParams } from 'react-router-dom'
import { Toast } from '../../UI/SwalStyle'

const UserBlogs = () => {
  const { blogId } = useParams()
  const [deleteBlog] = useDeleteBlogMutation()
  const [hideBlog] = useHideBlogMutation()
  const [showBlog] = useShowBlogMutation()
  const { data } = useGetUserBlogQuery()

  if (!data)
    return (
      <>
        <Row>
          <div className="my-5 ms-7 d-flex justify-content-start">
            <Link
              className="user_blogs_newBtn fw-bold text-center"
              to={`/blog/create`}
            >
              <FontAwesomeIcon
                className="me-2"
                icon="fa-solid fa-pen-to-square"
                size="sm"
              />
              新增文章
            </Link>
          </div>
        </Row>
        <Row>
          <p className="user_coupon_title text-center py-3">目前沒有文章</p>
        </Row>
      </>
    )
  return (
    <>
      <Row>
        <div className="my-5 ms-7 d-flex justify-content-start">
          <Link
            className="user_blogs_newBtn fw-bold text-center"
            to={`/blog/create`}
          >
            <FontAwesomeIcon
              className="me-2"
              icon="fa-solid fa-pen-to-square"
              size="sm"
            />
            新增文章
          </Link>
        </div>
      </Row>
      <Row>
        <Table className="ms-8 user_blogs_table">
          <thead>
            <tr className="text-center">
              <th>店家類別</th>
              <th>文章標題</th>
              <th>發布時間</th>
              <th>狀態</th>
            </tr>
          </thead>
          {data?.map((item) => {
            const handleDeleteBlog = async () => {
              try {
                await deleteBlog(item.blog_id)
                await Toast.fire({
                  icon: 'success',
                  title: '已刪除文章',
                })
              } catch (e) {
                console.log(e)
              }
            }
            const handleHideBlog = async () => {
              try {
                await hideBlog(item.blog_id)
                await Toast.fire({
                  icon: 'success',
                  title: '已下架文章',
                })
              } catch (e) {
                console.log(e)
              }
            }
            const handleShowBlog = async () => {
              try {
                await showBlog(item.blog_id)
                await Toast.fire({
                  icon: 'success',
                  title: '已上架文章',
                })
              } catch (e) {
                console.log(e)
              }
            }
            const transformBlog = moment(item.create_time).format('YYYY.MM.DD')
            return (
              <tbody key={item.blog_id}>
                <tr className="text-center align-middle">
                  <td>{item.category_name}</td>
                  <td className="user_likes_blogTitle text-start  user_likes_ellipsis">
                    <Link
                      to={`/blog/${item.blog_id}`}
                      className="user_orders_link fw-bold"
                    >
                      {item.title}
                    </Link>
                  </td>
                  <td>{transformBlog}</td>
                  <td>
                    <Link to={`/blog/${item.blog_id}/edit`}>
                      <FontAwesomeIcon
                        className="user_blogs_btn user_blogs_link "
                        icon="fa-solid fa-pen-to-square"
                        size="sm"
                      />
                    </Link>
                    <Button
                      className="user_blogs_eyeBtn"
                      onClick={() => {
                        if (item.valid === 1) {
                          handleHideBlog()
                        } else {
                          handleShowBlog()
                        }
                      }}
                    >
                      <FontAwesomeIcon
                        className="user_blogs_btn"
                        icon={
                          item.valid === 1 ? 'fa-eye' : 'fa-solid fa-eye-slash'
                        }
                        size="sm"
                      />
                    </Button>
                    <FontAwesomeIcon
                      className="user_blogs_btn"
                      icon="fa-regular fa-trash-can"
                      onClick={handleDeleteBlog}
                    />
                  </td>
                </tr>
              </tbody>
            )
          })}
        </Table>
      </Row>
    </>
  )
}
export default UserBlogs
