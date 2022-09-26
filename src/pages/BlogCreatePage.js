import React from 'react'
import BlogCreate from '../components/Blog/BlogCreate'
import { scrollToTop } from '../components/Filter/Paginate'

const BlogCreatePage = () => {
  scrollToTop()
  return <BlogCreate />
}

export default BlogCreatePage
