import React, { useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import BlogItem from './BlogItem'
import { useGetBlogQuery } from '../../../services/blogApi'
import { useDispatch, useSelector } from 'react-redux'
import { getBlog } from '../../../slices/blog-slice'

/**
 * 跟後端拿資料到這裡渲染
 * @returns
 */
const BlogList = () => {
  const { data, error, isLoading } = useGetBlogQuery('all')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBlog(data))
  }, [data])

  // 拿 useGetBlogQuery 從 server 拿到資料後，copy 一份新的 data 提供前端狀態使用
  const blogList = useSelector((state) => state.blogReducer.data)
  console.log(blogList)

  return (
    <>
      {isLoading ? (
        <>
          <div class="spinner-grow text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-info" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-light" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-dark" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </>
      ) : (
        <ListGroup className="blog_list">
          {blogList?.map((item) => (
            <BlogItem
              key={item.blog_id}
              content={item.content}
              tag={item.tag}
              title={item.title}
              createTime={item.create_time}
              id={item.blog_id}
              name={item.name}
              category={item.category_name}
            />
          ))}
        </ListGroup>
      )}
    </>
  )
}

export default BlogList
