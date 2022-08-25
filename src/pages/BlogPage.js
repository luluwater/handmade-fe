import React, { useState, useEffect } from 'react'
import Blog from '../components/Blog'
import blogApi from '../apis/blogApi'
import { Link } from 'react-router-dom'

const BlogPage = () => {
  const [blog, setBlog] = useState([])

  const fetchUsers = async () => {
    const response = await blogApi.get('/api/blog')

    setBlog(response.data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  console.log(blog)

  return (
    <>
      <h1>BLOG PAGE</h1>
      <Link to="/blog/:id">todetail</Link>
      <Blog />
    </>
  )
}

export default BlogPage
