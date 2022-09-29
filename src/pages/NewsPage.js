import React from 'react'
import News from '../components/News'
import { useEffect } from 'react'

const NewsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <News />
    </>
  )
}

export default NewsPage
