import React from 'react'
import { useRoutes } from 'react-router-dom'

import ChatRoom from './components/ChatRoom'
import BlogLayout from './components/Blog'

import Home from './pages/Home'
import Login from './pages/Login'
import BlogPage from './pages/BlogPage'
import BlogDetailPage from './pages/BlogDetailPage'
import BlogEditPage from './pages/BlogEditPage'
import NoFound from './pages/NoFound'

// const routeConfig = [
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/login',
//     // element: <Login />,
//   },
//   {
//     path: '/signup',
//     // element: <Signup />,
//   },
//   {
//     path: '/about',
//     // element: <About />,
//   },

//   {
//     path: '/news',
//     // element: <News />,
//   },
//   {
//     path: '/brand',
//     // element: <Brand />,
//   },
//   {
//     path: '/brand/:id',
//     // element: <BrandDetail />,
//   },
//   {
//     path: '/course',
//     // element: <Course />,
//   },
//   {
//     path: '/course/:id',
//     // element: <CourseDetail />,
//   },
//   {
//     path: '/product',
//     // element: <Product />,
//   },

//   {
//     path: '/product/:id',
//     // element: <ProductDetail />,
//   },

//   {
//     path: '/user',
//     children: [
//       {
//         path: '/user/account',
//         // element: <UserAccount />,
//       },
//       {
//         path: '/user/order',
//         // element: <UserOrder />,
//       },
//       {
//         path: '/user/like',
//         // element: <UserLike />,
//       },
//       {
//         path: '/user/blog',
//         // element: <UserBlog />,
//       },
//       {
//         path: '/user/chatRoom',
//         element: <ChatRoom />,
//       },
//     ],
//   },

//   {
//     path: 'blog',
//     element: <BlogLayout />,
//     children: [
//       {
//         path: 'edit',
//         element: <BlogEditPage />,
//       },
//       {
//         path: ':id',
//         element: <BlogDetailPage />,
//       },
//     ],
//   },

//   {
//     path: '/map',
//     // element: <Map />,
//   },

//   {
//     path: '*',
//     // element:<NoFound/>
//   },
// ]

const routeConfig = [
  {
    path: '/',
    element: <Home />,

    children: [
      {
        path: 'blog',
        element: <BlogLayout />, //  --> /blog
        children: [
          {
            path: 'edit',
            element: <BlogEditPage />, //  --> /blog/edit
          },
          {
            path: ':id',
            element: <BlogDetailPage />, //  --> /blog/:id
          },
        ],
      },
    ],
  },

  {
    path: 'login',
    element: <Login />,
  },

  {
    path: '*',
    element: <NoFound />,
  },
]

const App = () => {
  const element = useRoutes(routeConfig)
  return <>{element}</>
}

export default App
