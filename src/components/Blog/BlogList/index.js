import React, { useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import BlogItem from './BlogItem'
import { useGetBlogListQuery } from '../../../services/blogApi'

/**
 * 跟後端拿資料到這裡渲染
 * @returns
 */
const BlogList = () => {
  const { data, error, isLoading } = useGetBlogListQuery()

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
          {data?.map((item) => (
            <BlogItem
              key={item.blog_id}
              content={item.content}
              tag={item.tag}
              title={item.title}
              user_id={item.user_id}
              create_time={item.create_time}
              id={item.blog_id}
              name={item.name}
            />
          ))}
        </ListGroup>
      )}
    </>
  )
}

export default BlogList
