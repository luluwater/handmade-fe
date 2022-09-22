import React from 'react'
import ChatRoom from '../components/ChatRoom'
import { scrollToTop } from '../components/FIlter/Paginate'

const ChatRoomPage = () => {
  scrollToTop()
  return (
    <>
      <ChatRoom />
    </>
  )
}
export default ChatRoomPage
