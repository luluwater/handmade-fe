import React from 'react'
import { useRoutes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/style.scss'
import Layout from './pages/Layout'
import CourseCart from './pages/CourseCart'

import BlogLayout from './components/Blog'
import Home from './pages/Home'
import Login from './pages/Login'

import SignUp from './pages/Signup'
import FindPassword from './pages/FindPassword'
import ResetPassword from './pages/ResetPassword'

import About from './pages/AboutPage'
import AboutLayout from './components/About'
import News from './pages/NewsPage'
import NewsLayout from './components/News'
import UserPage from './pages/UserPage'
import UserAccountPage from './pages/UserAccountPage'
import UserOrdersPage from './pages/UserOrdersPage'
import UserOrderDetailPage from './pages/UserOrderDetailPage'
import UserLikesPage from './pages/UserLikesPage'
import UserCouponsPage from './pages/UserCouponsPage'
import UserBlogsPage from './pages/UserBlogsPage'

import BlogDetailPage from './pages/BlogDetailPage'
import BlogCreatePage from './pages/BlogCreatePage'
import BlogEditPage from './pages/BlogEditPage'

import Store from './pages/Store'

import NoFound from './pages/NoFound'
import StoreDetail from './pages/StoreDetail'
import ProductDetailPage from './pages/ProductDetailPage'
import CourseDetailPage from './pages/CourseDetailPage'
import Products from './pages/Products'
import MapSearch from './pages/MapSearch'
import Courses from './pages/Courses'

const routeConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: 'blog',
        element: <BlogLayout />,
      },
      {
        path: 'blog/:blogId/edit',
        element: <BlogEditPage />,
      },
      {
        path: 'blog/:blogId',
        element: <BlogDetailPage />,
      },
      {
        path: 'blog/create',
        element: <BlogCreatePage />,
      },
      {
        path: 'map',
        element: <MapSearch />,
      },
      {
        path:'/course',
        element: <Courses />,
      },
      {
        path: 'store',
        element: <Store />,
      },
      {
        path: 'store/:storeId',
        element: <StoreDetail />,
      },
      {
        path: 'user',
        element: <UserPage />,
        children: [
          {
            path: 'management',
            element: <UserAccountPage />,
          },
          {
            path: 'orders',
            element: <UserOrdersPage />,
          },
          {
            path: 'orders/details',
            element: <UserOrderDetailPage />,
          },
          {
            path: 'likes',
            element: <UserLikesPage />,
          },
          {
            path: 'coupons',
            element: <UserCouponsPage />,
          },
          {
            path: 'blogs',
            element: <UserBlogsPage />,
          },
        ],
      },

      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'about',
        element: <AboutLayout />,
      },
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'news',
        element: <NewsLayout />,
      },

      {
        path: 'Login',
        element: <Login />,
      },
      {
        path: 'SignUp',
        element: <SignUp />,
      },
      {
        path: 'FindPassword',
        element: <FindPassword />,
      },
      {
        path: 'ResetPassword',
        element: <ResetPassword />,
      },

      {
        path: '*',
        element: <NoFound />,
      },
      {
        path: 'shop',
        element: <Products />,
      },
      {
        path: 'ProductDetailPage',
        element: <ProductDetailPage />,
      },
      {
        path: 'CourseDetailPage',
        element: <CourseDetailPage />,
      },
    ],
  },
  {
    path: '/course_cart',
    element: <CourseCart />,
  },
]

const App = () => {
  const element = useRoutes(routeConfig)
  return <>{element}</>
}

export default App
