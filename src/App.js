import React from 'react'
import { useRoutes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/style.scss'
import Layout from './pages/Layout'

import BlogLayout from './components/Blog'
import Home from './pages/Home'
import Login from './pages/Login'

import SignUp from './pages/SignUp'
import FindPassword from './pages/FindPassword'
import ResetPassword from './pages/ResetPassword'

import About from './pages/AboutPage'
import AboutLayout from './components/About'
import News from './pages/NewsPage'
import NewsLayout from './components/News'
import UserAccountPage from './pages/UserAccountPage'
import UserOrdersPage from './pages/UserOrdersPage'
import UserAccount from './components/User/UserAccount'

import BlogEditPage from './pages/BlogEditPage'
import BlogDetailPage from './pages/BlogDetailPage'

import Store from './pages/Store'
import StoreBanner from '../src/components/Store/StoreBanner'

import NoFound from './pages/NoFound'
import StoreDetail from './pages/StoreDetail'

const routeConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },

      {
        path: 'blog',
        element: <BlogLayout />,
      },
      {
        path: 'blog/edit',
        element: <BlogEditPage />,
      },
      {
        path: 'blog/:blogId',
        element: <BlogDetailPage />,
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
        element: <UserAccountPage />,
        children: [
          {
            path: 'management',
            element: <UserAccount />,
          },
          {
            path: 'orders',
            element: <UserOrdersPage />,
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
        path: 'product',
        // element: <Proudcts />,
      },
    ],
  },
]

const App = () => {
  const element = useRoutes(routeConfig)
  return <>{element}</>
}

export default App
