import React from 'react'
import { useRoutes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/style.scss'
import Layout from './pages/Layout'

import BlogLayout from './components/Blog'

import Home from './pages/Home'
import Login from './pages/Login'
import BlogEditPage from './pages/BlogEditPage'
import BlogDetailPage from './pages/BlogDetailPage'
import NoFound from './pages/NoFound'

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
      //user router
      // {
      //   path: 'user',
      //   element: <UserList />,
      //   children: [
      //     {
      //       path: 'user/home',
      //       element: <Home />,
      //     },
      //     {
      //       path: 'user/mangment',
      //       element: <Mangment />,
      //     },
      //   ],
      // },

      {
        path: 'login',
        element: <Login />,
      },

      {
        path: '*',
        element: <NoFound />,
      },
    ],
  },
]

const App = () => {
  const element = useRoutes(routeConfig)
  return <>{element}</>
}

export default App
