import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Navbar'
import { Outlet } from 'react-router'
import Cart from '../components/Cart/Cart'

import React from 'react'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
