import React from 'react'
import { useRoutes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/style.scss'
import Layout from './pages/Layout'

import BlogLayout from './components/Blog'
import Home from './pages/Home'
import Login from './pages/Login'

import About from './pages/AboutPage'
import AboutLayout from './components/About'
import News from './pages/NewsPage'
import NewsLayout from './components/News'
import UserAccountPage from './pages/UserAccountPage'
import UserOrdersPage from './pages/UserOrdersPage'
import UserAccount from './components/User/UserAccount'

import BlogEditPage from './pages/BlogEditPage'
import BlogDetailPage from './pages/BlogDetailPage'

import NoFound from './pages/NoFound'
import Proudcts from './pages/Products'

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
        // element: <Store />,
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
        path: 'login',
        element: <Login />,
      },

      {
        path: '*',
        element: <NoFound />,
      },
      {
        path: 'shop',
        element: <Proudcts />,
      },
    ],
  },
]

const App = () => {
  const element = useRoutes(routeConfig)
  return <>{element}</>
}

export default App
