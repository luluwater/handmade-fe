import BlogItem from './BlogItem'
import React, { useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { getBlog } from '../../../slices/blog-slice'
import { useDispatch, useSelector } from 'react-redux'
import { useGetBlogQuery } from '../../../services/blogApi'
import BlogItemSkeleton from './BlogItemSkeleton'

/**
 * 跟後端拿資料到這裡渲染
 * @returns
 */
const BlogList = () => {
  const { data, isLoading } = useGetBlogQuery('all')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBlog(data))
  }, [data, dispatch])

  const blogList = useSelector((state) => state.blogReducer.blog)

  return (
    <>
      {isLoading ? (
        <>
          <BlogItemSkeleton />
          <BlogItemSkeleton />
          <BlogItemSkeleton />
          <BlogItemSkeleton />
          <BlogItemSkeleton />
        </>
      ) : (
        <>
          <ListGroup className="blog_list">
            {blogList?.map((item) => {
              return (
                <BlogItem
                  key={item.blog_id}
                  content={item.content}
                  tags={item.tags}
                  title={item.title}
                  images={item.img_url}
                  createTime={item.create_time}
                  id={item.blog_id}
                  name={item.name}
                  category={item.category_name}
                />
              )
            })}
          </ListGroup>
        </>
      )}
    </>
  )
}

export default BlogList
