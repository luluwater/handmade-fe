// import React, { useEffect, useState } from 'react'
// import io from 'socket.io-client'
// import ListGroup from 'react-bootstrap/ListGroup'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { SOCKET_URL } from '../../../utils/config'
// import { Link } from 'react-router-dom'
// import Tab from 'react-bootstrap/Tab'
// import moment from 'moment/moment'

// const RoomNav = () => {
//   const [roomList, setRoomList] = useState([])
//   const [chatBody, setChatBody] = useState([])

//   const socket = io(SOCKET_URL)

//   useEffect(() => {
//     socket.on('rooms', (roomData) => {
//       setRoomList(
//         roomData?.map((room) => {
//           return (
//             <ListGroup.Item
//               key={room.id}
//               className="d-flex align-items-center justify-content-between"
//               href={`#${room.endpoint}`}
//             >
//               <div>{room.room_title}</div>
//               <FontAwesomeIcon icon="fa-solid fa-angle-right" />
//             </ListGroup.Item>
//           )
//         })
//       )
//       setChatBody(
//         roomData?.map((room) => {
//           return (
//             <Tab.Pane key={room.id} eventKey={`#${room.endpoint}`}>
//               {/* header */}
//               <div className="position-relative text-center mt-3 ">
//                 {/* TODO:大廳畫面要漲怎樣?? */}
//                 <Link
//                   to="#"
//                   className="position-absolute bottom-0 start-0 fs-1 d-md-none"
//                 >
//                   <FontAwesomeIcon icon="fa-solid fa-angle-left" />
//                 </Link>
//                 <h5>{room.room_title}</h5>
//                 {/* TODO: 從 SOCKET 裡面拿 */}
//                 <div>xx人在線上</div>
//                 <Link
//                   to="#"
//                   className="position-absolute bottom-0 end-0 d-none d-md-block"
//                 >
//                   <FontAwesomeIcon icon="fa-solid fa-door-open" />
//                   {/* TODO:大廳畫面要漲怎樣?? */}
//                   <spna className="ms-md-2">離開</spna>
//                 </Link>
//               </div>
//               <hr />

//               <ListGroup className="chat_body d-flex flex-column gap-3 my-5">
//                 {room.msg.map((m) => {
//                   return (
//                     <>
//                       <div className="d-flex align-items-start gap-3">
//                         <img
//                           className="chat_avatar"
//                           src={require('../../../assets/user/profile_2.png')}
//                           alt="user avatar"
//                         />
//                         <ListGroup.Item className="chat_body_text-others w-25 rounded-2 ">
//                           {m.content}
//                         </ListGroup.Item>
//                         <div className="text-muted fs-7 text-center align-self-end">
//                           {moment(m.created_at).format('LT')}
//                         </div>
//                       </div>
//                       {/* TODO: SELF SIDE style 判斷訊息使用者的 ID 是否與 SESSION 一致，上下的區分 */}
//                       <div className="d-flex align-items-start gap-3 justify-content-end">
//                         <div className="text-muted fs-7 text-center align-self-end">
//                           {moment(m.created_at).format('LT')}
//                         </div>
//                         <ListGroup.Item className="chat_body_text-self w-25 rounded-2">
//                           Cras justo o Cras justo o Cras justo o
//                         </ListGroup.Item>{' '}
//                         <img
//                           className="chat_avatar"
//                           src={require('../../../assets/user/profile_2.png')}
//                           alt="user avatar"
//                         />
//                       </div>
//                     </>
//                   )
//                 })}
//               </ListGroup>
//             </Tab.Pane>
//           )
//         })
//       )
//     })
//   }, [])

//   return (
//     <>
//       <div className="d-flex align-items-center gap-3 p-1 m-3 bg-skin-brighter">
//         <img
//           style={{ width: '50px' }}
//           src={require('../../../assets/user/profile_2.png')}
//           alt="user avatar"
//         />
//         {/* TODO:改成 CURRENT USER local 裡面拿*/}
//         <span>黑色小花貓</span>
//       </div>
//       <div className="p-1 m-3">
//         <div className="d-flex align-items-center">
//           <h5 className="text-gray-darker m-0">聊天室</h5>
//           <div className="chat_amount fs-6 fw-bold ms-2 p-1 bg-dark rounded-circle text-white d-flex justify-content-center align-items-center">
//             {roomList.length}
//           </div>
//         </div>
//         <hr />

//         <ListGroup className="d-flex gap-3 rounded-0">{roomList}</ListGroup>

//         <Tab.Content>{chatBody}</Tab.Content>
//       </div>
//     </>
//   )
// }

// export default RoomNav
