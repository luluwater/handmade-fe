import React from 'react'
import ChatRoom from '../components/ChatRoom'
import FilterPage from '../components/User/FilterPage'
import { scrollToTop } from '../components/FIlter/Paginate'

const ChatRoomPage = () => {
  scrollToTop()
  return (
    <>
      <FilterPage />
      <ChatRoom />
    </>
  )
}
export default ChatRoomPage
