import React, { useEffect, useState } from 'react'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'

function ChatToast({ text }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow((pre) => !pre)
  }, [text])

  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">手手聊天室</strong>
        </Toast.Header>
        <Toast.Body>{text}</Toast.Body>
      </Toast>
    </ToastContainer>
  )
}

export default ChatToast
