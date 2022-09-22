import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Navbar'
import { Outlet } from 'react-router'
import CrazyCatBot from '../components/Bot'

import React from 'react'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <CrazyCatBot />
      <div>12314</div>
      <Footer />
    </>
  )
}

export default Layout
