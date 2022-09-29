import BlogItem from './BlogItem'
import React, { useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { getBlog } from '../../../slices/blog-slice'
import { useDispatch } from 'react-redux'
import { useGetBlogQuery } from '../../../services/blogApi'
import BlogItemSkeleton from './BlogItemSkeleton'

const BlogList = ({ blogList }) => {
  const { data, isLoading } = useGetBlogQuery('all')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBlog(data))
  }, [data, dispatch])

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
                  createTime={item.blog_create_time}
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
