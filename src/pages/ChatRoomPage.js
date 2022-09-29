import React from 'react'
import ChatRoom from '../components/ChatRoom'
import { scrollToTop } from '../components/Filter/Paginate'

const ChatRoomPage = () => {
  scrollToTop()
  return (
    <>
      <ChatRoom />
    </>
  )
}
export default ChatRoomPage
