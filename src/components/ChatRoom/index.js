import React from 'react'
import io from 'socket.io-client'

const ChatRoom = () => {
  const socket = io('http://localhost:8000')
  const socket2 = io('http://localhost:8000/admin')

  socket.on('messageFormServer', (dataFormServer) => {
    console.log(dataFormServer)
    socket.emit('dataToServer', { data: 'Data from the client' })
  })

  socket.on('joined', (msg) => {
    console.log(msg)
  })

  socket2.on('welcome', (dataFormServer) => {
    console.log(dataFormServer)
  })

  const handleClick = (e) => {
    console.log(e)
    const newMessage = '12314'
    socket.emit('dataToServer', { data: `${newMessage}data from the client` })
  }

  return (
    <>
      {' '}
      <button className="btn btn-primary" onClick={handleClick}>
        送出
      </button>
    </>
  )
}

export default ChatRoom
