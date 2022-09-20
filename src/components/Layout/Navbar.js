import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../src/assets/HANDMADE_LOGO.png'
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { cartToggle } from '../../slices/cart-ui-slice'
import { getProductTotal } from '../../slices/productCart-slice'
import { getCourseTotal } from '../../slices/courseCart-slice'

const Navbar = () => {
  const userData = JSON.parse(localStorage.getItem('user'))

  const authReducers = useSelector((state) => state.authReducers)

  const isLogin = authReducers.isLogin

  const courseCartQuantity = useSelector(
    (state) => state.courseCartReducer.totalQuantity
  )

  const productCartQuantity = useSelector(
    (state) => state.productCartReducer.totalQuantity
  )

  const cartTotalQuantity =
    Number(productCartQuantity) + Number(courseCartQuantity)

  const dispatch = useDispatch()
  const toggleCart = () => {
    dispatch(cartToggle())
  }

  const navRef = useRef(null)
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 152 ||
      document.documentElement.scrollTop > 152
    ) {
      navRef.current.classList.add('navbar_shrink')
    } else {
      navRef.current.classList.remove('navbar_shrink')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollFunction)
    return () => window.removeEventListener('scroll', scrollFunction)
  }, [])

  useEffect(() => {
    dispatch(getProductTotal())
  }, [courseCartQuantity, dispatch])

  useEffect(() => {
    dispatch(getCourseTotal())
  }, [productCartQuantity, dispatch])

  return (
    <>
      <nav className="navbar" ref={navRef}>
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

            <span onClick={toggleCart} className="navbar_cartIcon">
              <FontAwesomeIcon
                icon="fa-solid fa-cart-shopping"
                size="xl"
                className="mx-3 navbar_awesomeIcon"
                fixedWidth
              />
              {cartTotalQuantity > 0 ? (
                <span className="navbar_cartBadge d-flex justify-content-center align-items-center">
                  {cartTotalQuantity}
                </span>
              ) : (
                ''
              )}
            </span>

            {isLogin || userData ? (
              <>
                <Link to="/user/management">
                  {userData.user.avatar ? (
                    <div className="avatar ">
                      <img
                        src={userData.user.avatar}
                        className="rounded-circle"
                        alt="user img"
                      />
                    </div>
                  ) : (
                    <FontAwesomeIcon
                      icon="fa-solid fa-user"
                      size="xl"
                      className="mx-3 navbar_awesomeIcon"
                      fixedWidth
                    />
                  )}
                </Link>
              </>
            ) : (
              <Link to="login" className="navbar_user">
                <FontAwesomeIcon
                  icon="fa-solid fa-user"
                  size="xl"
                  className="mx-3 navbar_awesomeIcon"
                  fixedWidth
                />
              </Link>
            )}

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
              {/* <Link to="course" className="navbar_link">
                COURSE
              </Link> */}
              <a href="/course" className="navbar_link">
                COURSE
              </a>
            </li>
            <li>
              {/* <Link to="shop" className="navbar_link">
                SHOP
              </Link> */}
              <a href="/shop" className="navbar_link">
                SHOP
              </a>
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
