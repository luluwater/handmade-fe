import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Navbar'
import { Outlet } from 'react-router'

import React from 'react'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
