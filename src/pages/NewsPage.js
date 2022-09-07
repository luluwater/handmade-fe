import React from 'react'
import News from '../components/News'
// import { Link } from 'react-router-dom'

const NewsPage = () => {
  //往上一層要加上 "/""，如果是子層則不用加
  return (
    <>
      <News />
    </>
  )
}

export default NewsPage
