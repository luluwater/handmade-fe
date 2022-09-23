import React from 'react'
import Chatbot from 'react-chatbot-kit'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import config from './config'
import MessageParser from './MessageParser'
import ActionProvider from './ActionProvider'
import GeneralOptions from './widgets/OverView'

function CrazyCatBot() {
  const [show, setShow] = useState(false)
  const handleToggle = (e) => {
    setShow((pre) => !pre)
  }

  return (
    <>
      <div>
        <GeneralOptions />
        {show && (
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            headerText="小花貓客服"
            placeholderText="請輸入..."
            runInitialMessagesWithHistory
            disableScrollToBottom={false}
          />
        )}
      </div>
      <div onClick={handleToggle} className="bot-switch">
        {show ? (
          <FontAwesomeIcon className="bot-switch_times" icon="fas fa-times" />
        ) : (
          <FontAwesomeIcon
            className="bot-switch_times"
            icon="fa-brands fa-bots"
          />
        )}
      </div>
    </>
  )
}

export default CrazyCatBot
