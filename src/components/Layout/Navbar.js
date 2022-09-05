import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../src/assets/HANDMADE_LOGO.png'
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <>
      <nav className="navbar mx-5">
        <div className="d-flex align-items-center">
          <img src={Logo} alt="" />
          <p className="ms-3 mt-9">Handmade is Heartmade</p>
        </div>

        <div>
          <div className="d-flex justify-content-end align-items-center mt-3">
            <form action="" className="flex ">
              <input type="text" className="searchInput" />
              <button type="submit" className="border-0">
                <FontAwesomeIcon
                  icon="fa-solid fa-magnifying-glass "
                  size="xl"
                  className="text-secondary ms-2 me-3 Navbar_awesomeIcon"
                  fixedWidth
                />
              </button>
            </form>

            <Link to="/">
              <FontAwesomeIcon
                icon="fa-solid fa-cart-shopping"
                size="xl"
                className="mx-3 Navbar_awesomeIcon"
                fixedWidth
              />
            </Link>

            <Link to="/login">
              <FontAwesomeIcon
                icon="fa-solid fa-user"
                size="xl"
                className="mx-3 Navbar_awesomeIcon"
                fixedWidth
              />
            </Link>
          </div>

          <ul className="list-unstyled d-flex nav_list me-3 mt-4">
            <li>
              <Link to="/home" className="navbar_link">
                HOME
              </Link>
            </li>
            <li>
              <Link to="store" className="navbar_link">
                STORE
              </Link>
            </li>
            <li>
              <Link to="course" className="navbar_link">
                COURSE
              </Link>
            </li>
            <li>
              <Link to="shop" className="navbar_link">
                SHOP
              </Link>
            </li>
            <li>
              <Link to="map" className="navbar_link">
                MAP
              </Link>
            </li>
            <li>
              <Link to="blog" className="navbar_link">
                BLOG
              </Link>
            </li>
            <li>
              <Link to="about" className="navbar_link">
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
