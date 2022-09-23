import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Navbar'
import { Outlet } from 'react-router'
import Cart from '../components/Cart/Cart'
import { useSelector } from 'react-redux'
import CrazyCatBot from '../components/Bot'

import React from 'react'

const Layout = () => {
  const showCart = useSelector((state) => state.cartUiReducer.cartIsVisible)
  return (
    <>
      <Navbar />
      {showCart && <Cart />}
      <Outlet />
      <CrazyCatBot />
      <Footer />
    </>
  )
}

export default Layout
