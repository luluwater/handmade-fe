import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../src/assets/home/HANDMADE_LOGO.png'
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <>
      <nav className="navbar mx-5">
        <img src={Logo} alt="" />
        <div className="d-flex justify-content-center align-items-center">
          <form action="" className="flex">
            <input type="text" className="searchInput" />
            <button type="submit" className='border-0'>
              <FontAwesomeIcon
                icon="fa-solid fa-magnifying-glass"
                size="xl"
                className="text-secondary ms-2 me-3"
                fixedWidth
              />
            </button>
          </form>

          <Link to="/">
            <FontAwesomeIcon
              icon="fa-solid fa-cart-shopping"
              size="xl"
              className="text-secondary mx-3"
              fixedWidth
            />
          </Link>

          <Link to="/">
            <FontAwesomeIcon
              icon="fa-solid fa-user"
              size="xl"
              className="text-secondary mx-3"
              fixedWidth
            />
          </Link>

          <ul className="list-unstyled d-flex nav_list">
            <li>
              <Link to="/" className="nav_link">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/" className="nav_link">
                STORE
              </Link>
            </li>
            <li>
              <Link to="/" className="nav_link">
                COURSE
              </Link>
            </li>
            <li>
              <Link to="/" className="nav_link">
                SHOP
              </Link>
            </li>
            <li>
              <Link to="/" className="nav_link">
                MAP
              </Link>
            </li>
            <li>
              <Link to="/" className="nav_link">
                BLOG
              </Link>
            </li>
            <li>
              <Link to="/" className="nav_link">
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
