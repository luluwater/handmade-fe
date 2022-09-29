import React from 'react'
import BlogDetail from '../components/Blog/BlogDetail'
import { scrollToTop } from '../components/Filter/Paginate'

const BlogDetailPage = () => {
  scrollToTop()
  return <BlogDetail />
}

export default BlogDetailPage
