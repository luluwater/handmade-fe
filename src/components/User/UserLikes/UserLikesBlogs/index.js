// import '../../User.scss'
// import React from 'react'
// import { Container, Row, Table } from 'react-bootstrap'
// // import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import moment from 'moment'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { useUserLikesBlogQuery } from '../../../../services/userApi'

// //TODO: 取消收藏、頁碼
// export const UserLikesBlogs = () => {
//   const { data } = useUserLikesBlogQuery()
//   if (!data)
//     return (
//       <p className="user_like_text text-center py-3" colSpan={6}>
//         目前沒有收藏的文章(極度會取消的頁面)
//       </p>
//     )
//   return (
//     <>
//       <Table className="mt-5 ms-7 user_likes_table">
//         <thead>
//           <tr className="text-center">
//             <th>店家類別</th>
//             <th>文章分類</th>
//             <th>文章標題</th>
//             <th>發布時間</th>
//             <th></th>
//           </tr>
//         </thead>
//         {data?.map((item) => {
//           const transformBlog = moment(item.create_time).format('YYYY.MM.DD')
//           return (
//             <tbody key={item.blog_id}>
//               <tr className="text-center">
//                 <td>{item.category_name}</td>
//                 <td>{item.tag}</td>
//                 <td className="user_likes_blogTitle user_likes_ellipsis">
//                   <Link
//                     to={`/blog/${item.blog_id}`}
//                     className="user_orders_link fw-bold"
//                   >
//                     {item.title}
//                   </Link>
//                 </td>
//                 <td>{transformBlog}</td>
//                 <td>
//                   <button className="bg-primary user_like_course_card_favorite border-0 rounded-circle">
//                     <FontAwesomeIcon
//                       icon="fa-solid fa-heart"
//                       inverse
//                       size="sm"
//                     />
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           )
//         })}
//       </Table>
//     </>
//   )
// }
// export default UserLikesBlogs
