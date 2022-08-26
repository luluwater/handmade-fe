import React from 'react'
import images from '../../../image'
import ListGroup from 'react-bootstrap/ListGroup'
import BlogItem from './BlogItem'

/**
 * 跟後端拿資料到這裡渲染
 * @returns 
 */
const BlogList = () => {
  return (
    <ListGroup className="blog_list">
      {images.map((img) => (
        <BlogItem img={img} />
      ))}
    </ListGroup>
  )
}

export default BlogList
