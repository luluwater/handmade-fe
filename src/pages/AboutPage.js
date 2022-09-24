import React from 'react'
import About from '../components/About'
import { useEffect } from 'react'
// import { Link } from 'react-router-dom'

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <About />
    </>
  )
}

export default AboutPage
