import React from 'react'
import { useGetBlogDetailQuery } from '../../../services/blogApi'
import { useParams } from 'react-router-dom'

const BlogDetail = () => {
  const { blogId } = useParams()
  const { data, error, isLoading } = useGetBlogDetailQuery(blogId)
  console.log(data)

  return (
    <h5 className="text-center">
      {data?.map((item) => (
        <div className="container">
          <div>首頁 / 部落格 / {item.category_id}</div>
          <div>{item.content}</div>
          <div>{item.content}</div>
        </div>
      ))}
    </h5>
  )
}

export default BlogDetail
