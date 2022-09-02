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

  // 拿 useGetBlogQuery 從 server 拿到資料後，copy 一份新的 data 提供前端狀態使用
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
          <>
            <BlogItemSkeleton />
            <BlogItemSkeleton />
            <BlogItemSkeleton />
            <BlogItemSkeleton />
          </>
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
        </>
      )}
    </>
  )
}

export default BlogList
