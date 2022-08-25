import React from 'react'

import { useRoutes } from 'react-router-dom'

import ChatRoom from './components/ChatRoom'
import BlogPage from './pages/BlogPage'
import BlogDetailPage from './pages/BlogDetailPage'
import BlogEditPage from './pages/BlogEditPage'

const routeConfig = [
  {
    path: '/',
    element: <ChatRoom />,
  },
  {
    path: '/login',
    // element: <Login />,
  },
  {
    path: '/signup',
    // element: <Signup />,
  },
  {
    path: '/about',
    // element: <About />,
  },

  {
    path: '/news',
    // element: <News />,
  },
  {
    path: '/brand',
    // element: <Brand />,
  },
  {
    path: '/brand/:id',
    // element: <BrandDetail />,
  },
  {
    path: '/course',
    // element: <Course />,
  },
  {
    path: '/course/:id',
    // element: <CourseDetail />,
  },
  {
    path: '/product',
    // element: <Product />,
  },

  {
    path: '/product/:id',
    // element: <ProductDetail />,
  },

  {
    path: '/user',
    children: [
      {
        path: '/user/account',
        // element: <UserAccount />,
      },
      {
        path: '/user/order',
        // element: <UserOrder />,
      },
      {
        path: '/user/like',
        // element: <UserLike />,
      },
      {
        path: '/user/blog',
        // element: <UserBlog />,
      },
      {
        path: '/user/chatRoom',
        element: <ChatRoom />,
      },
    ],
  },

  {
    path: '/blog',
    element: <BlogPage />,
    children: [
      {
        path: '/blog/:id',
        element: <BlogDetailPage />,
      },
    ],
  },
  {
    path: '/blog/editor',
    element: <BlogEditPage />,
  },

  {
    path: '/map',
    // element: <Map />,
  },

  {
    path: '*',
    // element:<NoFound/>
  },
]

const App = () => {
  const element = useRoutes(routeConfig)
  return <>{element}</>
}

export default App
