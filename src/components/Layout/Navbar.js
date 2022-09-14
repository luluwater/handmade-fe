import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../src/assets/HANDMADE_LOGO.png'
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { cartToggle } from '../../slices/cart-ui-slice'

const Navbar = () => {
  const totalQuantity = useSelector(
    (state) => state.productCartReducer.totalQuantity
  )
  const dispatch = useDispatch()
  const toggleCart = () => {
    dispatch(cartToggle())
  }
  return (
    <>
      <nav className="navbar">
        <div className="d-flex align-items-center">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>

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
                  className=" ms-2 me-3 navbar_awesomeIcon"
                  fixedWidth
                />
              </button>
            </form>

            <span onClick={toggleCart}>
              <FontAwesomeIcon
                icon="fa-solid fa-cart-shopping"
                size="xl"
                className="mx-3 navbar_awesomeIcon"
                fixedWidth
              />
            </span>

            <Link to="login" className="navbar_user">
              <FontAwesomeIcon
                icon="fa-solid fa-user"
                size="xl"
                className="mx-3 navbar_awesomeIcon"
                fixedWidth
              />
            </Link>

            <Link to="/" className="navbar_bars">
              <FontAwesomeIcon
                icon="fa-sharp fa-solid fa-bars"
                size="xl"
                className="navbar_awesomeIcon"
                fixedWidth
              />
            </Link>
          </div>

          <ul className="list-unstyled navbar_list me-3 mt-5">
            <li>
              <Link to="/" className="navbar_link">
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
