import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Navbar'
import { Outlet } from 'react-router'
import Cart from '../components/Cart/Cart'
import { useSelector } from 'react-redux'


import React from 'react'

const Layout = () => {
  const showCart = useSelector((state) => state.cartUiReducer.cartIsVisible)
  return (
    <>
      <Navbar />
      {showCart && <Cart />}
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
