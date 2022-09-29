import React from 'react'
import BlogEdit from '../components/Blog/BlogEdit'
import { scrollToTop } from '../components/Filter/Paginate'

const BlogEditPage = () => {
  scrollToTop()
  return <BlogEdit />
}

export default BlogEditPage
